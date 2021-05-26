import { App } from "vue"
import axios, {AxiosInstance, AxiosRequestConfig} from "axios"
import ConversationApi from "@/api/service/conversation.api";
import MessageApi from "@/api/service/message.api";

export type ApiOptions = {
    host?: string
}

export default {
    install: (app: App, options?: ApiOptions) => {
        app.config.globalProperties.$api = new ApiPlugin(options)
    }
}

export interface ApiPluginInterface {
    readonly conversation: ConversationApi
    readonly message: MessageApi
}

class ApiPlugin implements ApiPluginInterface {
    private readonly httpClient: AxiosInstance

    readonly conversation: ConversationApi
    readonly message: MessageApi

    constructor(options?: ApiOptions) {
        this.httpClient = axios.create(
            ApiPlugin.buildConfiguration(options)
        )

        this.conversation = new ConversationApi(this.httpClient)
        this.message = new MessageApi(this.httpClient)
    }

    private static buildConfiguration(options?: ApiOptions): AxiosRequestConfig {
        const configuration: AxiosRequestConfig = {}

        if (!options) {
            return configuration
        }

        if (options.host) {
            configuration.baseURL = options.host
        }

        return configuration
    }
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $api: ApiPluginInterface;
    }
}

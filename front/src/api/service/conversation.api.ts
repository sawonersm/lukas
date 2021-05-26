import Api from "@/api/service/base.api"
import {AxiosResponse} from "axios"

export default class ConversationApi extends Api {
    create(): Promise<AxiosResponse<ConversationResponse>> {
        return this.client.post("/conversation")
    }
}

export interface ConversationResponse {
    Hash: string
}

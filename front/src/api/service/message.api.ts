import Api from "@/api/service/base.api"
import {AxiosResponse} from "axios"

export default class MessageApi extends Api {
    ask(hash: string, message: string): Promise<AxiosResponse<Message[]>> {
        return this.client.post(`/conversation/${hash}/message`, {
            message: message
        })
    }
}

export interface Message {
    hash: string
    text: string
}

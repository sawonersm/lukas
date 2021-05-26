import {AxiosInstance} from "axios"

export interface ApiInterface {
    readonly client: AxiosInstance
}

export default class Api implements ApiInterface{
    readonly client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }
}

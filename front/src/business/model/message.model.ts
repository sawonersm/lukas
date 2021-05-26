import {Interlocutor} from "@/business/enum/interlocutor.enum"

export class MessageModel {
    private _hash: string | null

    private _message: string

    private _interlocutor: Interlocutor

    constructor(
        hash: string | null,
        message: string,
        interlocutor: Interlocutor
    ) {
        this._hash = hash
        this._message = message
        this._interlocutor = interlocutor
    }

    get hash(): string | null {
        return this._hash
    }

    get message(): string {
        return this._message
    }

    get interlocutor(): Interlocutor {
        return this._interlocutor
    }
}

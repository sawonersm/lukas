import {Module} from "vuex"

const STORAGE_SESSION_KEY = 'lucas_session'

type SessionState = {
    hash: string|null
}

const sessionState: SessionState = {
    hash: null
}

export const session: Module<any, any> = {
    namespaced: true,

    state: sessionState,

    getters: {
        getHash: state => {
            return state.hash
        }
    },

    mutations: {
        setHash: (state: SessionState, payload: string) => {
            state.hash = payload
        }
    },

    actions: {
        persist: async ({state}) => {
            const unserialized: SessionState = {
                hash: state.hash
            }

            sessionStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(unserialized))
        },

        load: async ({state}): Promise<boolean> => {
            const raw: string|null = sessionStorage.getItem(STORAGE_SESSION_KEY)
            if (!raw) {
                return false
            }

            const unserialized: SessionState = JSON.parse(raw)
            state.hash = unserialized.hash

            return true
        }
    }
}

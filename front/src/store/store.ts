import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import {session} from './session/session'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    modules: {
        session
    }
})

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

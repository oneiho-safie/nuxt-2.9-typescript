import { GetterTree } from 'vuex'
import { IApp } from '@/models/store/app/app'

const getters: GetterTree<IApp, any> = {
  state(state): IApp {
    return state
  },
  foo(state): number {
    return state.foo
  }
}

export default getters

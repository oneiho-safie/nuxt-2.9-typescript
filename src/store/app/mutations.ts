import { MutationTree } from 'vuex'
import { IApp } from '@/models/store/app/app'

const mutations: MutationTree<IApp> = {
  myMutation: (state, payload: any) => {
    state.foo = 999
  },
}

export default mutations

import { ActionTree } from 'vuex'
import { IApp } from '@/models/store/app/app'

const actions: ActionTree<IApp, any> = {
  myAction({ commit }) {
    commit('myMutation')
  }
}

export default actions

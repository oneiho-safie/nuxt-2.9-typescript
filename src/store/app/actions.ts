import { ActionContext } from 'vuex'
import { IApp } from '@/models/store/app/app'

export default {
  loginGet({ commit, dispatch, state }: ActionContext<IApp, any>) {
    console.log('loginGet')
  }
}

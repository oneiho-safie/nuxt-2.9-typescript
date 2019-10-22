import { NuxtAppOptions } from '@nuxt/types/app/'
import { ActionTree, Store, ActionContext } from 'vuex'

export const actions = {
  async nuxtServerInit(
    { dispatch, commit, state, getters }: ActionContext<any, any>,
    { req, res, route, redirect }: NuxtAppOptions
  ) {
    console.log('nuxtServerInit')
    return true
  }
}

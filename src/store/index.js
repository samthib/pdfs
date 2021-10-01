import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SiteTitle: "PDF Maker",
    SiteOwner: "Samuel Thibault",
    LinkOwner: "https://samuel-thibault.fr",
  },
  getters: {
    SiteCopyright: state => {
      return state.SiteTitle + ' - ' + state.SiteOwner+ ' ' + new Date().getFullYear()
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

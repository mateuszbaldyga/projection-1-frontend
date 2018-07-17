const initialState = () => ({
  pageLoading: false,
  isMenuOverlayOpened: false
})

export default {
  namespaced: true,
  state: initialState(),
  actions: {},
  mutations: {
    SET_PAGE_LOADING (state, val) {
      state.pageLoading = val
    },
    SWITCH_MENU_OVERLAY (state, val) {
      state.isMenuOverlayOpened = val === 'toggle' ? !state.isMenuOverlayOpened : val
    }
  },
  getters: {
    isMenuOverlayOpened: state => state.isMenuOverlayOpened,
    pageLoading: state => state.pageLoading
  }
}

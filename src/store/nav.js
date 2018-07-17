const initialState = () => ({
  headerMenuLinks: [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'What we do',
      link: '/what-we-do'
    },
    {
      label: 'How we do it',
      link: '/how-we-do-it'
    },
    {
      label: 'The journal',
      link: '/the-journal'
    }
  ],
  overlayMenuLinks: [
    {
      label: 'About',
      link: '/about'
    },
    {
      label: 'Contact',
      link: '/contact'
    }
  ]
})

export default {
  namespaced: true,
  state: initialState(),
  actions: {},
  mutations: {},
  getters: {
    headerMenu: state => state.headerMenuLinks,
    overlayMenu: state => [ ...state.headerMenuLinks, ...state.overlayMenuLinks]
  }
}

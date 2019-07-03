import Container from './Container'
import Row from './Row'
import Column from './Column'
import Hidden from './Hidden'
import Guides from './Guides'
import defaults from './helpers/defaults'

const VueFlexLayout = {
  install (Vue, options) {
    const config = Object.assign(defaults, options)

    Vue.component(Container.name, { extends: Container, config })
    Vue.component(Row.name, { extends: Row, config })
    Vue.component(Column.name, { extends: Column, config })
    Vue.component(Hidden.name, { extends: Hidden, config })
    Vue.component(Guides.name, { extends: Guides, config })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFlexLayout);
}

export default VueFlexLayout
export {Container, Row, Column, Hidden, Guides, defaults}


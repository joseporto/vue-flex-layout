import {pick, debounce} from 'lodash'
import {
  getDefaultContainerProps,
  getCurrentBreakpoint,
  getBreakpointValue
} from '../../helpers'

export default {
  name: 'Container',
  inheritAttrs: false,
  data () {
    return {
      breakpoint: null
    }
  },
  props: {
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    },
    /**
     * Remove gutter
     */
    nogutter: {
      type: Boolean,
      default: false
    },
    /**
     * Obey maxWidth
     */
    fluid: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    check () {
      const vw = window.innerWidth
      const { breakpoints } = this.$options.config
      const bp = getCurrentBreakpoint(vw, breakpoints)

      if (bp !== this.breakpoint) {
        this.breakpoint = bp
      }
    }
  },
  computed: {
    span () {
      if (!this.breakpoint)
        return this.maxWidth
      const { breakpoints } = this.$options.config
      return getBreakpointValue(this.breakpoint, breakpoints, this.reducedAttrs)
    },
    reducedAttrs () {
      const { breakpoints } = this.$options.config
      // xl, md, sm...
      const bpNames = Object.keys(breakpoints)
      // remove unecessary attrs
      const declaredProps = pick(this.$attrs, bpNames)
      // add default props
      const defaultProps = getDefaultContainerProps(breakpoints)
      // return default props overrated by declared dynamic attrs
      return Object.assign({}, ...defaultProps, declaredProps)
    },
    gutter () {
      const { gutter } = this.$options.config
      return this.nogutter ? 0 : gutter
    }
  },
  render (createElement) {
    const style = {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft:  `${this.gutter}px`,
      paddingRight: `${this.gutter}px`,
      width: '100%'
    }

    if (this.fluid) {
      style.maxWidth = '100%'
    } else {
      style.maxWidth = `${this.$options.config.maxWidth}px`
    }

    if (this.debug) {
      style.border = `dotted 1px rgba(${this.$options.config.colors.debug[0]},0.5)`
      style.background = `rgba(${this.$options.config.colors.debug[0]},0.3)`
    }

    return createElement(
      this.tag, {
        attrs: this.$attrs,
        style
      }, this.$slots.default)
  },
  mounted () {
    this.check()
    this.check = debounce(this.check, 150)
    window.addEventListener('resize', this.check)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.check)
  }
}

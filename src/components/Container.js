import {pick, debounce} from 'lodash'
import {
  getDefaultContainerProps,
  getCurrentBreakpoint,
  getBreakpointValue
} from './helpers'

export default {
  name: 'Container',
  inheritAttrs: false,
  data () {
    return {
      breakpoint: null
    }
  },
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    debug: {
      type: Boolean,
      default: false
    },
    noGutter: {
      type: Boolean,
      default: false
    }
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
        return
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
      return this.noGutter ? 0 : gutter
    }
  },
  render (createElement) {
    return createElement(
      this.tagName, {
        style: Object.assign({
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: `${this.fluid ? '100%' : `${this.$options.config.maxWidth}px`}`,
          maxWidth: `${this.span ? `${this.span}px` : '100%'}`,
          paddingLeft:  `${this.gutter}px`,
          paddingRight: `${this.gutter}px`
        },
          this.debug ? {
            border: `dotted 1px ${this.$options.config.debugBorderColor}`,
            background: this.$options.config.debugColor
          } : {}
        )
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

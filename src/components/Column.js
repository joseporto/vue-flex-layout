import {pick, debounce} from 'lodash'
import {
  getDefaultColumnProps,
  getCurrentBreakpoint,
  getBreakpointValue
} from './helpers'

export default {
  name: 'Column',
  inheritAttrs: false,
  data () {
    return {
      breakpoint: null
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    noGutter: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      validator(value) {
        return [
          'stretch',
          'flex-start',
          'flex-end',
          'center',
          'baseline'
        ].indexOf(value) !== -1
      }
    },
    debug: {
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
    shift () {
      if (!this.breakpoint)
        return
      const { breakpoints } = this.$options.config
      return getBreakpointValue(this.breakpoint, breakpoints, this.reducedAttrs, true)
    },
    reducedAttrs () {
      const { breakpoints, columns } = this.$options.config
      // xl, md, sm...
      const bpNames = Object.keys(breakpoints)
      // xlShift, mdShift, smShift...
      const bpShiftNames = bpNames.map(bpName => bpName + 'Shift')
      // remove unecessary attrs
      const declaredProps = pick(this.$attrs, [...bpNames, ...bpShiftNames])
      // add default props
      const defaultProps = getDefaultColumnProps(breakpoints, columns)
      // return default props overrated by declared dynamic attrs
      return Object.assign({}, ...defaultProps, declaredProps)
    },
    column () {
      const { columns } = this.$options.config
      return this.span / columns * 100
    },
    offset () {
      const { columns } = this.$options.config
      return this.shift / columns * 100
    },
    gutter () {
      const { gutter } = this.$options.config
      return this.noGutter ? 0 : gutter
    },
  },
  render (createElement) {
    return createElement(
      this.tag, {
        attrs: this.$attrs,
        style: Object.assign({
          position: 'relative',
          minHeight: '1px',
          width: '100%',
          flex: `0 0 ${this.column}%`,
          maxWidth: `${this.column}%`,
          paddingLeft:  `${this.gutter/2}px`,
          paddingRight: `${this.gutter/2}px`,
          marginLeft: `${this.offset}%`,
        },
        this.align ? {
          'align-items': `${this.align}`
        } : {},
        this.debug ? {
          border: `dotted 1px ${this.$options.config.colors.debugBorder}`,
          background: this.$options.config.colors.debug
        } : {})
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

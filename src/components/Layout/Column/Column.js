import {pick, debounce} from 'lodash'
import completeCssProperty from '../../helpers/completeCssProperty'

import {
  getDefaultColumnProps,
  getCurrentBreakpoint,
  getBreakpointValue
} from '../../helpers'

export default {
  name: 'Column',
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
     * Remove gutter
     */
    nogutter: {
      type: Boolean,
      default: false
    },
    /**
     * Vertical column alignment
     */
    align: {
      type: String,
      validator(value) {
        return [
          'stretch',
          'start',
          'end',
          'center',
          'baseline'
        ].indexOf(value) !== -1
      }
    },
    /**
     * Set to apply some debug styling
     */
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
        return false
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
      return this.nogutter ? 0 : gutter
    },
  },
  render (createElement) {
    const style = {
      display: 'flex',
      position: 'relative',
      minHeight: '1px',
      width: '100%',
      maxWidth: `${this.column}%`,
      paddingLeft:  `${this.gutter/2}px`,
      paddingRight: `${this.gutter/2}px`,
      marginLeft: `${this.offset}%`,
    }

    if (this.span) {
      style.flex = `0 0 ${this.column}%`
    } else {
      style.left = 'auto',
      style.right = 'auto'
    }
    if (this.align) {
      style.alignItems = `${completeCssProperty(this.align)}`
    }
    if (this.debug) {
      style.border = `dotted 1px rgba(${this.$options.config.colors.debug[2]},0.5)`
      style.background = `rgba(${this.$options.config.colors.debug[2]},0.3)`
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

import {debounce} from 'lodash'

export default {
  name: 'hidden',
  data () {
    return {
      viewport: null
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    from: {
      type: String,
    },
    until: {
      type: String,
    }
  },
  computed: {
    isVisible () {
      const { breakpoints } = this.$options.config
      let isVisible = false

      if (!!this.from && !!this.until) {
        const fromWidth = breakpoints[this.from]
        const untilWidth = breakpoints[this.until]
        isVisible = this.viewport < fromWidth || this.viewport >= untilWidth
      }
      else if (this.from) {
        const fromWidth = breakpoints[this.from]
        isVisible = this.viewport < fromWidth
      }
      else if (this.until) {
        const untilWidth = breakpoints[this.until]
        isVisible = this.viewport >= untilWidth
      }

      return isVisible
    }
  },
  methods: {
    setViewport () {
      this.viewport = window.innerWidth
    }
  },
  render (createElement) {
    if (this.isVisible) {
      return createElement(
        this.tag,
        this.$slots.default
      )
    } else {
      return null
    }
  },
  mounted () {
    this.setViewport = debounce(this.setViewport, 150)
    window.addEventListener('resize', this.setViewport)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setViewport)
  }
}

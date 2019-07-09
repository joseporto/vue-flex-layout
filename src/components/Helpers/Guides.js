export default {
  name: 'Guides',
  data() {
    return {
      visibility: this.visible
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
    assignedkey: {
      type: String,
      default: 'g'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    document.addEventListener('keydown', e => {
      if (e.key === this.assignedkey) {
        this.visibility = !this.visibility
      }
    });
  },
  render (createElement) {
    return this.visibility ? createElement(
      this.tag, {
        class: {
          'layout__guides-main': true
        },
      }, [
        createElement(
          'div', {
            class: {
              'layout__guides-helper': true
            }
          }, [createElement(
            'div', {
              class: {
                'layout__guides-lines': true
              }
            }, [...Array(13).keys()].map(index => {
              const elements = []
              elements.push(createElement(
                'div', {
                  class: {
                    'layout__guides-line': true,
                    [`layout__guides-line-${index}`]: true
                  },
                  key: `line-${index}`
                }
              ))
              elements.push(createElement(
                'div', {
                  class: {
                    'layout__guides-gutter': true,
                    [`layout__guides-gutter-${index}`]: true
                  },
                  key: `gutter-${index}`
                }
              ))
              return elements
            })
          )]
        ),
        createElement(
          'div', {
          }, [createElement(
            'div', {
              class: {
                'layout__guides-child': true
              }
            }
          )]
        )
      ]
    ) : null
  }
}

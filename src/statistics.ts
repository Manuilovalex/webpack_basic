import * as $ from 'jquery'

function createStatistics(): { getClicks: () => number | string; destroy: () => string } {
  let counter = 0
  let isDestroyed = false
  const listener = () => counter++

  $(document).on('click', listener)

  return {
    destroy() {
      $(document).off('click', listener)
      isDestroyed = true
      return 'Destroyed'
    },

    getClicks() {
      if (isDestroyed) return 'Statistics is destroyed'
      return counter
    }
  }
}

window['statistics'] = createStatistics()

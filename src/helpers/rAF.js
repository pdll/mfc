const requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback, element) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

export default (fn, delay) => {
  if (!window.requestAnimationFrame &&
    !window.webkitRequestAnimationFrame &&
    !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
    !window.oRequestAnimationFrame &&
    !window.msRequestAnimationFrame) { return window.setTimeout(fn, delay) }

  const start = new Date().getTime()
  const handle = {}

  function loop () {
    const current = new Date().getTime()
    const delta = current - start

    delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop)
  }

  handle.value = requestAnimFrame(loop)
  return handle
}
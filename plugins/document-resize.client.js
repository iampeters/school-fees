export default function () {
  function resizeEventListener() {
    const root = document.querySelector(':root')
    root.style.setProperty('--viewport-height', `${window.innerHeight}px`)
  }

  window.addEventListener('resize', resizeEventListener)

  resizeEventListener()
}

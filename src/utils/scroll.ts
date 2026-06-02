export function smoothScrollTo(targetY: number, duration = 260) {
  const startY = window.scrollY
  const diff = targetY - startY
  if (diff === 0) return

  const startTime = performance.now()

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = progress

    window.scrollTo(0, startY + diff * ease)

    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function scrollToElement(el: HTMLElement, duration = 260) {
  const navOffset = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--navbar-scroll-offset') || '120',
    10
  )
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset
  smoothScrollTo(top, duration)
}

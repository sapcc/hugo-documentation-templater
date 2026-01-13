document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(".fullviewmode-wrapper")

  wrappers.forEach((wrapper) => {
    const openLink = wrapper.querySelector(".js-fullviewmode-open")
    if (!openLink) return

    // Create overlay
    const overlay = document.createElement("div")
    overlay.className = "fullviewmode-overlay"

    // Close function
    const closeOverlay = () => {
      overlay.style.display = "none"
    }

    // Bootstrap close button
    const closeBtn = document.createElement("button")
    closeBtn.type = "button"
    closeBtn.className = "fullviewmode-btn btn-close"
    closeBtn.setAttribute("aria-label", "Close")
    closeBtn.addEventListener("click", closeOverlay)
    overlay.appendChild(closeBtn)

    // Clone wrapper content
    const contentClone = wrapper.cloneNode(true)

    // remove open trigger from cloned content
    contentClone
      .querySelectorAll(".js-fullviewmode-open")
      .forEach((el) => el.remove())

    // Wrap content to inherit Docsy typography/colors
    const contentWrapper = document.createElement("div")
    contentWrapper.className = "td-content"
    contentWrapper.appendChild(contentClone)

    overlay.appendChild(contentWrapper)

    // Click outside content to close
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay()
    })

    // Esc key to close (once per overlay)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.style.display === "block") {
        closeOverlay()
      }
    })

    document.body.appendChild(overlay)

    // Open overlay
    openLink.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      overlay.style.display = "block"
    })
  })
})

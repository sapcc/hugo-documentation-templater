document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(".fullviewmode-wrapper")

  wrappers.forEach((wrapper) => {
    const btn = wrapper.querySelector(".fullviewmode-btn")
    if (!btn) return

    // Create overlay
    const overlay = document.createElement("div")
    overlay.className = "fullviewmode-overlay td-content"

    // Close function
    const closeOverlay = () => {
      overlay.style.display = "none"
    }

    // Adds bootstrap close button
    const closeBtn = document.createElement("button")
    closeBtn.type = "button"
    closeBtn.className = "btn-close"
    closeBtn.setAttribute("aria-label", "Close")
    closeBtn.addEventListener("click", closeOverlay)
    overlay.appendChild(closeBtn)

    // Clone all inner content
    const contentClone = wrapper.cloneNode(true)
    // Remove the original button from the clone to avoid duplicate button
    const clonedBtn = contentClone.querySelector(".fullviewmode-btn")
    if (clonedBtn) clonedBtn.remove()

    overlay.appendChild(contentClone)

    // Click outside to close
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay()
    })

    // Esc key to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOverlay()
    })

    document.body.appendChild(overlay)

    // Show overlay on click
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      overlay.style.display = "block"
    })
  })
})

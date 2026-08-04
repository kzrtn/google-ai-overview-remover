const observer = new MutationObserver((mutationList, observer) => {
  const target = document.getElementById('eKIzJc')
  if (target) {
    console.log('found element', target)
    target.remove()
    observer.disconnect()
  }
})

const config = { childList: true, subtree: true };
observer.observe(document, config);
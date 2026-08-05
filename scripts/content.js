const observer = new MutationObserver((mutationList, observer) => {
  const AIOverview = document.getElementById('eKIzJc') || document.querySelector('[jsname="ZLxsqf"]')
  if (AIOverview) {
    AIOverview.remove()
    console.log('Removed global AI Overview')
  }

  const AIModeTab = document.querySelector('[jsname="xBNgKe"]')
  if (AIModeTab && !disabledAIModeTab) {
    AIModeTab.style = "display: none" // using .remove() breaks the whole list
    disabledAIModeTab = true
    console.log('Removed AI mode tab')
  }

  /* 
  AI Overview answers are class="r2fjmd t0bRye", while
  non-AI answers are class="r2fjmd t0bRye Sbgr0".
  It's very fragile to select by classes like this,
  but I can't find any other way to differentiate between
  the two without the user opening the tabs first
  */
  const peopleAsk = document.querySelector('[class="r2fjmd t0bRye"]')
  if (peopleAsk) {
    const peopleAskTabContainer = peopleAsk.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    peopleAskTabContainer.remove()
    console.log("Removed AI suggested question and answer in 'People Also Ask'")
  }
})

let disabledAIModeTab = false;
const config = { childList: true, subtree: true };
observer.observe(document, config);
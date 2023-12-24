function getDomain() {
  let activeTab = window.location.host;
  if (activeTab) {
    if (activeTab.includes("youtube")) {
      return "Youtube";
    }
  }
  return "OTHER";
}

function getIdList() {
  const domain = getDomain();
  if (domain === "Youtube") {
    return [
      ".ytp-ad-skip-button-container",
      ".ytp-ad-skip-button-container-detached",
      ".ytp-ad-skip-button-modern",
    ];
  }
  return [];
}

function addEventListerner() {
  const ids = getIdList();
  for (let id of ids) {
    const selector = document.querySelector(id);
    if (selector) {
      selector.click();
      break;
    }
  }
}
setInterval(() => {
  addEventListerner();
}, 1000);

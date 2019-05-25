document.querySelector(".confetti-checkbox").addEventListener("change", e => {
  const { checked } = e.target;
  chrome.storage.sync.set({ doConfetti: checked });
});
chrome.storage.sync.get("doConfetti", result => {
  document.querySelector(".confetti-checkbox").checked = result.doConfetti;
});

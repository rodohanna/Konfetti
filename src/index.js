import { confetti } from "dom-confetti";
chrome.extension.sendMessage({}, function(response) {
  const readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      document.addEventListener(
        "click",
        e => {
          const { pageX, pageY } = e;
          const div = document.createElement("div");
          div.style.left = `${pageX}px`;
          div.style.top = `${pageY}px`;
          div.style.position = "absolute";
          div.style.width = "20px";
          div.style.height = "20px";
          div.style.zIndex = 1000;
          div.style.pointerEvents = "none";
          document.getElementsByTagName("body")[0].appendChild(div);
          confetti(div);
          setTimeout(() => {
            div.parentNode.removeChild(div);
          }, 10000);
        },
        { capture: true }
      );
    }
  }, 10);
});

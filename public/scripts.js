console.log("Frontend script loaded.");

fetch("/api/message")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("h1").textContent = data.message;
  });

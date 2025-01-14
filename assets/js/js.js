window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.body.classList.remove("hidden");
    }, 1000);
  });
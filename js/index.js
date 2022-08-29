const wrapper = document.querySelector(".wrapper");
const hamburgerMenu = wrapper.nextElementSibling;

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.className == "hamburger-menu") {
    wrapper.style.display = "flex";
    hamburgerMenu.innerHTML = `<i class="bi bi-x-lg"></i>`;
    hamburgerMenu.className = "cancel";
  } else {
    wrapper.style.display = "none";
    hamburgerMenu.innerHTML = `
    <div></div>
    <div></div>
    <div></div>`;
    hamburgerMenu.className = "hamburger-menu";
  }
});

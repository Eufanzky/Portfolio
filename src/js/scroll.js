//THIS CODE MAKES A SCROLL FOR LINKS

//select links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    const target = document.querySelector(href);

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

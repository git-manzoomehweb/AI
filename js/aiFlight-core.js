const clickerUl = document.querySelectorAll("ul.clicker-list");
clickerUl.forEach((el) => {
  const liItem = el.querySelectorAll("li");
  liItem[0].classList.add("active");
  liItem.forEach((li) => {
    li.addEventListener("click", () => {
      liItem.forEach((element) => {
        element.classList.remove("active");
      });
      li.classList.add("active");
    });
  });
});
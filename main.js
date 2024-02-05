const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const footer = document.getElementById("footer");

const buttonComeBack = document.getElementById("voltar");

window.addEventListener("scroll", () => {
   if(window.scrollY >= 130){
      header2.style.display = "flex";

      footer.style.position = "sticky";
      footer.style.bottom = 0;

   }

   if(window.scrollY <= 130){
      header2.style.display = "none";

      footer.style.position = "initial";
   }
})

buttonComeBack.addEventListener("click", () => {
   window.scrollTo(0, 0)
})
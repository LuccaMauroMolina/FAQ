let preg = document.querySelectorAll(".pregs")

preg.forEach(function(preg) {
    preg.addEventListener("click", () => {

        const faq = preg.querySelector(".resp")
        const svg = preg.querySelector(".svg")
        const black = preg.querySelector(".faq-pre")

        faq.classList.toggle("text")
        svg.classList.toggle("rotate")
        black.classList.toggle("black")
    })

})
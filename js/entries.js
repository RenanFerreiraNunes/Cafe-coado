/* criando um observador */
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('aparecer')
        } else {
            entrada.target.classList.remove('aparecer')
        }
    })
})

/* pegando todos os elementos do meu site por meio da classe esconder */
const elementos = document.querySelectorAll('.esconder')

/* Usando for each pra fazer uma varredura */
elementos.forEach((elemento) => observador.observe(elemento))
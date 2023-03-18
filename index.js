const liste = document.querySelectorAll('.liste')
function ListeActive() {
    liste.forEach((item) => {
        item.classList.remove('active')
        this.classList.add('active')
    })
}
liste.forEach((item) => {
    item.addEventListener('click', ListeActive)
})

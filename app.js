const nextQuote = document.querySelector('.cubo-icon')
const numberQuote = document.querySelector('.number')
const quote = document.querySelector('.quote')

function nextTextQuote() {
    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`)
        .then((data) => data.json())
        .then((data) => {
            quote.innerHTML = `"${data.slip.advice}"`
            numberQuote.textContent = `#${data.slip.id}`
        })
        .catch(err => console.log("API Error", err));
}

nextQuote.addEventListener('click', nextTextQuote)

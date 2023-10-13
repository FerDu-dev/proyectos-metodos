const formElement = document.querySelector('form')
const primeraCadena = document.getElementById('primeraCadena')
const segundaCadena = document.getElementById('segundaCadena')
const res = document.getElementById('res')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = {
    text1: primeraCadena.value,
    text2: segundaCadena.value
  }

  fetch('http://localhost:3000/api/lcs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then((data) => {
      res.value = data.value
    })
})

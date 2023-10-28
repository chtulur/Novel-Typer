const btnUpload = document.querySelector('.btnUpload')
const inpFile = document.querySelector('#inpFile')
const resultText = document.querySelector('.resultText')

btnUpload.addEventListener('click', () => {
  const formData = new FormData()

  formData.append('pdfFile', inpFile.files[0])

  fetch('/extract-text', {
    method: 'post',
    body: formData,
  })
    .then(response => {
      return response.text()
    })
    .then(extractedText => {
      let letters = extractedText.trim().split('')
      letters.forEach(l => {
        let letter = document.createElement('span')
        letter.textContent = l
        resultText.append(letter)
      })
    })
})

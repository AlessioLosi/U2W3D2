const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')

function stampaNome(){
  const nomeSalvato= localStorage.getItem('form-content')
  const nomeStampato =document.getElementById('nomeSalvato')
  nomeStampato.innerText = nomeSalvato? `il nome utente è: ${nomeSalvato}` : 'Nessun nome utente';
}

const salva = function () {
    const fNameValue = fName.value
    const lNameValue = lName.value
    localStorage.setItem('form-content', fNameValue + lNameValue)
    if (fNameValue, lNameValue) {
        localStorage.setItem('form-content', fNameValue + lNameValue)
        stampaNome();
}}
saveButton.addEventListener('click', salva) 

const reset= function(){
  fName.value = ''
  lName.value= ''
  localStorage.removeItem('form-content', fNameValue + lNameValue)
  alert('hai eliminato il nome utente')
}
resetButton.addEventListener('click', reset)
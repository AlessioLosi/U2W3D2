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
    const fullName= fNameValue + lNameValue
    if (fNameValue, lNameValue) {
        localStorage.setItem('form-content', fullName)
        stampaNome();
}}
saveButton.addEventListener('click', salva) 

const reset= function(){
  fName.value = ''
  lName.value= ''
  const fullName= fNameValue + lNameValue
  localStorage.removeItem('form-content', fullName)
  alert('hai eliminato il nome utente')
}
resetButton.addEventListener('click', reset) 

 stampaNome()
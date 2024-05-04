const scriptURL = 'https://script.google.com/macros/s/AKfycbxsEn_9X1S5jShgS8ZIcrWmI1mxw98Oo7lnbF7lkS8eGDIv-5miIwLCnOJH7BDN8M8pAA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

function comprueba(){
  form = $("#agregarProducto")
  var numero =document.getElementById("cantidad")
  if(numero.value <= 0){
    numero.setCustomValidity("Invalid field.")
  }else{
    numero.setCustomValidity("")
  }
  if (form[0].checkValidity() === false ) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.addClass('was-validated')
}
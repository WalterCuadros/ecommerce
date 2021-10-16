function validar_login() { 
    var formulario = document.getElementById("login");
    var usuario1 = document.getElementById("usuario").value;
    var contra1 = document.getElementById("contra").Value;
    var boton = document.getElementById("btn");
    var datos_correctos=true;
    if (formulario.usuario.value=="") {
        formulario.usuario.setAttribute("class","form-control is-invalid");
        datos_correctos=false;
    
    }else{
        formulario.usuario.setAttribute("class", "form-control is-valid")

    }
    if (formulario.contra.value=="") {
        formulario.contra.setAttribute("class","form-control is-invalid");
        datos_correctos=false;

    }else{
        formulario.contra.setAttribute("class", "form-control is-valid");

    }
    if (datos_correctos == true) {
        boton.setAttribute("onclick", location.href='store.html');
    }
}




function registro() {
    var formulario = document.getElementById("register");
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var nacimiento = document.getElementById("fecha_de_nacimiento").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña1").value;
    var contraseña2 = document.getElementById("contraseña2").value;
    var pais = document.getElementById("país").value;
    var boton = document.getElementById("btnr");
    var datos_correctos = true;

    if (formulario.nombre.value=="") {
        formulario.nombre.setAttribute("class","form-control is-invalid");
        datos_correctos = false;  

    }else{
        formulario.nombre.setAttribute("class","form-control is-valid");
    }

    if (formulario.apellidos.value=="") {
        formulario.apellidos.setAttribute("class","form-control is-invalid");
        datos_correctos = false;

    }else{
        formulario.apellidos.setAttribute("class","form-control is-valid");
    }
    if (formulario.fecha_de_nacimiento.value=="") {
        formulario.fecha_de_nacimiento.setAttribute("class","form-control is-invalid");
        datos_correctos = false;

    }else{
        formulario.fecha_de_nacimiento.setAttribute("class","form-control is-valid");        
    }
    if (formulario.email.value=="") {
        formulario.email.setAttribute("class","form-control is-invalid");
        datos_correctos = false;
    }else{
        formulario.email.setAttribute("class","form-control is-valid");        
    }

    if (formulario.contraseña.value=="") {
        formulario.contraseña.setAttribute("class","form-control is-invalid");
        datos_correctos = false;

    }else{
        formulario.contraseña.setAttribute("class","form-control is-valid");
    }

    if (formulario.contraseña2.value=="") {
        formulario.contraseña2.setAttribute("class","form-control is-invalid");
        datos_correctos = false;

    }else{
        formulario.contraseña2.setAttribute("class","form-control is-valid");        
    }
    if (formulario.contraseña2.value !== contraseña) {
        return formulario.contraseña2.setAttribute("class", "form-control is-invalid")
    }

    if (formulario.pais.value=="") {
        formulario.pais.setAttribute("class","form-control is-invalid");
        datos_correctos = false;

    }else{
        formulario.pais.setAttribute("class","form-control is-valid");   
    }

    if (datos_correctos == true) {
        boton.setAttribute("onclik",location.href='store.html');
    }


}





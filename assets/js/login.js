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
        boton.setAttribute("onclick", "location.href='store.html'");
    }
}

function validar_registro() { 
    var formulario = document.getElementById("register");
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").Value;
    var fecha = document.getElementById("fecha de nacimiento").Value;
    var correo = document.getElementById("email").Value;
    var contraseña = document.getElementById("contraseña").Value;
    var pais = document.getElementById("pais").Value;
    var boton = document.getElementById("btnr");
    var datos_correctos=true;
    
}


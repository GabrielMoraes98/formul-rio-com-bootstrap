$('#form-contato').submit(function() {
    var nome = $("#nome")
    var email = $("#email")
    var telefone = $("#tel")
    var mensagem = $("#textarea")
    var erro = $(".alert")
    var campo = $("#campo-erro")
   

    //removendo o elemento da tela sempre que tentar submeter o formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid')

    if (nome.val() == ''){
       erro.removeClass('d-none');
        campo.html('nome');
        nome.focus();
        nome.addClass('is-invalid')
        return false;
    }else if (!checkUsername(nome.val())) {
        erro.removeClass('d-none');
        campo.html('nome somente com letras');
        nome.focus();
        nome.addClass('is-invalid')
        return false;
    }

    if (!checkEmail(email.val())) {
        erro.removeClass('d-none');
        campo.html('E-mail completamente');
        email.focus();
        email.addClass('is-invalid')
        return false;
    }


     if (telefone.val() == ''){
        erro.removeClass('d-none');
         campo.html('telefone');
         telefone.focus();
         telefone.addClass('is-invalid')
         return false;
     }else if(!checkTel(telefone.val())){
        erro.removeClass('d-none');
         campo.html('telefone somente com números');
         telefone.focus();
         telefone.addClass('is-invalid')
         return false;
     }else if(telefone.val().length<8){
        erro.removeClass('d-none');
         campo.html('telefone com o número completo');
         telefone.focus();
         telefone.addClass('is-invalid')
         return false;
     }
     
     
     if (mensagem.val() == ''){
        erro.removeClass('d-none');
         campo.html('mensagem');
         mensagem.focus();
         mensagem.addClass('is-invalid')
         return false;
     }



    // se chaegar aqui pode enviar os dados
    $("#body").html("<div> <h2>OBRIGADO!</h2> </div>") 
    return true;
   
    
})

function checkTel(tel){
    return /^[0-9]+$/.test(tel);
}

function checkUsername(username){
    return /^[A-Za-z]/.test(username);
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
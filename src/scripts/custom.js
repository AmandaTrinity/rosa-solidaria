// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function validarFormulario(event) {
    // Impede o envio do formulário, caso alguma validação falhe
    event.preventDefault();

    // Pegando os valores dos campos
    var nome = document.getElementById("input-nome").value;
    var email = document.getElementById("input-email").value;
    var numero = document.getElementById("input-number").value;
    var mensagem = document.getElementById("input-texto").value;

    // Pegando a área de feedback
    var feedbackMessage = document.getElementById("feedbackMessage");

    // Limpando qualquer mensagem anterior
    feedbackMessage.classList.remove("success", "error");
    feedbackMessage.innerHTML = "";

    // Validando se os campos estão preenchidos
    if (nome === "") {
      feedbackMessage.classList.add("error");
      feedbackMessage.innerHTML = "Por favor, preencha o campo 'Nome'.";
      feedbackMessage.style.display = "block";
      return false;
    }

    if (email === "") {
      feedbackMessage.classList.add("error");
      feedbackMessage.innerHTML = "Por favor, preencha o campo 'Email'.";
      feedbackMessage.style.display = "block";
      return false;
    }

    // Validando o formato do e-mail
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/;
    if (!emailRegex.test(email)) {
      feedbackMessage.classList.add("error");
      feedbackMessage.innerHTML = "Por favor, insira um e-mail válido.";
      feedbackMessage.style.display = "block";
      return false;
    }

    if (numero === "") {
      feedbackMessage.classList.add("error");
      feedbackMessage.innerHTML = "Por favor, preencha o campo 'Número'.";
      feedbackMessage.style.display = "block";
      return false;
    }

    if (mensagem === "") {
      feedbackMessage.classList.add("error");
      feedbackMessage.innerHTML = "Por favor, preencha o campo 'Mensagem'.";
      feedbackMessage.style.display = "block";
      return false;
    }

    // Se todas as validações passarem, exibe uma mensagem de sucesso
    feedbackMessage.classList.add("success");
    feedbackMessage.innerHTML = "Formulário enviado com sucesso!";
    feedbackMessage.style.display = "block";

    // Aqui, você pode submeter o formulário via Ajax ou uma ferramenta como Formspree
    event.target.submit(); // Submete o formulário
  }

  // Adicionando o evento de validação no submit do formulário
  document.getElementById("contactForm").addEventListener("submit", validarFormulario);
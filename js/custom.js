// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function validarFormulario(event) {
    // Impede o envio do formulário, caso alguma validação falhe
    event.preventDefault();

    // Pegando os valores dos campos
    const form = event.target;
    const nome = form.querySelector("#input-nome").value.trim();
    const email = form.querySelector("#input-email").value.trim();
    const numero = form.querySelector("#input-number").value.trim();
    const mensagem = form.querySelector("#input-texto").value.trim();

    // Pegando a área de feedback
    const feedbackMessage = form.querySelector("#feedbackMessage");

    // Limpando qualquer mensagem anterior
    feedbackMessage.classList.remove("success", "error");
    feedbackMessage.textContent = "";
    feedbackMessage.style.display = "none";

    let errorMessage = "";

    // Validando se os campos estão preenchidos
    if (nome === "") errorMessage = "Por favor, preencha o campo 'Nome'.";
    else if (email === "") errorMessage = "Por favor, preencha o campo 'Email'.";
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/.test(email)) {
      errorMessage = "Por favor, insira um e-mail válido.";
    } else if (numero === "") {
      errorMessage = "Por favor, preencha o campo 'Número'.";
    } else if (mensagem === "") {
      errorMessage = "Por favor, preencha o campo 'Mensagem'.";
    }

    if (errorMessage) {
      feedbackMessage.classList.add("error");
      feedbackMessage.textContent = errorMessage;
      feedbackMessage.style.display = "block";
      return;
    }

    // Se todas as validações passarem, exibe uma mensagem de sucesso
    feedbackMessage.classList.add("success");
    feedbackMessage.textContent = "Formulário enviado com sucesso!";
    feedbackMessage.style.display = "block";

    // Limpa o formulário após o envio bem-sucedido
    form.reset();
  }

  // Adicionando o evento de validação no submit do formulário
  const contactForms = document.querySelectorAll("#contactForm");
  contactForms.forEach(form => {
    form.addEventListener("submit", validarFormulario);
  });
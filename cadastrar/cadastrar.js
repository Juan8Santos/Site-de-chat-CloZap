let labelNome = document.querySelector(".labelNome");
let inputNome = document.querySelector(".inputNome");
let validNome = false;

let labelEmail = document.querySelector(".labelEmail");
let inputEmail = document.querySelector(".inputEmail");
let validEmail = false;

let labelSenha = document.querySelector(".labelSenha");
let inputSenha = document.querySelector(".inputSenha");
let validSenha = false;

let labelConfirmarSenha = document.querySelector(".labelConfirmarSenha");
let inputConfirmarSenha = document.querySelector(".inputConfirmarSenha");
let validConfirmarSenha = false;

localStorage.removeItem("usuarioLogado");

function balancarElemento() {
  const header = document.querySelector("header");

  header.classList.add("balancar");

  setTimeout(() => {
    header.classList.remove("balancar");
  }, 300);
}

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome* Mínimo de 3 caracteres!";
    inputNome.setAttribute("style", "border-bottom: 3px solid red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color:  #5402f3");
    labelNome.innerHTML = "Nome";
    inputNome.setAttribute("style", "border-bottom: 3px solid #5402f3");
    validNome = true;
  }
});

inputEmail.addEventListener("keyup", () => {
  if (!inputEmail.value.includes("@")) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "E-mail *O Email precisa conter @!";
    inputEmail.setAttribute("style", "border-bottom: 3px solid red");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: #5402f3");
    labelEmail.innerHTML = "E-mail";
    inputEmail.setAttribute("style", "border-bottom: 3px solid #5402f3");
    validEmail = true;
  }
});

inputSenha.addEventListener("keyup", () => {
  const testarCaracterEspecial = /^[a-zA-Z0-9]+$/;
  if (
    !testarCaracterEspecial.test(inputSenha.value) ||
    inputSenha.value.length < 6
  ) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Mínimo de 6 caracteres, sem especiais!";
    inputSenha.setAttribute("style", "border-bottom: 3px solid red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: #5402f3");
    labelSenha.innerHTML = "Senha";
    inputSenha.setAttribute("style", "border-bottom: 3px solid #5402f3");
    validSenha = true;
  }
});

inputConfirmarSenha.addEventListener("keyup", () => {
  if (inputConfirmarSenha.value !== inputSenha.value) {
    labelConfirmarSenha.setAttribute("style", "color: red");
    labelConfirmarSenha.innerHTML =
      "Confirmar Senha* As senhas precisam conferir!";
    inputConfirmarSenha.setAttribute("style", "border-bottom: 3px solid red");
    validConfirmarSenha = false;
  } else {
    labelConfirmarSenha.setAttribute("style", "color:  #5402f3");
    labelConfirmarSenha.innerHTML = "Confirmar Senha";
    inputConfirmarSenha.setAttribute(
      "style",
      "border-bottom: 3px solid #5402f3"
    );
    validConfirmarSenha = true;
  }
});

function telaContas() {
  window.location.href = "https://fvc7gh.csb.app/contas/contas.html";
}

function home() {
  window.location.href = "https://fvc7gh.csb.app";
}

function cadastrar() {
  let contas = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

  if (contas.length >= 8) {
    alert("Limite de contas atingido!");
    window.location.href = "https://fvc7gh.csb.app//contas/contas.html";
    return;
  }

  if (validNome && validEmail && validSenha && validConfirmarSenha) {
    let listaUsuarios = JSON.parse(
      localStorage.getItem("listaUsuarios") || "[]"
    );

    listaUsuarios.push({
      regNome: inputNome.value,
      regEmail: inputEmail.value,
      regSenha: inputSenha.value,
    });

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    window.location.href = "https://fvc7gh.csb.app//contas/contas.html";
  } else {
    if (!validNome) {
      labelNome.setAttribute("style", "color: red");
      labelNome.innerHTML = "Nome* Mínimo de 3 caracteres!";
      inputNome.setAttribute("style", "border-bottom: 3px solid red");
    }

    if (!validEmail) {
      labelEmail.setAttribute("style", "color: red");
      labelEmail.innerHTML = "E-mail *O Email precisa conter @!";
      inputEmail.setAttribute("style", "border-bottom: 3px solid red");
    }

    if (!validSenha) {
      labelSenha.setAttribute("style", "color: red");
      labelSenha.innerHTML = "Senha *Mínimo de 6 caracteres, sem especiais!";
      inputSenha.setAttribute("style", "border-bottom: 3px solid red");
    }

    if (!validConfirmarSenha) {
      labelConfirmarSenha.setAttribute("style", "color: red");
      labelConfirmarSenha.innerHTML =
        "Confirmar Senha* As senhas precisam conferir!";
      inputConfirmarSenha.setAttribute("style", "border-bottom: 3px solid red");
    }

    balancarElemento();
  }
}

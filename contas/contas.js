const menuContas = document.querySelector(".menuContas");
const menuVerMais = document.querySelector(".menuVerMais");
const menuVerMenos = document.querySelector(".menuVerMenos");
const menuTodasAsContas = document.querySelector(".menuTodasAsContas");
const header = document.querySelector("header");

function telaCadastrar() {
  window.location.href = "https://fvc7gh.csb.app/cadastrar/cadastrar.html";
}

function home() {
  window.location.href = "https://fvc7gh.csb.app";
}

function carregarContas() {
  localStorage.removeItem("usuarioLogado");

  let contas = {};
  contas = JSON.parse(localStorage.getItem("listaUsuarios"));

  let contador = 0;

  if (localStorage.getItem("usuarioLogado") == null) {
    menuVerMais.setAttribute("style", "display: none");
  }

  contas.forEach((item) => {
    if (contador < 5) {
      menuContas.innerHTML += `
        <div class="conta">
          <div class="icone"><div>${item.regNome[0].toUpperCase()}</div></div>
          <p class="nomeUsuario">${item.regNome}</p>
          <button class="buttonEntrar">
            <strong>Entrar</strong>
          </button>
          <div class="senha">${item.regSenha}</div>
        </div>
      `;
      contador++;
    }
  });

  contas.forEach((item) => {
    menuTodasAsContas.innerHTML += `
        <div class="conta">
          <div class="icone"><div>${item.regNome[0].toUpperCase()}</div></div>
          <p class="nomeUsuario">${item.regNome}</p>
          <button class="buttonEntrar">
            <strong>Entrar</strong>
          </button>
          <div class="senha">${item.regSenha}</div>
        </div>
      `;
    contador++;
  });

  if (contador > 10) {
    menuVerMais.setAttribute("style", "display: flex");
  } else {
    menuVerMais.setAttribute("style", "display: none");
  }

  const buttonEntrar = document.querySelectorAll(".buttonEntrar");

  buttonEntrar.forEach((button) => {
    button.addEventListener("click", entrar);
  });
}

function entrar(e) {
  const button = e.target.closest(".buttonEntrar");
  const informacoesDaConta = button.closest(".conta");

  const nomeUsuario =
    informacoesDaConta.querySelector(".nomeUsuario").textContent;
  const senhaUsuario = informacoesDaConta.querySelector(".senha").textContent;

  class User {
    constructor(id, name, password, nameInitial) {
      this.id = id;
      this.name = name;
      this.password = password;
      this.nameInitial = nameInitial;
    }
  }

  let token = Math.random().toString(16).substring(2);

  const usuario = new User(
    token,
    nomeUsuario,
    senhaUsuario,
    nomeUsuario[0].toUpperCase()
  );

  let arrayUsuario = Object.values(usuario);

  let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "[]");
  usuarioLogado.push(arrayUsuario);
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

  window.location.href = "https://fvc7gh.csb.app/login/login.html";
}

carregarContas();

function verMais() {
  menuContas.setAttribute("style", "display: none");
  menuTodasAsContas.setAttribute("style", "display: flex");
  menuVerMais.setAttribute("style", "display: none");
  menuVerMenos.setAttribute("style", "display: flex");
}

function verMenos() {
  menuContas.setAttribute("style", "display: flex");
  menuTodasAsContas.setAttribute("style", "display: none");
  menuVerMais.setAttribute("style", "display: flex");
  menuVerMenos.setAttribute("style", "display: none");
}

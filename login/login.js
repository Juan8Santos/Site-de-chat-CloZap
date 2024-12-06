const header = document.querySelector("header");

function balancarElemento() {
  header.classList.add("balancar");

  setTimeout(() => {
    header.classList.remove("balancar");
  }, 300);
}

function home() {
  window.location.href = "https://fvc7gh.csb.app";
}

function telaContas() {
  window.location.href = "https://fvc7gh.csb.app/contas/contas.html";
}

function carregarPagina() {
  let logado = {};
  logado = JSON.parse(localStorage.getItem("usuarioLogado"));
  logado.forEach((item) => {
    header.innerHTML = `

    <div class="conta">
    <div class="icone"><i class="fa-regular fa-user"></i></div>
    <p class="nomeUsuario">${item.nome}</p>
  </div>
  <form>
    <label class="labelSenha">Senha</label><br />
    <input type="password" class="inputSenha" />
    <input
      type="button"
      value="Entrar"
      class="buttonEntrar"
      onclick="entrar()"
    />
  </form>
  <div class="divescolhaOutraConta">
    <p><strong>Escolha outra conta</strong></p>
    <button class="buttonContas" onclick="telaContas()">
      <strong>Contas</strong>
    </button>
  </div>

    `;
  });
}

carregarPagina();

const inputSenha = document.querySelector(".inputSenha");
const labelSenha = document.querySelector(".labelSenha");

function entrar() {
  let usuarioLogado = {};
  usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  usuarioLogado.forEach((item) => {
    if (inputSenha.value == item.senha) {
      labelSenha.innerHTML = "Senha";
      labelSenha.setAttribute("style", "color: #02db02");
      inputSenha.setAttribute("style", "border-bottom: 3px solid #02db02");

      setTimeout(() => {
        window.location.href = "https://fvc7gh.csb.app/chat/chat.html";
      }, 300);
    } else {
      balancarElemento();
      labelSenha.innerHTML = "Senha *A senha está incorreta!";
      labelSenha.setAttribute("style", "color: red");
      inputSenha.setAttribute("style", "border-bottom: 3px solid red");
    }
  });
}

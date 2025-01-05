const nomeUsuario = document.querySelector(".nomeUsuario");
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

let conversasChat = document.querySelector(".conversasChat");

const inputMensagem = document.querySelector(".inputMensagem");

const iconePerfilP = document.querySelector(".iconePerfilP");

usuarioLogado.forEach((item) => {
  nomeUsuario.innerHTML = item[1];
  iconePerfilP.innerHTML = item[3];
});

function sair() {
  window.location.href = "https://fvc7gh.csb.app";
}

function scrollTela() {
  conversasChat.scrollTo({
    top: conversasChat.scrollHeight,
    behavior: "smooth",
  });
}

function atualizarChat() {
  let mensagemChat = JSON.parse(localStorage.getItem("mensagemChat"));
  conversasChat.innerHTML = "";

  mensagemChat.forEach((msg) => {
    usuarioLogado.forEach((user) => {
      if (msg[0] == user[1]) {
        conversasChat.innerHTML += `
        <div class="mensagem">${msg[1]}
            <div class="nomeMensagem">${msg[0]}</div>
            <div class="dateMensagem">${new Date(msg[3]).toLocaleString()}</div>
          </div>
        `;
      } else {
        conversasChat.innerHTML += `
        <div class="mensagemOutro">
          <div class="separadorDivMsg">
           <div class="imagemMensagemOutro">
             <p>${msg[2]}</p>
           </div>
           <div class="nomeMensagemOutro">
           ${msg[0]}
          </div>
         </div>
        ${msg[1]}
        <div class="dateMensagemOutro">${new Date(
          msg[3]
        ).toLocaleString()}</div>
      </div>

        `;
      }
    });
  });

  scrollTela();
}

inputMensagem.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    enviar();
  }
});

function enviar() {
  if (inputMensagem.value == "") {
    return false;
  } else {
    usuarioLogado.forEach((item) => {
      class Message {
        constructor(name, message, nameInitial, date = new Date()) {
          this.name = name;
          this.message = message;
          this.nameInitial = nameInitial;
          this.date = date;
        }
      }

      const msg = new Message(item[1], inputMensagem.value, item[3]);

      let arrayMessage = Object.values(msg);

      let mensagemChat = JSON.parse(
        localStorage.getItem("mensagemChat") || "[]"
      );

      mensagemChat.push(arrayMessage);

      localStorage.setItem("mensagemChat", JSON.stringify(mensagemChat));

      inputMensagem.value = "";
      atualizarChat();
    });
  }
}

window.addEventListener("storage", (e) => {
  if (e.key === "mensagemChat") {
    atualizarChat();
  }
});

atualizarChat();

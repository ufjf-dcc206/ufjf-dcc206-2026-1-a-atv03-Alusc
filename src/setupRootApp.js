import { getLista } from "./lista";

export function setupRootApp(){ 
  const divRoot = document.createElement("div");
  divRoot.append(criaTitulo());
  divRoot.append(criaLista());
  return divRoot;
}

function criaTitulo(){
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}

function criaLista(){
  const div = document.createElement("div");
  const ol = document.createElement("ol");
  ol.id = "lista";
  div.appendChild(ol)

  const btnAtualizar = document.createElement("button");
  btnAtualizar.id = "atualizar";
  btnAtualizar.textContent = "Atualizar";
  div.appendChild(btnAtualizar);

  btnAtualizar.addEventListener("click", () => atualizaLista(ol));
  
  return div;
}

function atualizaLista(ol) {
  ol.innerHTML = "";
  getLista().forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });
}
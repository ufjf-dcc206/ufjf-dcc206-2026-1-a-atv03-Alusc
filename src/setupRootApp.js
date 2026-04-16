import { getLista } from "./lista";

export function setupRootApp(){ 
  const divRoot = document.createElement("div");
  divRoot.append(criaTitulo());
  divRoot.append(criaForm());
  divRoot.append(criaLista());
  return divRoot;
}

function criaTitulo(){
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}

function criaForm(){
  const divForm = document.createElement("div");
  const form = document.createElement("form");
  form.name = "entry";
  divForm.append(form);
  
  const input = document.createElement("input");
  input.name = "text";
  form.append(input);
  
  const button = document.createElement("button");
  button.textContent = "Adicionar";
  form.append(button);

  setupFormSubmit(form);

  return divForm;
}

function setupFormSubmit(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(document.entry.text.value);
    document.entry.text.value = "";
    document.entry.text.focus();
  })
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
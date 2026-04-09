
export function setupRootApp(){ 
  const divRoot = document.createElement("div");
  
  divRoot.append(criaTitulo());
  return divRoot;
}

function criaTitulo(){
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}
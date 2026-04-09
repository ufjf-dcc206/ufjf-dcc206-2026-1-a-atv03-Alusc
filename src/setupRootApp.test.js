import { expect, test } from "vitest";
import { setupRootApp } from "./setupRootApp";
import { setupCounter } from "./counter";

test("Que tenha um título na página", ()=>{

    const app = document.createElement("div");
    app.innerHTML = setupRootApp();
    const h1 = app.querySelector("h1");
    expect(h1.textContent).toBe("Get started");

});

test("Quando clica no botão deve incrementar", ()=>{
    const app = document.createElement("div");
    app.innerHTML = setupRootApp();
    const botao = app.querySelector("button");
    setupCounter(botao);
    expect(botao.textContent).toBe("Count is 0");
    botao.click();
    expect(botao.textContent).toBe("Count is 1");

});
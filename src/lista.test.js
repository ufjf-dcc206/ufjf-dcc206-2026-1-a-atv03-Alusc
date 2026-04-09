import { expect, it } from "vitest";
import { getLista, limpaLista } from "./lista";


it("Deve ter elementos iniciais", () => {
    const lista = getLista();
    expect(lista.length).toBe(3);
});


it("Alterar a lista retornanda, não pode mexer na do módulo", () => {
    const lista1 = getLista();
    lista1.splice(0, 1);

    const lista2 = getLista();
    expect(lista2.length).toBe(3);
});


it("Deve estar vazia", () => {
    limpaLista();
    const lista = getLista();
    expect(lista.length).toBe(0);
})
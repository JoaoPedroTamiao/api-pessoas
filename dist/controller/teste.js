"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`João`, `111111111`, new Date(2000 / 10 / 20), `40028922`, `Rua Bananinha do mal`, 189, 89);
pessoa.falar();
pessoa.falarFrase(`Vai Curintia!!!`);
pessoa.andar();
pessoa.andandoDistancia(100);
pessoa.comer();
pessoa.comendoComida(`Banana`);
pessoa.cadastroPessoa(pessoa);
//# sourceMappingURL=teste.js.map
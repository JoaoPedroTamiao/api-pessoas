import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa(`João`,`111111111`,new Date(2000/10/20),`40028922`,`Rua Bananinha do mal`,189,89);

pessoa.falar();
pessoa.falarFrase(`Vai Curintia!!!`);

pessoa.andar();
pessoa.andarQuilometros(100);

pessoa.comer();
pessoa.comerPrato(`Banana`);
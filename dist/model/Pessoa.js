"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    getNome() {
        return this.nome;
    }
    /**
     * Atribui nome a pessoa
     * @param _nome
     * Nome da pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     * Retorna o cpf da pessoa
     * @returns cpf: cpf da pessoa
     */
    getCPF() {
        return this.cpf;
    }
    /**
     * Atribui o cpf da pessoa
     * @param _cpf
     * cpf da pessoa
     */
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    /**
     * Atribui a data de nascimento da pessoa
     * @param _data_nascimento
     * Data de nascimento da pessoa
     */
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    /**
     * Atribui o telefone da pessoa
     * @param _telefone
     * Telefone da pessoa
     */
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    /**
     * Atribui o endereço da pessoa
     * @param _endereco
     * endereco da pessoa
     */
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    /**
     * Atribui altura pra pessoa
     * @param _altura
     * altura da pessoa
     */
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    /**
     * Atribui peso a pessoa
     * @param _peso
     * peso da pessoa
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    //implementar os métodos
    falar() {
        console.log(`${this.nome} esta falando`);
    }
    falarFrase(_frase) {
        //Logica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }
    andar() {
        console.log(`${this.nome} esta andando`);
    }
    andandoDistancia(_Quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} anda: ${_Quilometros} Quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    comendoComida(_prato) {
        console.log(`${this.nome} esta comendo: Uma${_prato}`);
    }
    /**
     *  CRUD
     */
    cadastroPessoa(baninha) {
        console.log(`${baninha.nome} cadastrado com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map
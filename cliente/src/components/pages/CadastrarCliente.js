import Axios from "axios";
import React, { useState } from 'react';
import MaskedInput from '../layout/MascaraCpfedit';
import styles from './CadastrarCliente.module.css'

function CadastrarCliente () {

    const [nomeCliente, setNomeCliente] = useState("");
    const [sobrenomeCliente, setSobrenome] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [nascimentoCliente, setNascimentoCliente] = useState("");
    const [idadeCliente, setIdadeCliente] = useState("0");
    const [enderecoCliente, setEndereco] = useState("");
    const [sexoCliente, setSexoCliente] = useState("");
    const [situacaoCliente, setSituacaoCliente] = useState("");
    const [senhaCliente, setSenhaCliente] = useState("");

    const addToList = () => {
        Axios.post("http://localhost:3001/insert",
        {
          nomeCliente: nomeCliente,
          sobrenomeCliente: sobrenomeCliente,
          cpfCliente: cpfCliente,
          nascimentoCliente: nascimentoCliente,
          idadeCliente: idadeCliente,
          enderecoCliente: enderecoCliente,
          sexoCliente: sexoCliente,
          situacaoCliente: situacaoCliente,
          senhaCliente: senhaCliente,
        });
      };

    return (
        <form className={styles.cadastrar_cliente}>
          
          <h1>Cadastrar cliente</h1>
            <p>Primeiro nome:</p>
            <input type ="String" placeholder="Escreva o primeiro nome" onChange={(event) => {setNomeCliente(event.target.value);}} required/>
            <p>Sobrenome:</p>
            <input type="String" placeholder="Escreva o segundo nome" onChange={(event) => {setSobrenome(event.target.value);}} required/>
            <p>CPF:</p>
            <MaskedInput value={cpfCliente}
            onChange={(event) => {setCpfCliente(event.target.value);}} required/>
            <p>Data de nascimento:</p>
            <input type="date" onChange={(event) => {setNascimentoCliente(event.target.value);}} required/>
            <p>Idade:</p>
            <input type="number" placeholder="Digite a idade" onChange={(event) => {setIdadeCliente(event.target.value);}} required/>
            <p>Endereço:</p>
            <input type="String" placeholder="Escreva o endereço completo" onChange={(event) => {setEndereco(event.target.value);}} required/>
            <p>Sexo:</p>
            <select type="string" placeholder="Selecione um sexo" onChange={(event) => {setSexoCliente(event.target.value);}} required>
            <option disabled selected required>Selecione o sexo</option>
            <option enable required>Masculino</option>
            <option enable required>Feminino</option>
            </select>
            <p>Situação:</p>
            <select type="String" onChange={(event) => {setSituacaoCliente(event.target.value);}} required>
            <option disabled selected required>Selecione a situação da conta</option>
            <option enable required>Ativo</option>
            <option enable required>Inativo</option>
            </select>
            <p>Senha:</p>
            <input type="Password" onChange={(event) => {setSenhaCliente(event.target.value);}} required/>
            <br/>
          <button type="submit" onClick={addToList}>Adicionar Cliente</button>
          </form>
    )          

}
export default CadastrarCliente
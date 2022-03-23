import Axios from "axios";
import styles from './ListaCliente.module.css'
import React, {useState, useEffect} from 'react';


function ListaCliente () {

  const [newEnderecoCliente, setNewEnderecoCliente] = useState("");
    const updateEndereco = (id) => {
      Axios.put("http://localhost:3001/update", {id: id, newEnderecoCliente: newEnderecoCliente,});
    };
    
    const [clienteLista, setClientelista] = useState([]);
    useEffect(() =>{
        Axios.get("http://localhost:3001/read").then ((response)=>{
          setClientelista(response.data);
        });
      }, []);

      const deletarUsuario = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
      };


      
    return (
                <div>
                    <h1>Lista de clientes cadastrados no banco.</h1>

                        {clienteLista.map((val, key) => {
                        return <div key={key} className={styles.container}>
                                    <br/>
                                    <p>Nome do clinete: {val.nomeCliente} </p>
                                    <p>Sobrenome: {val.sobrenomeCliente} </p>
                                    <p>Cpf:{val.cpfCliente}</p>
                                    <p>Data de nascimento:{val.nascimentoCliente} </p> 
                                    <p>Idade:{val.idadeCliente} </p>
                                    <p>Endereço:{val.enderecoCliente} </p>
                                    <p>Endereço novo:</p>
                                    <input type="text" placeholder="Atualizar endereço" onChange={(event) => {setNewEnderecoCliente(event.target.value);}}/>
                                    <p>Sexo:{val.sexoCliente} </p> 
                                    <p>Situação:{val.situacaoCliente} </p>
                                    <p>Senha:{val.senhaCliente} </p>
                                    <div >
                                    <a href="http://localhost:3000/ListaCliente">
                                    <button className={styles.botao} onClick={()=> updateEndereco(val._id)}>Atualizar cliente</button>
                                    <button className={styles.botao} onClick={()=> deletarUsuario(val._id)}>Deletar cliente</button></a>
                                    
                                    </div>
                                </div>
                        })}
                </div>
    )

}
export default ListaCliente
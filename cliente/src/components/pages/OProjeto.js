function OProjeto () {
    return (
        <div>
            <h1>O Projeto</h1>
                <h2>Criar um processo de cadastro e análise de usuários.</h2>
                    <p>
                    Ferramentas: VS Code e Mongo
                    <br/>
                    Frameworks: Node e React
                    <br/>       
                    Linguagem: TypeScript
                    <br/>
                    Modelo para o Back-end: SOLID
                    <br/>
                    Campos necessários para o projeto: Nome, sobrenome, cpf, endereço, idade, ativo/inativo, data de nascimento e senha. Por favor, fiquem à vontade para adicionar novos campos que julgarem necessário.
                    <br/>
                    <br/>
                    <h2>1) Back-end</h2>
                    <br/>
                    1.1) Create, read, update and delete (CRUD)
                    <br/>
                    

                    1.1.1) Regras:
                    <br/>
                    a) Seguir o modelo SOLID
                    <br/>
                    b) O cadastro precisa ter a função criar, ler, atualizar e deletar (CRUD).
                    <br/>
                    c) O mesmo CPF não pode ser criado duas vezes.
                    <br/>
                    d) Tipagem dos campos. Exemplo: O campo de data só pode ser preenchido como data. O campo de CPF deve colocar a formatação correta para CPF e só aceitar números. O campo de nome não pode aceitar caracteres especiais.
                    <br/>
                    f) Os cadastros devem ser armazenados no Mongo DB.
                    <br/>
                    g) A conexão com o banco precisa ser feita via ORM.
                    <br/>
                    

                    1.1.2) Middleware
                    <br/>
                    a) Utilizar um Middleware para fazer a autenticação da senha e desbloquear para o usuário fazer a edição do cadastro.
                    
                    <br/>
                    <br/>
                    
                    
                    

                    <h2>2) Front-end</h2>
                    <br/>
                    2.1) Tela de cadastro do usuário.
                    <br/>
                    

                    2.1.1) Regras:
                    <br/>
                    a) Utilização do React Hooks.
                    <br/>
                    b) Utilização do styled-component
                    <br/>
                    c) Criação de ao menos dois componentes
                    <br/>
                    

                    2.2)  Acesso a telas exclusivas para o usuário que estiver logado.
                    <br/>
                    

                    2.2.1) Regra:
                    <br/>
                    a) Utilizar as regras de contexto.
                    <br/>
                    <br/>
                    

                    

                    <h2>3) Python</h2>
                    <br/>
                    

                    3.1) Rotinas
                    <br/>
                    a)       Outputs da quantidade de usuários cadastrados por idade em csv
                    <br/>
                    b)      Output dos usuários cadastrados analítico em csv
                    <br/>
                    c)       Output da média de salário dos usuários por idade em csv
                    <br/>
                    a.       Criar uma tabela fictícia do salário médio por idade para cruzar com a base de cadastro dos usuários
                    <br/>
                    d)      Criar schedule para que o processo seja executado uma vez por dia às 17h.
                    <br/>
                    

                    3.2) Regra
                    <br/>
                    a) Os outputs devem ser gerados através de classes e definições (funções)
                    <br/>
                    <br/>
                    

                   <h2>Obrigado</h2> 
                   <br/>
                                        </p>
                            </div>
                        )
                    }
export default OProjeto
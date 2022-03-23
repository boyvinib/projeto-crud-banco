import styles from './Home.module.css'

function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Projeto</span></h1>
            <p>Aqui voce pode cadastrar e visualizar todos os clientes do banco!</p>
            <p>Na barra de navegação acima voce pode selecinar se deseja cadastrar um novo usuario ou visualizar os clientes cadastrados!</p>


        </section>

    )

}
export default Home
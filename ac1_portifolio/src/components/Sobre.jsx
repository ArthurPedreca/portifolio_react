import './sobre.css'

function Sobre() {
    return (
        <>
            <section>
                <h3 id="sobre">Sobre</h3>


                <div className="cards">

                    <div id="card_1" className="card">
                            <h2>Rápido</h2>
                            <p>Sites rápidos e agradáveis, seguindos todos os principios do design para o usuário ter sempre a
                                melhor experiência possível!</p>
                    </div>

                    <div id="card_2" className="card">
                            <h2>Responsivo</h2>
                            <p>Responsividade sempre foi meu compromisso. A criação de sites multiplataforma é um compromisso
                                que eu
                                sempre vou ter com meus clientes!</p>
                    </div>

                    <div id="card_3" className="card">
                            <h2>Intuitivo</h2>
                            <p>Criação de site intuitivos e fáceis de navegar, com uma abordagem minimalista e moderna.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre
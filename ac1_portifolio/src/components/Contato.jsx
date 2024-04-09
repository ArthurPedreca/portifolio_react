import './contato.css'

function Contato() {
    return (
        <section>
            <h3 id="sobre">Contato</h3>
            <p className="pergunta">Tem alguma pergunta ou quer fazer um trabalho junto com um de nós?</p>
            <form method="post" className="custom-form">
                <input className="input-field" type="text" name="name" placeholder="Seu Nome" />
                <input className="input-field" type="text" name="email" placeholder="Seu Email" />
                <textarea className="textarea-field" name="Mensagem" placeholder="Mensagem"></textarea>
                <input className="submit-button" type="submit" value="Enviar" />
                <input type="hidden" name="accessKey" value="90db9d7a-004d-4bee-9fed-df7507fcdd85" />
                <input type="hidden" name="redirectTo" value="https://arthurpedreca.github.io/Portfolio" />
            </form>
        </section>
    );
}

export default Contato;

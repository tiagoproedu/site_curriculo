import { useState, useEffect } from "react";
import "./style.css"

function Repos() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function Repositorios() {
            const resposta = await fetch(`https://api.github.com/users/tiagoproedu/repos`);
            const dados = await resposta.json();
            setRepos(dados);
        }

        Repositorios();
    }, []);
    function reposList(re, i){
        return(<div id={i} className="repos_card"><h3>{re.name}</h3><p>{re.description}</p><a href={re.html_url}><button>Acessar</button></a></div>);
    }

    return (
        <>
            <div id="repos">
                <h1>Repositorios</h1>
                <div id="repos_cards">
                    {repos.map(reposList)}
                </div>
            </div>
        </>
    );
}

export default Repos;
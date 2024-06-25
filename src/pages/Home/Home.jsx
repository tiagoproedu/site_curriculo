import "./style.css";

function Home() {
  return (
    <>
      <div id="home">
        <div id="sobre">
          <h2>Apresentação</h2>
          <p>
            Ser um desenvolvedor ful stack sênior, busco por uma empresa que me
            dê a oportunidade de colocar em prática aquilo que venho aprendendo,
            aprendo muito rápido e gosto de entender como as coisas realmente
            funcionam. Me adapto muito bem em novos ambientes e gosto de
            desafios. Atualmente faço o curso de desenvolvimento ful stack pela
            digital co lege e lá aprendi as principais linguagens de front end,
            assim como, node, express e react.
          </p>
        </div>
        <div id="skills">
          <h2>Tecnologias</h2>
          <ul className="techs">
            <li><img src="assets/svg/HTML5.svg" alt="HTML5"/></li>
            <li><img src="assets/svg/CSS3.svg" alt="CSS3" /></li>
            <li><img src="assets/svg/JavaScript.svg" alt="JavaScript" /></li>
            <li><img src="assets/svg/React.svg" alt="React" /></li>
            <li><img src="assets/svg/Python.svg" alt="Python" /></li>
            <li><img src="assets/svg/Node.js.svg" alt="Node.js" /></li>
            <li><img src="assets/svg/Microsoft SQL Server.svg" alt="SQL Server" /></li>
          </ul>
        </div>
        <div id="infos">
          <div className="card">
            <h2>Formação Acadêmica</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              voluptate laborum culpa error eos laboriosam voluptatem voluptatum
              veritatis magnam vitae mollitia nemo. In doloribus optio aut,
              voluptas ducimus iste impedit?
            </p>
          </div>
          <div className="card">
            <h2>Histórico Profissional</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate necessitatibus, enim quisquam, porro exercitationem
              asperiores adipisci placeat repellendus quidem deserunt ex
              eligendi dolorem expedita natus. Fugit sunt iste enim incidunt.
            </p>
          </div>
          <div className="card">
            <h2>Certificações</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias ad magni debitis nostrum asperiores similique
              blanditiis! Maiores, voluptatibus odio. Autem eius repellendus
              obcaecati necessitatibus, esse nisi consequatur facere in!
            </p>
          </div>
          <div className="card">
            <h2>Atividades Complementares</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              dolorum hic, impedit doloribus soluta cum voluptatibus nobis
              delectus nesciunt, dignissimos animi ab dolorem, similique dicta.
              Quas deleniti provident praesentium doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import "./style.css";
import Skills from "../../components/Skills";
import Sobre from "../../components/Sobre";
import UltProjetos from "../../components/UltProjetos";
import Carreira from "../../components/Carreira";

function Home() {
  return (
    <>
      <div id="home">
        <Sobre />

        <Skills />

        <UltProjetos />

        <Carreira />
      </div>
    </>
  );
}

export default Home;

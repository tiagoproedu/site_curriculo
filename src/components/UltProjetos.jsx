import Tag from "../components/Tag/Tag";
import BlueButton from "../components/Blue_Button/Blue_Button";

function UltProjetos() {
    return (
        <>
            <div id="ult_projetos">
                <h2>Meus últimos projetos</h2>
                <div id="projetos">
                    <div className="projeto">
                        <img src="" alt="" />
                        <h3>titulo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae optio a ab adipisci explicabo, perspiciatis eius voluptatibus, veniam porro placeat illo debitis velit minima, nesciunt sapiente rerum nobis earum quas.</p>
                        <div className="tags">
                            <Tag titulo="teste 1" />
                            <Tag titulo="teste 2" />
                        </div>
                        <BlueButton titulo="Ver projeto" />
                    </div>
                    <div className="projeto">
                        <img src="" alt="" />
                        <h3>titulo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae optio a ab adipisci explicabo, perspiciatis eius voluptatibus, veniam porro placeat illo debitis velit minima, nesciunt sapiente rerum nobis earum quas.</p>
                        {/*tags*/}
                        <BlueButton titulo="Ver projeto" />
                    </div>
                    <div className="projeto">
                        <img src="" alt="" />
                        <h3>titulo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae optio a ab adipisci explicabo, perspiciatis eius voluptatibus, veniam porro placeat illo debitis velit minima, nesciunt sapiente rerum nobis earum quas.</p>
                        {/*tags*/}
                        <BlueButton titulo="Ver projeto" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UltProjetos;
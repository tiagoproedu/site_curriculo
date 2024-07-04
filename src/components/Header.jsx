import BlueButton from "./Blue_Button/Blue_Button";

function Header() {
    return (
        <>
            <div className="header">
                <div className="perfil">
                    <h1>Tiago</h1>
                </div>
                <ul className="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a>About</a></li>
                    <li><a href="/repos">Portfolio</a></li>
                    <li>Blog</li>
                </ul>
                <div>
                    <BlueButton titulo="Vamos conversar!"/>
                </div>
            </div>
        </>
    );
}

export default Header;
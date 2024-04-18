function Header() {
    return (
        <>
            <div className="header">
                <div className="perfil">
                    <img src="https://avatars.githubusercontent.com/u/71508709?s=48&v=4" alt="foto_perfil" />
                    <h1>Tiago Silva</h1>
                </div>
                <ul className="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/repos">Portfolio</a></li>
                    <li>Contatos</li>
                </ul>
            </div>
        </>
    );
}

export default Header;
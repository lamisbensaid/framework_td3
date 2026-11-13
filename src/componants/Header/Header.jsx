import style from './Header.module.css';
function Header() {

    return (
        <header className={style.header}>
            <h1>Travel Agency</h1>
            <nav className ={style.nav}>
            <a href="#">Acceuil</a>
            <a href="#">Destination</a>
            <a href="#">contacts</a>
        </nav>
        </header>
    );
}
export default Header;
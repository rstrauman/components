import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <div className="flex">
                <h1>Gallery</h1>
                <Nav navbarItem = {props.navbarItem}/>
            </div>
        </header>
    );
}

export default Header;
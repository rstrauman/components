import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="flex">
                <h1>Components</h1>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;
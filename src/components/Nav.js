function Nav(props) {
    return (
        <nav>
            <ul className="flex">
                {props.navbarItem.map(item => (
                    <li key={item.index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
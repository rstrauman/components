import Header from './components/Header';
import Banner from './components/Banner';

function App() {
    const navbarItem = [
        {index: 0, name: 'About', url: '#'},
        {index: 1, name: 'Blogs', url: '#'},
        {index: 2, name: 'Help', url: '#'},
        {index: 3, name: 'Contact', url: '#'}
    ];

    const btns = [
        { index: 0, text: "Primary", style: "primary" },
        { index: 1, text: "Secondary", style: "secondary" }
    ];

    let isClicked = false;

    return (
        <>
            <Header navbarItem={navbarItem}/>  
            <main>
                <Banner isClicked={isClicked} btns={btns}/>
            </main>
        </>
    );
}

export default App;

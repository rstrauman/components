import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import Greece from './media/Greece.jpg';
import Hawaii from './media/Hawaii.jpg';
import NewYork from './media/New_York.jpg';
import Toronto from './media/Toronto.jpg';

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

    const imgs = [
        {index: 0, source: Greece},
        {index: 1, source: Hawaii},
        {index: 2, source: NewYork},
        {index: 3, source: Toronto},
    ]

    let isClicked = false;

    return (
        <>
            <Header navbarItem={navbarItem}/>  
            <main>
                <Banner isClicked={isClicked} btns={btns}/>
                <Gallery imgs={imgs}/>
            </main>
        </>
    );
}

export default App;

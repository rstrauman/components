import Header from './components/Header';

function App() {
    const navbarItem = [
        {index: 0, name: 'About', url: '#'},
        {index: 1, name: 'Blogs', url: '#'},
        {index: 2, name: 'Help', url: '#'},
        {index: 3, name: 'Contact', url: '#'}
    ];

    return (
        <>
            <Header navbarItem={navbarItem}/>  
        </>
    );
}

export default App;

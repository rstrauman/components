import Button from './Button';

function Banner(props) {
    return (
        <section className='banner flex'>
            <h2>Snapshots</h2>
            <p>A glimpse of reality.</p>
            <div className='flex'><Button isClicked={props.isClicked} btns={props.btns}/></div>
        </section>
    );
}

export default Banner;
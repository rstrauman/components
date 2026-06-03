import Button from './Button';

function Banner(props) {
    return (
        <section>
            <h2>Snapshots</h2>
            <p>A glimpse of reality.</p>
            <Button isClicked={props.isClicked} btns={props.btns}/>
            {/* <Button isClicked={props.isClicked} btns={props.btns}/> */}
        </section>
    );
}

export default Banner;
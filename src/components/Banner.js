import Button from './Button';

function Banner(props) {
    return (
        <section>
            <h2>Banner Section</h2>
            <p>Future Text</p>
            <Button isClicked={props.isClicked}/>
        </section>
    );
}

export default Banner;
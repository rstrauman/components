function Button(props) {
    return (
        <button className={props.isClicked ? 'click' : 'no-click'}>
            { props.isClicked ? 'Clicked' : 'Click Me!' }
        </button>
    );
}

export default Button;
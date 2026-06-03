function Button(props) {
    return (
        <>
            {props.btns.map(btns => (
                <button key={btns.index} className={btns.style}>
                    {btns.text}
                </button>
            ))}
        </>
    );
}

export default Button;
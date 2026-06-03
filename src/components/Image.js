function Image(props) {
    return (
        <>
            {props.imgs.map(imgs => (
                <img key={imgs.index} src={imgs.source} alt={imgs.source}/>
            ))}
        </>
    );
}

export default Image;
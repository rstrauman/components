import Image from './Image';

function Gallery(props) {
    return (
        <div className="flex">
            <Image imgs={props.imgs}/>
        </div>
    );
}

export default Gallery;
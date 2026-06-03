import Image from './Image';

function Gallery(props) {
    return (
        <section className="gallery flex">
            <Image imgs={props.imgs}/>
        </section>
    );
}

export default Gallery;
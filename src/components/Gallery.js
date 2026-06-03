import Image from './Image';

function Gallery(props) {
    return (
        <section className="flex">
            <Image imgs={props.imgs}/>
        </section>
    );
}

export default Gallery;
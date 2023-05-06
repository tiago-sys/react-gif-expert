import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading, setImages } = useFetchGifs(category);

    const onRemoveGif = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };

    return (
        <>
            <h3>{category}</h3>

            {isLoading ? <h2>Cargando...</h2> : null}

            <ol className="card-grid">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                        onRemoveGif={onRemoveGif}
                    />
                ))}
            </ol>
        </>
    );
};

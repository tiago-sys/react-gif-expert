export const GifItem = ({ id, title, url, onRemoveGif }) => {
    return (
        <>
            <div className="card">
                <img src={url} alt={title} onClick={() => onRemoveGif(id)} />
                <p>{title}</p>
            </div>
        </>
    );
};

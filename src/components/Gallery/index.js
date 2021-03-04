import React from 'react';
import photo from "../../assets/small/commercial/0.jpg";

const Gallery = (props) => {
    const currentCategory = {
        name: "Commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    };

    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1" />
            </div>
        </section>
    );
}

export default Gallery;
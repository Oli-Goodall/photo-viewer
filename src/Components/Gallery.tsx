import React, { useState } from "react";  // import React (to provide access to JSX)
import { imageUrls } from './GetURLs'
import './gallery.css'


export function Gallery() {

    const [photoUrl, setPhotoUrl] = useState('');

    // when image is clicked { set state to selected image URL}
    
    return (
        <div className="imageSelector">
            {
                imageUrls.map((url, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img className="thumbnails" src={url} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
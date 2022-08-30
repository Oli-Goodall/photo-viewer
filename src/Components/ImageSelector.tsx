import React from "react";  // import React (to provide access to JSX)
import {imageUrls} from './GetURLs'
import './ImageSelector.css'


export function ImageSelector(){
    // console.log(imageUrls);    
    return(
        <div className="imageSelector">
            {
                imageUrls.map((url, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img className="thumbnails" src={url}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
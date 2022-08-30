import React, { useState } from "react";  // import React (to provide access to JSX)
import { imageUrls } from './GetURLs'
import './gallery.css'


export function Gallery({ setPhotoUrl }: { setPhotoUrl: (url:string) => void }) {  

    return (
        <div className="imageSelector">
            {
                imageUrls.map((url, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img
                                    className="thumbnails"
                                    src={url}
                                    onClick={() => { setPhotoUrl(url) }}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
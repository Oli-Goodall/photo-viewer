import React from "react";  // import React (to provide access to JSX)
import {imageUrls} from './GetURLs'


export function ImageSelector(){
    // console.log(imageUrls);    
    return(
        <div>
            {
                imageUrls.map((url, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={url}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
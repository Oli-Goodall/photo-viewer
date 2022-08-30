import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css'

export function PhotoViewer({src}) {    // declare and export new function called 'PhotoViewer'
    // let randomPhotoID = Math.floor(Math.random() * 1084)
    return (                
    // <img src={`https://picsum.photos/id/${randomPhotoID}/1600/900.jpg`}></img>
        <img className="top-image" src={`${src}`}></img>
    );
}
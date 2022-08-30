import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css'

export function PhotoViewer({ src }: { src: string }) {    // declare and export new function called 'PhotoViewer'
   
    return (
        
        <img className="top-image" src={src} />
    );
}
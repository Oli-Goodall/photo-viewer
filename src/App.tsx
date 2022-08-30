import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './Components/PhotoViewer'
import './Components/PhotoViewer.css'
import { imageUrls } from './Components/GetURLs'
import { ImageSelector } from './Components/ImageSelector'
import { Gallery } from './Components/Gallery'


function App() {
  return (
      <div className='titleAndMainImage'>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"} />
      <Gallery />
      <ImageSelector />
      </div>
  );
}

export default App

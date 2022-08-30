import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './Components/PhotoViewer'
import './Components/PhotoViewer.css'
import { imageUrls } from './Components/GetURLs'
import { Gallery } from './Components/Gallery'


function App() {

  const [photoUrl, setPhotoUrl] = useState('https://picsum.photos/id/600/1600/900.jpg');

  return (
    <div className='titleAndMainImage'>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={photoUrl} />
      <Gallery setPhotoUrl={setPhotoUrl} />
    </div>
  );
}

export default App

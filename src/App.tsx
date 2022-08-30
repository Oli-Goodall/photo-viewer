import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './Components/PhotoViewer'
import './Components/PhotoViewer.css'
import { imageUrls } from './Components/GetURLs'
import { ImageSelector } from './Components/ImageSelector'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         Count is:
//         <button onClick={() => setCount((count) => count + 1)}>
//            {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

function App() {
  return (
      <div className='titleAndMainImage'>
          <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"} />
    
          <ImageSelector/>
      </div>
  );
}

export default App

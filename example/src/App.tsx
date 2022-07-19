import React from 'react'

import { CanvasToImg } from 'react-canvas-to-img'
import 'react-canvas-to-img/dist/index.css'
import Canvas from './Canvas'


const App = () => {
  return <CanvasToImg><Canvas width="50px" height="50px" /></CanvasToImg>
}

export default App

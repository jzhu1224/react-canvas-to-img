import * as React from 'react'
import ReactDOM from 'react-dom'

type ICanvasToImgProps = {
  children: React.ReactElement
}

export const CanvasToImg = ({children}: ICanvasToImgProps) => {

  const rootRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if(!imgRef.current) {
      return;
    }
    const canvas: any =  ReactDOM.findDOMNode(rootRef.current)?.firstChild?.nextSibling
    if (!canvas) {
      return;
    }
    const data = canvas.toDataURL();
    imgRef.current.src = data;
    imgRef.current.style.height = canvas.style.height;
    imgRef.current.style.width = canvas.style.width;
    rootRef.current?.removeChild(canvas);
  }, [])

  return <div ref={rootRef}> {children} <img alt='' ref={imgRef} /> </div>
}
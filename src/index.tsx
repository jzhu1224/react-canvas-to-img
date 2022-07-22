import * as React from 'react'

type ICanvasToImgProps = {
  children: React.ReactElement
}

export const CanvasToImg = ({children}: ICanvasToImgProps) => {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if(!imgRef.current) {
      return;
    }
    const canvas = imgRef.current.previousElementSibling as HTMLCanvasElement
    if(!canvas) {
      return
    }
    const data = canvas.toDataURL();
    imgRef.current.src = data;
    imgRef.current.style.height = canvas.style.height;
    imgRef.current.style.width = canvas.style.width;
    canvas.parentElement?.removeChild(canvas)
  }, [])

  return <React.Fragment> {children} <img alt='' ref={imgRef} /> </React.Fragment>
}
import React, { useRef, useEffect, HTMLProps } from 'react'

interface ICanvasProps extends HTMLProps<HTMLCanvasElement> {
    
}

const Canvas = (props: ICanvasProps) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(25, 25, 10, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
        return;
    }
    const context = canvas.getContext('2d')
    if (context) {
        draw(context)
    } 
  }, [draw])
  
  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
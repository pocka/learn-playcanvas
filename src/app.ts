import * as pc from 'playcanvas'

export const app = new pc.Application(document.querySelector('#app')!, {})

app.start()

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW)
app.setCanvasResolution(pc.RESOLUTION_AUTO)

window.addEventListener('resize', () => {
  app.resizeCanvas()
})

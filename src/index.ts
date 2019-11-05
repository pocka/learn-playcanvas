import * as pc from 'playcanvas'

const app = new pc.Application(document.querySelector('#app')!, {})

app.start()

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW)
app.setCanvasResolution(pc.RESOLUTION_AUTO)

window.addEventListener('resize', () => {
  app.resizeCanvas()
})

const redMaterial = new pc.StandardMaterial()
redMaterial.diffuse = new pc.Color(1, 0, 0)
redMaterial.update()

const cube = new pc.Entity('cube')

cube.addComponent('model', {
  type: 'box'
})

cube.model?.meshInstances.forEach(mesh => {
  mesh.material = redMaterial
})

const camera = new pc.Entity('camera')

camera.addComponent('camera', {
  clearColor: new pc.Color(0.1, 0.1, 0.1)
})

const light = new pc.Entity('light')

light.addComponent('light', {})

app.root.addChild(cube)
app.root.addChild(camera)
app.root.addChild(light)

camera.setPosition(0, 0, 3)
light.setEulerAngles(45, 0, 0)

app.on('update', delta => {
  cube.rotate(10 * delta, 20 * delta, 30 * delta)
})

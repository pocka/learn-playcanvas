import { app } from './app'

import { camera } from './entities/camera'
import { light } from './entities/light'
import { cube } from './entities/cube'
import { floor } from './entities/floor'

app.root.addChild(cube)
app.root.addChild(floor)
app.root.addChild(camera)
app.root.addChild(light)

cube.setPosition(0, 0.5, 0)

floor.setLocalScale(100, 0, 100)
floor.setPosition(0, -1, 0)

camera.setPosition(0, 0, 5)

app.on('update', delta => {
  cube.rotate(10 * delta, 20 * delta, 30 * delta)
})

import { app } from './app'

import { camera } from './entities/camera'
import { light } from './entities/light'
import { cube } from './entities/cube'

app.root.addChild(cube)
app.root.addChild(camera)
app.root.addChild(light)

app.on('update', delta => {
  cube.rotate(10 * delta, 20 * delta, 30 * delta)
})

import * as pc from 'playcanvas'

import { app } from './app'

import { camera } from './entities/camera'
import { light } from './entities/light'
import { cube } from './entities/cube'
import { floor } from './entities/floor'
import { wolf } from './entities/wolf'

app.scene.ambientLight = new pc.Color(0.01, 0.01, 0.01)

app.root.addChild(floor)
app.root.addChild(camera)
app.root.addChild(light)
app.root.addChild(wolf)

wolf.setLocalPosition(0, 0.2, 0)

light.setLocalPosition(0, 2, 1)
light.setLocalScale(0.1, 0.1, 0.1)

floor.setLocalScale(50, 1, 50)
floor.setLocalPosition(0, -1, 0)

camera.setLocalPosition(0, 0, 5)

app.on('update', delta => {
  wolf.rotate(10 * delta, 20 * delta, 30 * delta)
})

app.assets.loadFromUrl('models/wolf/Wolf.json', 'model', (err, asset) => {
  wolf.addComponent('model', {
    type: 'asset',
    asset,
    castShadows: true
  } as pc.ModelComponent)
})

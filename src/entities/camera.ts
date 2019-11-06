import * as pc from 'playcanvas'

export const camera = new pc.Entity('camera')

camera.addComponent('camera', {
  clearColor: new pc.Color(0.1, 0.1, 0.1)
})

camera.setPosition(0, 0, 3)

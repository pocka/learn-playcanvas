import * as pc from 'playcanvas'

export const camera = new pc.Entity('camera')

camera.addComponent('camera', {
  clearColor: new pc.Color(0, 0, 0)
} as pc.CameraComponent)

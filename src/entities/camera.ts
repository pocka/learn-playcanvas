import * as pc from 'playcanvas'

export const camera = new pc.Entity('camera')

camera.addComponent('camera', {
  clearColor: new pc.Color(1, 1, 1)
} as pc.CameraComponent)

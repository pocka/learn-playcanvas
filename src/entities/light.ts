import * as pc from 'playcanvas'

export const light = new pc.Entity('light')

light.addComponent('light', {
  type: 'point',
  color: new pc.Color(0.5, 0.1, 0.1),
  range: 5,
  intensity: 2,
  castShadows: true
} as pc.LightComponent)

light.addComponent('model', {
  type: 'sphere',
  castShadows: true
} as pc.ModelComponent)

const lamp = new pc.StandardMaterial()
lamp.diffuse = new pc.Color(0.8, 0, 0)
lamp.emissive = new pc.Color(0.5, 0.0, 0.0)
lamp.update()

light.model!.material = lamp

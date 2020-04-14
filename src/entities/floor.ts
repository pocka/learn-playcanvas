import * as pc from 'playcanvas'

const floorMaterial = new pc.StandardMaterial()
floorMaterial.diffuse = new pc.Color(0.98, 0.98, 0.98)
floorMaterial.ambient = new pc.Color(0.98, 0.98, 0.98)
floorMaterial.update()

export const floor = new pc.Entity('floor')

floor.addComponent('model', {
  type: 'box'
} as pc.ModelComponent)

floor.model!.material = floorMaterial

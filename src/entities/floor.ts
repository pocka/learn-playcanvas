import * as pc from 'playcanvas'

const floorMaterial = new pc.StandardMaterial()
floorMaterial.diffuse = new pc.Color(0.98, 0.98, 0.98)
floorMaterial.update()

export const floor = new pc.Entity('floor')

floor.addComponent('model', {
  type: 'plane',
} as pc.ModelComponent)

floor.model?.meshInstances.forEach(mesh => {
  mesh.material = floorMaterial
})

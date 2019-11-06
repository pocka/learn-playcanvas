import * as pc from 'playcanvas'

const redMaterial = new pc.StandardMaterial()
redMaterial.diffuse = new pc.Color(1, 0, 0)
redMaterial.update()

export const cube = new pc.Entity('cube')

cube.addComponent('model', {
  type: 'box'
} as pc.ModelComponent)

cube.model?.meshInstances.forEach(mesh => {
  mesh.material = redMaterial
})

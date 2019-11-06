import * as pc from 'playcanvas'

export const light = new pc.Entity('light')

light.addComponent('light', {})

light.setEulerAngles(45, 0, 0)

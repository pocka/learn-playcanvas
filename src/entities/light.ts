import * as pc from 'playcanvas'

export const light = new pc.Entity('light')

// TODO: Fix the weird light problem
light.addComponent('light', {
  castShadows: true,
  shadowType: pc.SHADOW_VSM32,
  vsmBlurMode: pc.BLUR_GAUSSIAN
} as pc.LightComponent)

light.setEulerAngles(45, 0, 0)

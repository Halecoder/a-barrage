import BaseCommander from '../commander/base'

export interface BarrageConfig {
  engine: 'canvas' | 'css3'
  zoom: number
  proxyObject: HTMLElement | undefined
  usePointerEvents: boolean
  maxTrack: number
  fontSize: number
  fontColor: string
  duration: number
  trackHeight: number
  wrapper: HTMLElement | undefined
  interactive: boolean
  poolSize: number
}

export interface RawBarrageObject {
  text: string
  color?: string
  size?: number
}

export interface BarrageObject {
  text: string
  color: string
  size: number
  width: number
  offset: number
  freeze?: boolean
}

export interface ScrollBarrageObject extends BarrageObject {
  speed: number
}

export interface FixedBarrageObejct extends BarrageObject {
  duration: number
}

export interface CommanderMap {
  scroll: BaseCommander<ScrollBarrageObject>
  'fixed-top': BaseCommander<FixedBarrageObejct>
  'fixed-bottom': BaseCommander<FixedBarrageObejct>
}

export type CommanderMapKey = keyof CommanderMap

export interface CommanderConfig {
  trackWidth: number
  trackHeight: number
  duration: number
  maxTrack: number
  wrapper?: HTMLElement
  interactive: boolean
  poolSize: number
}

export interface RollingRenderCommanderContructor {
  new (...args: any[]): BaseCommander<ScrollBarrageObject>
}

export interface FixedRenderCommanderContructor {
  new (...args: any[]): BaseCommander<FixedBarrageObejct>
}

export interface RenderEngine {
  FixedTopCommander: FixedRenderCommanderContructor
  FixedBottomCommander: FixedRenderCommanderContructor
  RollingCommander: RollingRenderCommanderContructor
}

export interface BarrageMouseEventHandler {
  (barrage: BarrageObject, el: HTMLElement): void
}

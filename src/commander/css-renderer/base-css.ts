import BaseCommander from '../base'
import { BarrageObject, CommanderConfig } from '../../types'

export default abstract class BaseCssCommander<T extends BarrageObject> extends BaseCommander<T> {
  el: HTMLDivElement

  constructor(el: HTMLDivElement, config: CommanderConfig) {
    super(config)

    this.el = el
  }

  removeElement(target: HTMLElement) {
    this.el.removeChild(target)
  }
}

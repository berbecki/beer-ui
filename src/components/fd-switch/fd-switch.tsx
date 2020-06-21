import {Component, ComponentInterface, Host, h, State, Listen} from '@stencil/core';

@Component({
  tag: 'fd-switch',
  styleUrl: 'fd-switch.css',
  shadow: true,
})
export class FdSwitch implements ComponentInterface {

  @State() active: boolean

  @Listen('click', {capture: true})
  handleClick() {
    this.active = !this.active
  }

  render() {
    return (
      <Host>
        <div>p:</div>
        <div>state: {this.active ? 'active': 'unactive'}</div>
        <slot></slot>
      </Host>
    );
  }

}

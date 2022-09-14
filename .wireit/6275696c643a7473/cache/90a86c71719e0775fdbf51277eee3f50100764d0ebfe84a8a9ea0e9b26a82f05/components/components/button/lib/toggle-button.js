import { __decorate } from "tslib";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { Button } from './button.js';
/**
 * @fires toggle - Fired when the button is toggled via user interaction.
 */
export class ToggleButtonImpl extends Button {
    constructor() {
        super(...arguments);
        /**
         * Toggles between displaying the on and off icons.
         */
        this.on = false;
        this.hasIcon = true;
    }
    _getButtonClasses() {
        return {
            ...super._getButtonClasses(),
            hasIcon: true,
            on: this.on,
        };
    }
    _renderIcon() {
        return html `
      <slot name="on"></slot>
      <slot name="off"></slot>
    `;
    }
    _onClick() {
        this.on = !this.on;
        this.dispatchEvent(new Event('toggle'));
    }
}
__decorate([
    property({ type: Boolean })
], ToggleButtonImpl.prototype, "on", void 0);
__decorate([
    property({ type: Boolean })
], ToggleButtonImpl.prototype, "hasIcon", void 0);
//# sourceMappingURL=toggle-button.js.map
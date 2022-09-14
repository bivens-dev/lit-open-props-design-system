import { __decorate } from "tslib";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
export class Button extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The Button's text.
         */
        this.text = '';
        /**
         * Whether or not the button has an icon.
         */
        this.hasIcon = false;
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the icon should follow the text or precede it.
         */
        this.trailingIcon = false;
    }
    render() {
        return this._renderButton([
            this._renderTouchTarget(),
            this.trailingIcon ? undefined : this._renderIcon(),
            this._renderLabel(),
            this.trailingIcon ? this._renderIcon() : undefined,
        ]);
    }
    _renderButton(content) {
        const buttonClasses = this._getButtonClasses();
        return html `
      <button
        id="root"
        part="button"
        class="button ${classMap(buttonClasses)}"
        aria-label=${ifDefined(this.label)}
        .hasIcon=${this.hasIcon}
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        ${content}
      </button>
    `;
    }
    _onClick(_e) { }
    _getButtonClasses() {
        return {
            hasIcon: this.hasIcon,
            trailingIcon: this.trailingIcon,
        };
    }
    _renderIcon() {
        return html `<slot name="icon"></slot>`;
    }
    _renderLabel() {
        return html `<span part="label">${this.text}</span>`;
    }
    _renderTouchTarget() {
        return html ` <div part="touch-target" id="touch"></div> `;
    }
}
__decorate([
    property()
], Button.prototype, "text", void 0);
__decorate([
    property({ type: Boolean, attribute: 'has-icon' })
], Button.prototype, "hasIcon", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "disabled", void 0);
__decorate([
    property()
], Button.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, attribute: 'trailing-icon' })
], Button.prototype, "trailingIcon", void 0);
//# sourceMappingURL=button.js.map
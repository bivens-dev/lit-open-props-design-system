import { __decorate } from "tslib";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * @fires change - Fires when the value of the checkbox changes via user interaction.
 */
export class CheckboxImpl extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Whether or not the checkbox is checked.
         */
        this.checked = false;
        /**
         * Whether or not the checkbox is disabled.
         */
        this.disabled = false;
        /**
         * Checkbox name for forms.
         */
        this.name = '';
        /**
         * aria-label value.
         */
        this.label = '';
        this._form = null;
    }
    render() {
        const rootClasses = this._getRootClasses();
        return html ` <div id="root" class=${classMap(rootClasses)}>
      <input
        type="checkbox"
        part="input"
        @change=${this._onChange}
        .checked=${live(this.checked)}
        .disabled=${this.disabled}
        aria-label=${ifDefined(this.label ? this.label : undefined)}
      />
      <div id="ripple" part="ripple"></div>
      <div id="square" part="square">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
        </svg>
      </div>
    </div>`;
    }
    connectedCallback() {
        super.connectedCallback();
        // Set up basic form submission handling.
        this._form = this.closest('form');
        this._form?.addEventListener('formdata', this._onFormdata);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // Remove form submission handling.
        this._form?.removeEventListener('formdata', this._onFormdata);
    }
    /**
     * @param {FormData} e The FormData event fired before each form submission.
     */
    _onFormdata(e) {
        if (!this.name) {
            return;
        }
        e.set(this.name, '' + this.checked);
    }
    /**
     * Gets the classes for the root element. Meant to be overridden by subclasses.
     */
    _getRootClasses() {
        return {
            checked: this.checked,
        };
    }
    /**
     * @param {Event} e The DOM Change event.
     */
    _onChange(e) {
        this.checked = e.target.checked;
        this.dispatchEvent(new Event('change'));
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], CheckboxImpl.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxImpl.prototype, "disabled", void 0);
__decorate([
    property()
], CheckboxImpl.prototype, "name", void 0);
__decorate([
    property()
], CheckboxImpl.prototype, "label", void 0);
//# sourceMappingURL=checkbox.js.map
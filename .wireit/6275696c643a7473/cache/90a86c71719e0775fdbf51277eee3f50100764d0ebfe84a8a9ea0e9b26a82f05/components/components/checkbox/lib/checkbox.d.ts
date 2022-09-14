/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * @fires change - Fires when the value of the checkbox changes via user interaction.
 */
export declare class CheckboxImpl extends LitElement {
    /**
     * Whether or not the checkbox is checked.
     */
    checked: boolean;
    /**
     * Whether or not the checkbox is disabled.
     */
    disabled: boolean;
    /**
     * Checkbox name for forms.
     */
    name: string;
    /**
     * aria-label value.
     */
    label: string;
    protected _form: HTMLFormElement | null;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * @param {FormData} e The FormData event fired before each form submission.
     */
    protected _onFormdata(e: FormData): void;
    /**
     * Gets the classes for the root element. Meant to be overridden by subclasses.
     */
    protected _getRootClasses(): {
        checked: boolean;
    };
    /**
     * @param {Event} e The DOM Change event.
     */
    protected _onChange(e: Event): void;
}
//# sourceMappingURL=checkbox.d.ts.map
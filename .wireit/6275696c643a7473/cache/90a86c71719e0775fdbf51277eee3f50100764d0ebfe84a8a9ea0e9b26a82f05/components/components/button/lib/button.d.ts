/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
export declare class Button extends LitElement {
    /**
     * The Button's text.
     */
    text: string;
    /**
     * Whether or not the button has an icon.
     */
    hasIcon: boolean;
    /**
     * Whether or not the button is disabled.
     */
    disabled: boolean;
    /**
     * The Aria label for the button.
     */
    label: string | undefined;
    /**
     * Whether or not the icon should follow the text or precede it.
     */
    trailingIcon: boolean;
    render(): import("lit-html").TemplateResult<1>;
    protected _renderButton(content: unknown[]): import("lit-html").TemplateResult<1>;
    protected _onClick(_e: Event): void;
    protected _getButtonClasses(): ClassInfo;
    protected _renderIcon(): import("lit-html").TemplateResult<1>;
    protected _renderLabel(): import("lit-html").TemplateResult<1>;
    protected _renderTouchTarget(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=button.d.ts.map
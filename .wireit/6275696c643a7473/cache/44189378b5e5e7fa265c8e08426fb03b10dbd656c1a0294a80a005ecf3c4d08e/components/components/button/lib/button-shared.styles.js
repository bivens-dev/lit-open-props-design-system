import { openProps } from '../../theme/open-props-normalize';
import { css } from 'lit';
export const styles = [
    openProps,
    css `/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
:host {
  height: var(--my-button-height, 38px);
  border-radius: calc(var(--my-button-height, 38px) / 2);
  display: inline-flex;
  vertical-align: middle;
}

.button {
  display: inherit;
  height: inherit;
  border-radius: inherit;
  align-items: center;
  position: relative;
  padding-inline: var(--my-button-horizontal-padding, 24px);
  border: none;
  cursor: pointer;
  z-index: 0;
  outline-offset: 2px;
  font-family: var(--my-button-font-family, sans-serif);
  font-weight: var(--my-button-font-weight, 500);
  font-size: var(--my-button-font-size, 0.875rem);
}
.button.hasIcon:not(.trailingIcon) {
  padding-inline-start: calc(var(--my-button-horizontal-padding, 24px) - var(--my-button-horizontal-icon-padding, 8px));
}
.button.hasIcon.trailingIcon {
  padding-inline-end: calc(var(--my-button-horizontal-padding, 24px) - var(--my-button-horizontal-icon-padding, 8px));
}
.button:disabled {
  cursor: default;
}
.button::before {
  content: "";
  position: absolute;
  pointer-events: none;
  z-index: -1;
  inset: 0;
  opacity: 0;
  border-radius: inherit;
}
.button:hover:not([disabled])::before {
  opacity: var(--my-button-ripple-opacity-hover, var(--my-theme-state-opacity-hover, 0.08));
}
.button:focus:not([disabled]):where(:not(:focus-visible))::before {
  opacity: var(--my-button-ripple-opacity-focus, var(--my-theme-state-opacity-focus, 0.12));
}
.button:active:not([disabled])::before {
  opacity: var(--my-button-ripple-opacity-press, var(--my-theme-state-opacity-press, 0.18));
}

#touch {
  min-height: 48px;
  min-width: 48px;
  width: 100%;
  position: absolute;
  inset-inline-start: 0px;
}

::slotted(*) {
  width: 18px;
  height: 18px;
  display: inline-flex;
  color: currentColor;
  fill: currentColor;
}

:not(.trailingIcon) ::slotted(*) {
  margin-inline-end: var(--my-button-horizontal-icon-padding, 8px);
}

.trailingIcon ::slotted(*) {
  margin-inline-start: var(--my-button-horizontal-icon-padding, 8px);
}`
];
//# sourceMappingURL=button-shared.styles.js.map
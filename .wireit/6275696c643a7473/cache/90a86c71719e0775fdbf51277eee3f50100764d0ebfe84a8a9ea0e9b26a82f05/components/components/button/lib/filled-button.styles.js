import { openProps } from '../../theme/open-props-normalize';
import { css } from 'lit';
export const styles = [
    openProps,
    css `/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
.button {
  color: var(--my-button-filled-color, var(--my-theme-on-primary-color, #fff));
  outline-color: var(--my-button-filled-background-color, var(--my-theme-primary-color, var(--blue-9)));
  background-color: var(--my-button-filled-background-color, var(--my-theme-primary-color, var(--blue-9)));
}
.button[disabled] {
  color: var(--my-button-filled-color-disabled, var(--my-theme-on-disabled-color, rgba(31, 31, 31, 0.38)));
  background-color: var(--my-button-filled-background-color-disabled, var(--my-theme-disabled-color, rgba(31, 31, 31, 0.12)));
}
.button::before {
  background-color: var(--my-button-filled-color, var(--my-theme-on-primary-color, #fff));
}`
];
//# sourceMappingURL=filled-button.styles.js.map
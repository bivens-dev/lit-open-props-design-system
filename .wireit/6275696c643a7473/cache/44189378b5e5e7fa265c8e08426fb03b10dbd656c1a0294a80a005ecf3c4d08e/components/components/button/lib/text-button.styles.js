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
  color: var(--my-button-text-color, var(--my-theme-primary-color, var(--blue-9)));
  outline-color: var(--my-button-text-color, var(--my-theme-primary-color, var(--blue-9)));
  background-color: var(--my-button-text-background-color, transparent);
}

.button[disabled] {
  color: var(--my-button-text-color-disabled, var(--my-theme-on-disabled-color, rgba(31, 31, 31, 0.38)));
  background-color: var(--my-button-text-background-color-disabled, transparent);
}

.button::before {
  background-color: var(--my-button-text-color, var(--my-theme-primary-color, var(--blue-9)));
}`
];
//# sourceMappingURL=text-button.styles.js.map
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
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.button:not([disabled]):hover {
  box-shadow: var(--my-button-box-shadow-hover, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px);
}
.button:not([disabled]):focus:where(:not(:focus-visible)) {
  box-shadow: var(--my-button-box-shadow-focus, transparent);
}
.button:not([disabled]):active {
  box-shadow: var(--my-button-box-shadow-press, transparent);
}`
];
//# sourceMappingURL=button-elevation.styles.js.map
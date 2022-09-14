import { openProps } from '../../theme/open-props-normalize';
import { css } from 'lit';
export const styles = [
    openProps,
    css `/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
.on slot[name=off] {
  display: none;
}

:not(.on) slot[name=on] {
  display: none;
}`
];
//# sourceMappingURL=toggle-button.styles.js.map
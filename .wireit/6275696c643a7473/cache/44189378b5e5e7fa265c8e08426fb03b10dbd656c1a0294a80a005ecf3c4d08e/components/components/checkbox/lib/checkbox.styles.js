import { styles as cssStyles } from "./sample.css.js";
import { css } from 'lit';
export const styles = [
    cssStyles,
    css `:host {
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  vertical-align: middle;
}

#root {
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

#square {
  border-style: solid;
  border-color: var(--my-checkbox-border-color, var(--my-theme-on-surface-color, rgb(31, 31, 31)));
  border-width: var(--my-checkbox-border-width, 2px);
  border-radius: var(--my-checkbox-border-radius, 4px);
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  inset: 31.25%;
  padding: var(--my-checkbox-padding, 2px);
  z-index: 1;
  width: 37.5%;
  height: 37.5%;
}

.checked #square {
  border-width: 0px;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
  color: var(--my-checkbox-icon-color, var(--my-theme-on-primary-color, #fff));
}

.checked path {
  stroke: currentColor;
  stroke-width: 4;
}

input {
  margin: 0;
  border: none;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: var(--my-checkbox-color, var(--my-theme-primary-color, var(--blue-9)));
}

input:disabled {
  cursor: auto;
}

.checked #square {
  background-color: var(--my-checkbox-color, var(--my-theme-primary-color, var(--blue-9)));
}

#ripple {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  z-index: 0;
  background-color: var(--my-checkbox-border-color, var(--my-theme-on-surface-color, rgb(31, 31, 31)));
}

#root:hover #ripple {
  opacity: var(--my-checkbox-ripple-opacity-hover, var(--my-theme-state-opacity-hover, 0.08));
}

#root:active #ripple {
  opacity: var(--my-checkbox-ripple-opacity-press, var(--my-theme-state-opacity-press, 0.18));
}

.checked #ripple {
  background-color: var(--my-checkbox-color, var(--my-theme-primary-color, var(--blue-9)));
}

#root input:disabled ~ #square {
  border-color: var(--my-checkbox-color-disabled, var(--my-theme-disabled-color, rgba(31, 31, 31, 0.12)));
}

#root.checked input:disabled ~ #square {
  background-color: var(--my-checkbox-color-disabled, var(--my-theme-disabled-color, rgba(31, 31, 31, 0.12)));
}

#root input:disabled ~ #ripple {
  opacity: 0;
}`
];
//# sourceMappingURL=checkbox.styles.js.map
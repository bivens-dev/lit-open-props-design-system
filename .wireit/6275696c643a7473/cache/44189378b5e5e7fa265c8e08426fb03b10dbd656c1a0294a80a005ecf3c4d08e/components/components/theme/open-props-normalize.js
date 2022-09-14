import { styles as fonts } from "../../open-props/fonts.shadow.styles";
import { styles as sizes } from "../../open-props/sizes.shadow.styles";
import { styles as easing } from "../../open-props/easings.shadow.styles";
import { styles as layers } from "../../open-props/zindex.shadow.styles";
import { styles as shadows } from "../../open-props/shadows.shadow.styles";
import { styles as aspects } from "../../open-props/aspects.shadow.styles";
import { styles as colors } from "../../open-props/colors.shadow.styles";
import { styles as gradients } from "../../open-props/gradients.shadow.styles";
import { styles as animations } from "../../open-props/animations.shadow.styles";
import { styles as borders } from "../../open-props/borders.shadow.styles";
import { styles as normalize } from "../../open-props/normalize.shadow.styles";
import { css } from "lit";
export const openProps = [
    fonts,
    sizes,
    easing,
    layers,
    shadows,
    aspects,
    colors,
    gradients,
    animations,
    borders,
    normalize,
    css `
  :host {
    /* light */
    --brand-light: var(--orange-6);
    --text1-light: var(--gray-8);
    --text2-light: var(--gray-7);
    --surface1-light: var(--gray-0);
    --surface2-light: var(--gray-1);
    --surface3-light: var(--gray-2);
    --surface4-light: var(--gray-3);
    --surface-shadow-light: 200 10% 20%;
    --shadow-strength-light: 2%;

    /* dark */
    --brand-dark: var(--orange-3);
    --text1-dark: var(--gray-1);
    --text2-dark: var(--gray-3);
    --surface1-dark: var(--gray-9);
    --surface2-dark: var(--gray-8);
    --surface3-dark: var(--gray-7);
    --surface4-dark: var(--gray-6);
    --surface-shadow-dark: 200 50% 3%;
    --shadow-strength-dark: 80%;

    /* dim */
    --brand-dim: var(--orange-4);
    --text1-dim: var(--gray-3);
    --text2-dim: var(--gray-4);
    --surface1-dim: var(--gray-8);
    --surface2-dim: var(--gray-7);
    --surface3-dim: var(--gray-6);
    --surface4-dim: var(--gray-5);
    --surface-shadow-dim: 200 10% 13%;
    --shadow-strength-dim: 20%;
    
    /* grape */
    --brand-grape: var(--grape-5);
    --text1-grape: var(--grape-9);
    --text2-grape: var(--grape-7);
    --surface1-grape: var(--grape-0);
    --surface2-grape: var(--grape-1);
    --surface3-grape: var(--grape-2);
    --surface4-grape: var(--grape-3);
    --surface-shadow-grape: 288 30% 20%;
    --shadow-strength-grape: 2%;
  }

  :root {
  color-scheme: light;

  /* set defaults */
  --brand: var(--brand-light);
  --text-1: var(--text1-light);
  --text-2: var(--text2-light);
  --surface-1: var(--surface1-light);
  --surface-2: var(--surface2-light);
  --surface-3: var(--surface3-light);
  --surface-4: var(--surface4-light);
  --surface-shadow: var(--surface-shadow-light);
  --shadow-strength: var(--shadow-strength-light);
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;

    --brand: var(--brand-dark);
    --text-1: var(--text1-dark);
    --text-2: var(--text2-dark);
    --surface-1: var(--surface1-dark);
    --surface-2: var(--surface2-dark);
    --surface-3: var(--surface3-dark);
    --surface-4: var(--surface4-dark);
    --surface-shadow: var(--surface-shadow-dark);
    --shadow-strength: var(--shadow-strength-dark);
  }
}

[color-scheme="light"] {
  color-scheme: light;

  --brand: var(--brand-light);
  --text-1: var(--text1-light);
  --text-2: var(--text2-light);
  --surface-1: var(--surface1-light);
  --surface-2: var(--surface2-light);
  --surface-3: var(--surface3-light);
  --surface-4: var(--surface4-light);
  --surface-shadow: var(--surface-shadow-light);
  --shadow-strength: var(--shadow-strength-light);
}

[color-scheme="dark"] {
  color-scheme: dark;
  
  --brand: var(--brand-dark);
  --text-1: var(--text1-dark);
  --text-2: var(--text2-dark);
  --surface-1: var(--surface1-dark);
  --surface-2: var(--surface2-dark);
  --surface-3: var(--surface3-dark);
  --surface-4: var(--surface4-dark);
  --surface-shadow: var(--surface-shadow-dark);
  --shadow-strength: var(--shadow-strength-dark);
}

[color-scheme="dim"] {
  color-scheme: dark;

  --brand: var(--brand-dim);
  --text-1: var(--text1-dim);
  --text-2: var(--text2-dim);
  --surface-1: var(--surface1-dim);
  --surface-2: var(--surface2-dim);
  --surface-3: var(--surface3-dim);
  --surface-4: var(--surface4-dim);
  --surface-shadow: var(--surface-shadow-dim);
  --shadow-strength: var(--shadow-strength-dim);
}

[color-scheme="grape"] {
  color-scheme: light;

  --brand: var(--brand-grape);
  --text-1: var(--text1-grape);
  --text-2: var(--text2-grape);
  --surface-1: var(--surface1-grape);
  --surface-2: var(--surface2-grape);
  --surface-3: var(--surface3-grape);
  --surface-4: var(--surface4-grape);
  --surface-shadow: var(--surface-shadow-grape);
  --shadow-strength: var(--shadow-strength-grape);
}
  `
];
//# sourceMappingURL=open-props-normalize.js.map
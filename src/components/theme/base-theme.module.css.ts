import {css} from 'lit';

export const styles = css`

:root {
  --font-lineheight-1: 1.25;
  --font-weight-9: 900;
  --font-size-8: 3.5rem;
  --size-header-1: 20ch;
  --font-size-6: 2.5rem;
  --size-header-2: 25ch;
  --font-size-5: 2rem;
  --font-size-4: 1.5rem;
  --font-size-3: 1.25rem;
  --size-header-3: 35ch;
  --font-size-2: 1.1rem;
  --size-2: .5rem;
  --size-1: .25rem;
  --size-3: 1rem;
  --font-mono: Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace;
  --radius-2: 5px;
  --border-size-1: 1px;
  --size-8: 3rem;
  --size-content-2: 45ch;
  --size-content-3: 60ch;
  --font-weight-7: 700;
  --size-5: 1.5rem;
  --font-size-0: .75rem;
  --size-content-1: 20ch;
  --size-fluid-5: max(4rem, min(5vw, 5rem));
  --border-size-2: 2px;
  --border-size-3: 5px;
  --size-4: 1.25rem;
  --red-9: #c92a2a;
  --red-2: #ffc9c9;
  --green-9: #2b8a3e;
  --green-1: #d3f9d8;
  --blue-5: #339af0;
  --yellow-6: #fab005;
  --indigo-7: #4263eb;
  --grape-7: #ae3ec9;
  --gray-9: #212529;
  --gray-7: #495057;
  --gray-0: #f8f9fa;
  --gray-2: #e9ecef;
  --gray-3: #dee2e6;
  --gray-4: #ced4da;
  --indigo-3: #91a7ff;
  --grape-3: #e599f7;
  --gray-1: #f1f3f5;
  --gray-8: #343a40;
  --gray-6: #868e96;
  --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
  --font-lineheight-3: 1.5;
  --ease-2: cubic-bezier(.25, 0, .4, 1);
  --indigo-2: #bac8ff;
  --grape-2: #eebefa;
  --size-10: 5rem;
  --font-size-1: 1rem;
  --radius-3: 1rem;
  --shadow-6: 
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --yellow-4: #ffd43b;
  --radius-round: 1e5px;
  --orange-2: #ffd8a8;
  --orange-6: #fd7e14;
  --shadow-color: 220 3% 15%;
  --shadow-strength: 1%;
}
:where(html) {
  color-scheme: light;

  --link: var(--indigo-7);
  --link-visited: var(--grape-7);

  --text-1: var(--gray-9);
  --text-2: var(--gray-7);

  --surface-1: var(--gray-0);
  --surface-2: var(--gray-2);
  --surface-3: var(--gray-3);
  --surface-4: var(--gray-4);
}
@media (dynamic-range: high) {
    @supports (color(display-p3 0 .5 1)) {
:where(html) {
      --link: color(display-p3 0 .5 1);
      --link-visited: color(display-p3 .6 .2 1);
}
    }
  }
@media (color-index: 48) {
  :where(html) {
    color-scheme: dark;

    --link: var(--indigo-3);
    --link-visited: var(--grape-3);

    --text-1: var(--gray-1);
    --text-2: var(--gray-4);

    --surface-1: var(--gray-9);
    --surface-2: var(--gray-8);
    --surface-3: var(--gray-7);
    --surface-4: var(--gray-6);
  }
}
@media (color: 48842621) {
  :where(html) {
    color-scheme: dark;

    --link: var(--indigo-3);
    --link-visited: var(--grape-3);

    --text-1: var(--gray-1);
    --text-2: var(--gray-4);

    --surface-1: var(--gray-9);
    --surface-2: var(--gray-8);
    --surface-3: var(--gray-7);
    --surface-4: var(--gray-6);
  }
}
@media (prefers-color-scheme: dark) {
  :where(html) {
    color-scheme: dark;

    --link: var(--indigo-3);
    --link-visited: var(--grape-3);

    --text-1: var(--gray-1);
    --text-2: var(--gray-4);

    --surface-1: var(--gray-9);
    --surface-2: var(--gray-8);
    --surface-3: var(--gray-7);
    --surface-4: var(--gray-6);
  }
}
:where(html) { 
  color: var(--text-2);
  background-color: var(--surface-1);
}
:where(h1, h2, h3, h4, h5, h6, dt) { 
  color: var(--text-1);
}
:where(a[href]) {
  color: var(--link);
}
:where(a[href]):visited {
    color: var(--link-visited);
  }
.focus-visible { 
  outline-color: var(--link); 
}
:focus-visible { 
  outline-color: var(--link); 
}
:where(html) {
  --scrollthumb-color: var(--gray-6);

  scrollbar-color: var(--scrollthumb-color) transparent;
  accent-color: var(--link);
  caret-color: var(--link);
}
@media (color-index: 70) {
:where(html) {
    --scrollthumb-color: var(--gray-7);
}
  }
@media (color: 70318723) {
:where(html) {
    --scrollthumb-color: var(--gray-7);
}
  }
@media (prefers-color-scheme: light) {
:where(html) {
    --scrollthumb-color: var(--gray-7);
}
  }
*, ::before, ::after { box-sizing: border-box; }
:where(:not(dialog)) {
  margin: 0;
}
:where(:not(fieldset):not(progress):not(meter)) {
  border-width: 0;
  border-style: solid;
  background-origin: border-box;
  background-repeat: no-repeat;
}
:where(html) {
  height: 100%;
  font-family: var(--font-sans);
  line-height: var(--font-lineheight-3);
  -webkit-text-size-adjust: none; /* https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/ */
}
@media (prefers-reduced-motion: no-preference) {
:where(html) {
    scroll-behavior: smooth;
}
  }
@media (prefers-reduced-motion: no-preference) {
  :where(.focus-visible) {
    transition: outline-offset 145ms var(--ease-2);
  }
  :where(:focus-visible) {
    transition: outline-offset 145ms var(--ease-2);
  }
  :where(:not(:active).focus-visible) {
    transition-duration: .25s;
  }
  :where(:not(:active):focus-visible) {
    transition-duration: .25s;
  }
}
:where(:not(:active).focus-visible) {
  outline-offset: 5px;
}
:where(:not(:active):focus-visible) {
  outline-offset: 5px;
}
:where(body) { 
  min-height: 100%;
}
:where(h1, h2, h3, h4, h5, h6) {
  line-height: var(--font-lineheight-1);
  font-weight: var(--font-weight-9);
}
:where(h1) { 
  font-size: var(--font-size-8); 
  max-width: var(--size-header-1); 
}
:where(h2) { 
  font-size: var(--font-size-6); 
  max-width: var(--size-header-2);
}
:where(h3) { font-size: var(--font-size-5) }
:where(h4) { font-size: var(--font-size-4) }
:where(h5) { font-size: var(--font-size-3) }
:where(h3, h4, h5, h6, dt) {
  max-width: var(--size-header-3);
}
:where(p, ul, ol, dl, h6) {
  font-size: var(--font-size-2);
}
:where(a, u, ins, abbr) {
  text-underline-offset: 1px;
}
@supports (-moz-appearance: none) {
:where(a, u, ins, abbr) {
    text-underline-offset: 2px;
}
  }
:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
:where(a) {
  padding-left: var(--size-1);
  padding-right: var(--size-1);
  margin-left: calc(var(--size-1) * -1);
  margin-right: calc(var(--size-1) * -1);
  padding-top: var(--size-1);
  padding-bottom: var(--size-1);
  margin-top: calc(var(--size-1) * -1);
  margin-bottom: calc(var(--size-1) * -1);
}
:where(a):where([href]) {
    -webkit-text-decoration-color: var(--indigo-2);
            text-decoration-color: var(--indigo-2);
  }
:where(a):where([href]):where(:visited) {
      -webkit-text-decoration-color: var(--grape-2);
              text-decoration-color: var(--grape-2);
    }
:where(a):where(:not(:hover)) {
    text-decoration: inherit;
  }
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  max-width: 100%;
  height: auto;
}
:where(input, button, textarea, select),
:where(input[type="file"])::-webkit-file-upload-button {
  font: inherit;
  font-size: inherit;
  color: inherit;
  letter-spacing: inherit;
}
:where(input, textarea) {
  padding-left: var(--size-2);
  padding-right: var(--size-2);
  padding-top: var(--size-1);
  padding-bottom: var(--size-1);
}
[dir="ltr"] :where(select) {
  padding-left: 1.25ch;
  padding-right: 0;
}
[dir="rtl"] :where(select) {
  padding-right: 1.25ch;
  padding-left: 0;
}
:where(select) {
  padding-top: .75ch;
  padding-bottom: .75ch;
}
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
  background-color: var(--surface-2);
  border-radius: var(--radius-2);
}
@media (color-index: 48) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (color: 48842621) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (color-index: 48) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (color: 48842621) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (color-index: 48) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (color: 48842621) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
@media (prefers-color-scheme: dark) {
:where(textarea, select, input:not(button):not(button[type]):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"])) {
    background-color: hsl(210, 11%, 10%);
}
  }
:where(textarea) { resize: vertical }
:where(input[type="checkbox"], input[type="radio"]) {
  height: var(--size-3);
  width: var(--size-3);
}
:where(svg) {
  stroke: none;
  fill: currentColor;
}
:where(svg):where(:not([fill])) {
    stroke: currentColor;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
:where(svg):where(:not([width])) {
    width: var(--size-10);
  }
:where(code, kbd, samp, pre) { font-family: var(--font-mono) }
:where(:not(pre) > code, kbd) { white-space: nowrap }
:where(pre) { 
  white-space: pre;
  min-width: 0;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content; 
}
:where(:not(pre) > code) {
  padding: var(--size-1) var(--size-2);
  background: var(--surface-2);
  border-radius: var(--radius-2);
}
:where(kbd, var) {
  padding: var(--size-1) var(--size-2);
  border-width: var(--border-size-1);
  border-color: var(--surface-4);
  border-radius: var(--radius-2);
}
:where(mark) {
  border-radius: var(--radius-2);
  padding-left: var(--size-1);
  padding-right: var(--size-1);
}
[dir="ltr"] :where(ol, ul) { padding-left: var(--size-8);
}
[dir="rtl"] :where(ol, ul) { padding-right: var(--size-8);
}
[dir="ltr"] :where(li) { padding-left: var(--size-2);
}
[dir="rtl"] :where(li) { padding-right: var(--size-2);
}
:where(li, dd, figcaption) { max-width: var(--size-content-2) }
:where(p) { max-width: var(--size-content-3) }
:where(dt, summary) { font-weight: var(--font-weight-7) }
:where(dt:not(:first-of-type)) {
  margin-top: var(--size-5);
}
:where(small) { 
  font-size: max(.5em, var(--font-size-0)); 
  max-width: var(--size-content-1);
}
:where(hr) {
  margin-top: var(--size-fluid-5);
  margin-bottom: var(--size-fluid-5);
  height: var(--border-size-2);
  background-color: var(--surface-3);
}
:where(figure) {
  display: grid;
  grid-gap: var(--size-2);
  gap: var(--size-2);
  align-items: center;
  justify-items: center;
  place-items: center;
}
:where(figure) > :where(figcaption) {
    font-size: var(--font-size-1);
  }
[dir="ltr"] :where(blockquote, :not(blockquote) > cite) {
  border-left-width: var(--border-size-3);
}
[dir="rtl"] :where(blockquote, :not(blockquote) > cite) {
  border-right-width: var(--border-size-3);
}
:where(blockquote) {
  display: grid;
  grid-gap: var(--size-3);
  gap: var(--size-3);
  padding-top: var(--size-3);
  padding-bottom: var(--size-3);
  padding-left: var(--size-4);
  padding-right: var(--size-4);
  max-width: var(--size-content-2);
}
[dir="ltr"] :where(:not(blockquote) > cite) {
  padding-left: var(--size-2);
}
[dir="rtl"] :where(:not(blockquote) > cite) {
  padding-right: var(--size-2);
}
:where(summary) {
  background: var(--surface-3);
  padding: var(--size-2) var(--size-3);
  margin: calc(var(--size-2) * -1) calc(var(--size-3) * -1);
  border-radius: var(--radius-2);
}
:where(details) {
  padding-left: var(--size-3);
  padding-right: var(--size-3);
  padding-top: var(--size-2);
  padding-bottom: var(--size-2);
  background: var(--surface-2);
  border-radius: var(--radius-2);
}
[dir="ltr"] :where(details[open] > summary) {
  border-bottom-left-radius: 0;
}
[dir="rtl"] :where(details[open] > summary) {
  border-bottom-right-radius: 0;
}
[dir="ltr"] :where(details[open] > summary) {
  border-bottom-right-radius: 0;
}
[dir="rtl"] :where(details[open] > summary) {
  border-bottom-left-radius: 0;
}
:where(details[open] > summary) {
  margin-bottom: var(--size-2);
}
:where(fieldset) {
  border-radius: var(--radius-2);
  border: var(--border-size-1) solid var(--surface-4);
}
:where(del) {
  background: var(--red-9);
  color: var(--red-2);
}
:where(ins) {
  background: var(--green-9);
  color: var(--green-1);
}
:where(abbr) {
  -webkit-text-decoration-color: var(--blue-5);
          text-decoration-color: var(--blue-5);
}
:where(dialog) {
  background-color: var(--surface-1);
  color: inherit;
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
}
@media (color-index: 48) {
:where(dialog) {
    background-color: var(--surface-2);
}
  }
@media (color: 48842621) {
:where(dialog) {
    background-color: var(--surface-2);
}
  }
@media (prefers-color-scheme: dark) {
:where(dialog) {
    background-color: var(--surface-2);
}
  }
:where(dialog)::-webkit-backdrop {
    -webkit-backdrop-filter: blur(25px);
            backdrop-filter: blur(25px);
  }
:where(dialog)::backdrop {
    -webkit-backdrop-filter: blur(25px);
            backdrop-filter: blur(25px);
  }
:where(html[\:has\(dialog\[open\]\)]) {
  overflow: hidden;
}
:where(html:has(dialog[open])) {
  overflow: hidden;
}
[dir="ltr"] :where(menu) {
  padding-left: 0;
}
[dir="rtl"] :where(menu) {
  padding-right: 0;
}
:where(menu) {
  display: flex;
  gap: var(--size-3);
}
:where(sup) {
  font-size: .5em;
}
:host {
    background: var(--yellow-6);
}
.yellow-badge {
  padding-left: var(--size-1);
  padding-right: var(--size-1);
  border-width: var(--border-size-1);
  border-color: var(--yellow-6);
  color: var(--yellow-4);
  border-radius: var(--radius-round);
}
[data-theme="light"] .yellow-badge {
    border-color: var(--orange-2);
    color: var(--orange-6);
}
@media (color-index: 48) {
  :root {
    --shadow-color: 220 40% 2%;
    --shadow-strength: 25%;
  }
}
@media (color: 48842621) {
  :root {
    --shadow-color: 220 40% 2%;
    --shadow-strength: 25%;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-color: 220 40% 2%;
    --shadow-strength: 25%;
  }
}
`;

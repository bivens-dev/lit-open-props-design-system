import {css} from 'lit';

export const styles = css`
:root {
    --yellow-6: #fab005;
    --size-3: 1rem;
    --border-size-1: 1px;
    --yellow-1: #fff3bf;
    --radius-round: 1e5px;
    --orange-2: #ffd8a8;
    --orange-6: #fd7e14;
}

:host {
    background: var(--yellow-6);
}

.yellow-badge {
  padding-left: var(--size-3);
  padding-right: var(--size-3);
  border-width: var(--border-size-1);
  border-color: var(--yellow-6);
  color: var(--yellow-1);
  border-radius: var(--radius-round);
}

[data-theme="dim"] .yellow-badge {
    border-color: var(--orange-2);
    color: var(--orange-6);
}
`;

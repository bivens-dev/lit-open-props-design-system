import {css} from 'lit';

export const styles = css`
:host {
    background: var(--yellow-6);
    --yellow-6: #fab005;
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

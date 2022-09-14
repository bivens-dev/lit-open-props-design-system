import { css } from 'lit';
export const styles = css `:host {
  --animation-fade-in:fade-in .5s var(--ease-3);
  --animation-fade-in-bloom:fade-in-bloom 2s var(--ease-3);
  --animation-fade-out:fade-out .5s var(--ease-3);
  --animation-fade-out-bloom:fade-out-bloom 2s var(--ease-3);
  --animation-scale-up:scale-up .5s var(--ease-3);
  --animation-scale-down:scale-down .5s var(--ease-3);
  --animation-slide-out-up:slide-out-up .5s var(--ease-3);
  --animation-slide-out-down:slide-out-down .5s var(--ease-3);
  --animation-slide-out-right:slide-out-right .5s var(--ease-3);
  --animation-slide-out-left:slide-out-left .5s var(--ease-3);
  --animation-slide-in-up:slide-in-up .5s var(--ease-3);
  --animation-slide-in-down:slide-in-down .5s var(--ease-3);
  --animation-slide-in-right:slide-in-right .5s var(--ease-3);
  --animation-slide-in-left:slide-in-left .5s var(--ease-3);
  --animation-shake-x:shake-x .75s var(--ease-out-5);
  --animation-shake-y:shake-y .75s var(--ease-out-5);
  --animation-spin:spin 2s linear infinite;
  --animation-ping:ping 5s var(--ease-out-3) infinite;
  --animation-blink:blink 1s var(--ease-out-3) infinite;
  --animation-float:float 3s var(--ease-in-out-3) infinite;
  --animation-bounce:bounce 2s var(--ease-squish-2) infinite;
  --animation-pulse:pulse 2s var(--ease-out-3) infinite;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
@keyframes fade-in-bloom {
  0% {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    filter: brightness(0.5) blur(10px);
    opacity: 1;
  }
  to {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes fade-out {
  to {
    opacity: 0;
  }
}
@keyframes fade-out-bloom {
  to {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    filter: brightness(0.5) blur(10px);
    opacity: 1;
  }
  0% {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes scale-up {
  to {
    transform: scale(1.25);
  }
}
@keyframes scale-down {
  to {
    transform: scale(0.75);
  }
}
@keyframes slide-out-up {
  to {
    transform: translateY(-100%);
  }
}
@keyframes slide-out-down {
  to {
    transform: translateY(100%);
  }
}
@keyframes slide-out-right {
  to {
    transform: translateX(100%);
  }
}
@keyframes slide-out-left {
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-in-up {
  0% {
    transform: translateY(100%);
  }
}
@keyframes slide-in-down {
  0% {
    transform: translateY(-100%);
  }
}
@keyframes slide-in-right {
  0% {
    transform: translateX(-100%);
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(100%);
  }
}
@keyframes shake-x {
  0%, to {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5%);
  }
  40% {
    transform: translateX(5%);
  }
  60% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(5%);
  }
}
@keyframes shake-y {
  0%, to {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-5%);
  }
  40% {
    transform: translateY(5%);
  }
  60% {
    transform: translateY(-5%);
  }
  80% {
    transform: translateY(5%);
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes ping {
  90%, to {
    opacity: 0;
    transform: scale(2);
  }
}
@keyframes blink {
  0%, to {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
@keyframes float {
  50% {
    transform: translateY(-25%);
  }
}
@keyframes bounce {
  25% {
    transform: translateY(-20%);
  }
  40% {
    transform: translateY(-3%);
  }
  0%, 60%, to {
    transform: translateY(0);
  }
}
@keyframes pulse {
  50% {
    transform: scale(0.9);
  }
}`;
//# sourceMappingURL=animations.shadow.styles.js.map
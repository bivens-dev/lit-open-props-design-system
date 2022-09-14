import { Button } from './button.js';
/**
 * @fires toggle - Fired when the button is toggled via user interaction.
 */
export declare class ToggleButtonImpl extends Button {
    /**
     * Toggles between displaying the on and off icons.
     */
    on: boolean;
    hasIcon: boolean;
    _getButtonClasses(): {
        hasIcon: boolean;
        on: boolean;
    };
    _renderIcon(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
//# sourceMappingURL=toggle-button.d.ts.map
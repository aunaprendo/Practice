









When a user clicks on the #theme-switcher-button, the #theme-dropdown element should display the available themes.
When the #theme-dropdown element is displayed, the aria-expanded attribute should be set to "true" for the button element.
When the users clicks on the #theme-switcher-button while the #theme-dropdown element is displayed, the menu should be closed and the hidden attribute should be added and the aria-expanded attribute should be set to "false".
When a user clicks on the #theme-switcher-button and selects a theme, the corresponding theme-<name> class should be added to the body element and the related theme message you set in the themes array should display in the aria-live="polite" element.

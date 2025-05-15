export function injectStyles(component) {
    if (component?.styles?.length) {
        const style = document.createElement('style');
        style.textContent = component.styles[0];
        document.head.appendChild(style);
    }
}
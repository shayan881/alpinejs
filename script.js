document.addEventListener('alpine:init', () => {
    Alpine.data('collapse', () => (
        {
            open: false,
            toggle() {
                this.open = !this.open
            }
        }
    ));
});
const isItersecting = (entry) => {
    return entry.isIntersecting;
}

const accion = () => {
    console.log("hey you");
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isItersecting).forEach(accion)
});

export const registerImage = (img) => {
    observer.observe(img);
}
let circle = document.querySelector('#circle');
const arrow = document.querySelector('#arrow');

window.addEventListener('mousemove', (details) => {
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(() => {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
})

arrow.addEventListener('click', () => {
    timeline.reverse();
})

let timeline = gsap.timeline();
timeline
    .from('#wapper', {
        duration: 3,
        scale: .7,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
    .from('#whitestrip', {
        duration: 2,
        width: 0,
        ease: 'Expo.easeInOut'
    }, '-=2')
    .from('#blackcard', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1')
    .from('#lineelem', {
        duration: 0.5,
        x: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=0.5')
    .from('#lineelem .line', {
        duration: 1,
        width: 0,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=0.5')
    .from('#arrow', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=0.5')
    .from('#blackcard p', {
        duration: 2,
        y: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1.5')
    .from('#sideelem', {
        duration: 2,
        y: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1.5')
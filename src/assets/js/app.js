import LocomotiveScroll from 'locomotive-scroll';
import barbaJs from './inc/barba';

document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded
});

window.addEventListener('load', () => {
    // Load
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    barbaJs(scroll);
});
import barba from '@barba/core';
import barbaCss from '@barba/css';

// Tell Barba to use the css plugin
barba.use(barbaCss);

// Var
const body = document.querySelector('body');

const barbaJs = (scroll) => {
    barba.init({
        transitions: [{
            name: 'home',
            to: {
                namespace: ['home']
            },
            once() {},
            leave() {},
            enter() {},
            beforeLeave() {
                scroll.destroy();
                body.classList.add('home');
            },
            afterEnter() {
                scroll.init();
            }
        }]
    });
};

export default barbaJs;

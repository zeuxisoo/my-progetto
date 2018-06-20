import { animation, animate, keyframes, style } from '@angular/animations';

export const fadeSlideOutUp = animation(
    animate('1s 0s', keyframes([
        style({
            opacity: 1,
            transform: 'translate3d(0, {{ from }}, 0)',
            offset: 0
        }),
        style({
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
            offset: 1
        })
    ])),
    {
        params: {
            from: '0',
            to: '-100%'
        }
    }
);

export const fadeSlideInUp = animation(
    animate('1s 0s', keyframes([
        style({
            opacity: 0,
            transform: 'translate3d(0, {{ from }}, 0)',
            offset: 0
        }),
        style({
            opacity: 1,
            transform: 'translate3d(0, {{ to }}, 0)',
            offset: 1
        })
    ])),
    {
        params: {
            from: '0',
            to: '-100%'
        }
    }
);

export const fadeSlideInDown = animation(
    animate('1s 1s', keyframes([
        style({
            opacity: 0,
            transform: 'translate3d(0, {{ from }}, 0)',
            offset: 0
        }),
        style({
            opacity: 1,
            transform: 'translate3d(0, {{ to }}, 0)',
            offset: 1
        })
    ])),
    {
        params: {
            from: '-100%',
            to: '0'
        }
    }
);

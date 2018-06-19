import { animation, useAnimation, trigger, style, transition, animate, keyframes, group, query } from '@angular/animations';

const fadeSlideUpOut = animation(
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

const fadeSlideUpIn = animation(
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

export const fadeSlideUpDownAnimation = trigger('fadeSlideUpDownAnimation', [
    // Fade + Slide up/down to original position
    transition('* => *', [
        // Default state, make it transparent
        query(':enter', [
            style({ opacity: 0 })
        ], { optional: true }),

        // Group animations make it parallel run
        group([
            // Fade + Slide up => back
            query(':leave', [
                animate('1s 0s', keyframes([
                    style({
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0
                    }),
                    style({
                        opacity: 0,
                        transform: 'translate3d(0, -100%, 0)',
                        offset: 1
                    })
                ]))
            ], { optional: true }),

            // Fade + Slide down => in
            query(':enter', [
                style({ opacity: 0 }),

                animate('1s 1s', keyframes([
                    style({
                        opacity: 0,
                        transform: 'translate3d(0, -100%, 0)',
                        offset: 0
                    }),
                    style({
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                        offset: 1
                    })
                ]))
            ], { optional: true }),
        ])
    ])
]);

export const fadeSlideUpAnimation = trigger('fadeSlideUpAnimation', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0 })
        ], { optional: true }),

        group([
            query(':leave', [
                useAnimation(fadeSlideUpOut, {
                    params: {
                        from: '0',
                        to: '-100%'
                    }
                }),
            ], { optional: true }),

            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeSlideUpIn, {
                    params: {
                        from: '200%',
                        to: '0'
                    }
                }, { optional: true})
            ], { optional: true })
        ])
    ])
])

import { trigger, style, transition, animate, keyframes, group, query } from '@angular/animations';

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

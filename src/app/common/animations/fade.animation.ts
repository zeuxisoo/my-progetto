import { trigger, transition, group, query, style, useAnimation } from '@angular/animations';

import { fadeOutUp, fadeInDown, fadeInUp } from 'ng-animate';

export const fadeSlideUpDownAnimation = trigger('fadeSlideUpDownAnimation', [
    transition('* => *', [
        // Default `void => *` etner state is transparent
        query(':enter', [
            style({ opacity: 0 })
        ], { optional: true }),

        // Rolling between fade slide up and fade slide down
        group([
            query(':leave', [
                useAnimation(fadeOutUp, { params: { a: '0', b: '-100%' } })
            ], { optional: true }),

            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeInDown, { params: { a: '-100%', b: '0', delay: '1' } })
            ], { optional: true }),
        ]);
    ]);
]);

export const fadeSlideUpAnimation = trigger('fadeSlideUpAnimation', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0 })
        ], { optional: true }),

        group([
            query(':leave', [
                useAnimation(fadeOutUp, { params: { a: '0', b: '-100%' } }),
            ], { optional: true }),

            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeInUp, { params: { a: '100%', b: '0', delay: '1' } })
            ], { optional: true })
        ])
    ])
])

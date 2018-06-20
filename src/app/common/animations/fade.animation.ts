import { trigger, transition, query, style, group, useAnimation } from '@angular/animations';

import { fadeSlideOutUp, fadeSlideInUp, fadeSlideInDown } from './animates/fade.animate';

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
                useAnimation(fadeSlideOutUp, { params: { from: '0', to: '-100%', } })
            ], { optional: true }),

            // Fade + Slide down => in
            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeSlideInDown, { params: { from: '-100%', to: '0' } })
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
                useAnimation(fadeSlideOutUp, { params: { from: '0', to: '-100%' } }),
            ], { optional: true }),

            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeSlideInUp, { params: { from: '200%', to: '0' } })
            ], { optional: true })
        ])
    ])
])

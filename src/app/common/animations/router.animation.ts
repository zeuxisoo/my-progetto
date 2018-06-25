import { trigger, transition, group, query, style, useAnimation } from '@angular/animations';
import { fadeOutUp, fadeInDown, fadeInUp } from 'ng-animate';

/*
    +--------------- fade & slide up ------------->                         +--------------- fade & slide down ----------->

    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
    |                   |     |                   |  |                   |  |                   |     |                   |
    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
    |                   |  ^  |                   |  |                   |  |                   |  +  |                   |
    | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |  |                   |  | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |
    | |   | |   | |   | |  |  | |   | |   | |   | |  |                   |  | |   | |   | |   | |  |  | |   | |   | |   | |
    | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |  |                   |  | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |
    |                   |  |  |                   |  |                   |  |                   |  |  |                   |
    | +---+ +---+ +---+ |  |  |                   |  |                   |  |                   |  |  | +---+ +---+ +---+ |
    | |   | |   | |   | |  |  |                   |  |                   |  |                   |  |  | |   | |   | |   | |
    | +---+ +---+ +---+ |  |  |                   |  |                   |  |                   |  |  | +---+ +---+ +---+ |
    |                   |  +  |                   |  |                   |  |                   |  v  |                   |
    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
*/
export const fadeUpThenDownAnimation = trigger('fadeUpThenDownAnimation', [
    transition('* => *', [
        // Default `void => *` etner state is transparent
        query(':enter, :leave', style({ position: 'fixed', width: '100%', }), { optional: true }),

        // Rolling between fade slide up and fade slide down, executes in parallel
        group([
            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeInDown, { params: { a: '-100%', b: '0', delay: '0.7' } })
            ], { optional: true }),

            query(':leave', [
                useAnimation(fadeOutUp, { params: { a: '0', b: '-100%' } })
            ], { optional: true }),
        ])
    ])
]);


/*
    +--------------- fade & slide up +------------>                         +--------------- fade & slide up ------------->

    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
    |                   |     |                   |  |                   |  |                   |     |                   |
    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
    |                   |  ^  |                   |  |                   |  |                   |  ^  |                   |
    | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |  |                   |  |                   |  |  | +---+ +---+ +---+ |
    | |   | |   | |   | |  |  | |   | |   | |   | |  |                   |  |                   |  |  | |   | |   | |   | |
    | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |  |                   |  |                   |  |  | +---+ +---+ +---+ |
    |                   |  |  |                   |  |                   |  |                   |  |  |                   |
    | +---+ +---+ +---+ |  |  |                   |  |                   |  | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |
    | |   | |   | |   | |  |  |                   |  |                   |  | |   | |   | |   | |  |  | |   | |   | |   | |
    | +---+ +---+ +---+ |  |  |                   |  |                   |  | +---+ +---+ +---+ |  |  | +---+ +---+ +---+ |
    |                   |  +  |                   |  |                   |  |                   |  +  |                   |
    +-------------------+     +-------------------+  +-------------------+  +-------------------+     +-------------------+
*/

export const fadeUpThenUpAnimation = trigger('fadeUpThenUpAnimation', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),

        // executes in parallel
        group([
            query(':enter', [
                style({ opacity: 0 }),

                useAnimation(fadeInUp, { params: { a: '100%', b: '0', delay: '0.7' } })
            ], { optional: true }),

            query(':leave', [
                useAnimation(fadeOutUp, { params: { a: '0', b: '-100%' } })
            ], { optional: true }),
        ])
    ])
]);

import { trigger, transition, query, style, stagger, useAnimation, state, animate } from '@angular/animations';
import { fadeInUp, bounceIn } from 'ng-animate';

export const projectItemAnimation = trigger('projectItemAnimation', [
    transition("* => *", [
        query(':enter', [
            style({ opacity: 0 }),

            stagger(220, [
                useAnimation(fadeInUp)
            ])
        ], { optional: true })
    ])
]);

export const projectPhotoThumbAnimation = trigger('projectPhotoThumbAnimation', [
    transition("* => *", [
        query(':enter', [
            style({ opacity: 0 }),
            stagger(220, [
                useAnimation(fadeInUp)
            ])
        ], { optional: true })
    ])
]);

export const previousPageButtonAnimation = trigger('previousPageButtonAnimation', [
    // Set default hide state
    state('hide', style({ opacity: 0 })),

    transition('hide => show', [
        useAnimation(bounceIn)
    ]),
]);

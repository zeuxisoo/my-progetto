import { trigger, transition, query, style, stagger, useAnimation, state, animate } from '@angular/animations';
import { fadeInUp, bounceIn } from 'ng-animate';

export const homeProjectItemAnimation = trigger('homeProjectItemAnimation', [
    transition("* => *", [
        query(':enter', [
            style({ opacity: 0 }),

            stagger(300, [
                useAnimation(fadeInUp)
            ])
        ], { optional: true })
    ])
]);

export const projectProjectPhotoThumbAnimation = trigger('projectProjectPhotoThumbAnimation', [
    transition("* => *", [
        query(':enter', [
            style({ opacity: 0 }),
            stagger(300, [
                useAnimation(fadeInUp)
            ])
        ], { optional: true })
    ])
]);

export const projectPreviousBackButtonAnimation = trigger('projectPreviousBackButtonAnimation', [
    // Set default hide state
    state('hide', style({ opacity: 0 })),

    transition('hide => show', [
        useAnimation(bounceIn)
    ]),
]);

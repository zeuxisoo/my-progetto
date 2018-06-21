import { trigger, transition, query, style, stagger, useAnimation } from '@angular/animations';
import { fadeInUp } from 'ng-animate';

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

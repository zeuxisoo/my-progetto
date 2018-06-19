import { Component } from '@angular/core';

import { fadeSlideUpAnimation } from './common/animations/fade.animation';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [ fadeSlideUpAnimation ],
})
export class AppComponent {

    ngAfterViewInit() {
        $("[data-fancybox]").fancybox({
            animationEffect: 'zoom',
            transitionEffect: 'fade',
            buttons: ["zoom", "thumbs", "close"],
            arrows: true,
            infobar: true
        });
    }

    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}

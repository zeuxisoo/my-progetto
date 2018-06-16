import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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

}

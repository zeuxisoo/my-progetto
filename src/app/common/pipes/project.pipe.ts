import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleLink'
})
export class TitleLinkPipe implements PipeTransform {

    transform(value: string, link: string): string {
        if (link != null && link.length > 0) {
            return `<a href='${link}' target='_blank'>${value}</a>`;
        }else{
            return value;
        }
    }

}

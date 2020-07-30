import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
    name: 'safeUrl'
})

export class safeUrlPipe implements PipeTransform {
    constructor(private _domSanitizer: DomSanitizer) { }
    transform(value: string): any {
        const imageFile =  'data:image/;base64,/9j/' + value;

        return this._domSanitizer.bypassSecurityTrustResourceUrl( imageFile);
    }
}


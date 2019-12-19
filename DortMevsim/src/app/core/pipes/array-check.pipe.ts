import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arraycheck' })
export class ArrayCheckPipe implements PipeTransform {
    transform(value: Array<any>): boolean {
        console.log((value && value.length > 0));
        return value && value.length > 0;
    }
}

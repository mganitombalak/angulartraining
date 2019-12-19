import { Type } from '@angular/core';

export interface IModalOptions {
    activeComponent?: Type<any>;
    componentMode?: ComponentMode;
    title: string;
    data?: any;
}

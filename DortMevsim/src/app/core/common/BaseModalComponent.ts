
import { BehaviorSubject } from 'rxjs';
import { ModalComponentBindingOptions } from './ModalComponentBindingOptions';

export class BaseModalComponent<T> {
    protected actionButtonText: string;
    protected onBindingComplete: BehaviorSubject<void>;
    constructor() {
        this.onBindingComplete = new BehaviorSubject(null);
    }
    model: T;
    componentMode: ComponentMode;
    bind(options: ModalComponentBindingOptions<T>): void {
        this.model = options.data ? options.data : {} as T;
        this.componentMode = options.componentMode;
        this.actionButtonText =
            this.componentMode === ComponentMode.Insert ? 'Kaydet' :
                this.componentMode === ComponentMode.Edit ? 'Güncelle' :
                    this.componentMode === ComponentMode.Delete ? 'Sil' : '';

        this.onBindingComplete.next();
    }
}

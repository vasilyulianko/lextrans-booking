import {
    ElementRef,
    Directive,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
declare var jQuery:any;

@Directive({
    selector: '[datepicker]'
})
export class DatepickerDirective implements OnInit {
    @Output() change:EventEmitter<string> = new EventEmitter<string>();

    constructor(private elementRef:ElementRef) {
    }

    ngOnInit() {
        jQuery(this.elementRef.nativeElement).datepicker({
            onSelect: (dateText) => {
                this.change.emit(dateText);
            }
        });
    }
}

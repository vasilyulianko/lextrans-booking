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
            altField: this.elementRef.nativeElement,
            altFormat: "dd MM yy",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            onSelect: (dateText) => {
                this.change.emit(dateText);
            }
        });
    }
}

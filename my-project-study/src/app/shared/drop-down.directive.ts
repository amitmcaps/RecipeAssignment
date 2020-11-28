import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleClick(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}

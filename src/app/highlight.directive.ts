import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') myBackgroundColor:string;

  constructor(){}
  
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseenter') onMouseEnter(eventData:Event){
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(eventData:Event){
    this.myBackgroundColor = 'transparent';
  }

  /*constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }*/
}

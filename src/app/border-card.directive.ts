import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
  // sans les crochets, on créerait un composant
  // pas de template
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 378;

  constructor(private el: ElementRef) {
    // this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  // default inputs
  // on importe le paquet input, on déclare la propriété et on la met en option dans notre méthode setBorder
  // dans mon template, pkmnBorderCard = mon paramètre borderColor (ex red)

  @Input("pkmnBorderCard") borderColor: string; //version alias
  // @Input() "pkmnBorderCard": string; //sans alias
  // events
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }
  // EO events
  // au niveau de la balise html  --> ma directive pkmnBorderCard
  private setHeight(defaultHeight: number) {
    // nativeElement = wrapper autour du elementRef
    this.el.nativeElement.style.height = `${defaultHeight}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
    this.el.nativeElement.style.transition = `0.5s ease`;
  }
}

/*
@HostListener : permet de lier une méthode de notre directive à un élément donné

___ PRIVATE
Private: The private declared properties and methods can be accessed only within the class definition itself. 3. Protected: Properties and methods can be accessed from inside the class or any other class extending the one that owns the property or the method which are declared as protected.

*/

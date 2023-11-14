import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';
  activeLink: string = 'link1'; // Initially set the first link as active
  count = 0

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollingElement = document.getElementById('scrollingElement');

    if (!scrollingElement) {
      return;
    }

    if (window.scrollY > 300) {
      this.renderer.addClass(scrollingElement, 'background-important');
    } else {
      this.renderer.removeClass(scrollingElement, 'background-important');
    }
  }
  menuClick() {
    const ele = document.getElementById('navbarNav');
    if(ele){
      if(this.count == 0){
        ele.style.display = 'block';
        this.count++;
      }else{
        ele.style.display = 'None';
        this.count = 0;
      }
    }
   
  }
}

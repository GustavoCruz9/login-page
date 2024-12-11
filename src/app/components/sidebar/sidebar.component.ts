import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
})
export class SidebarComponent {
  isClosed = true; // Controla o estado da sidebar

  constructor(private elementRef: ElementRef) {}

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

  closeSidebar(event: Event) {
    const clickedElement = event.target as HTMLElement;

    // Verifica se o clique foi fora do sidebar ou em um link interno
    if (!this.elementRef.nativeElement.contains(clickedElement) || clickedElement.tagName === 'A') {
      this.isClosed = true;
    }
  }
}

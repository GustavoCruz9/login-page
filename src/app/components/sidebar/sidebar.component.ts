import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SidebarComponent {
  // Variável para controlar o estado da sidebar
  isSidebarClosed = true;

  // Método para alternar entre aberto e fechado
  toggleSidebar(): void {
    this.isSidebarClosed = !this.isSidebarClosed; // Alterna entre aberto e fechado
  }
}

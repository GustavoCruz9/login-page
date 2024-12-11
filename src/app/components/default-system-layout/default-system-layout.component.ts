import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HomePageComponent } from "../../pages/home-page/home-page.component";

@Component({
  selector: 'app-default-system-layout',
  imports: [SidebarComponent, HomePageComponent],
  templateUrl: './default-system-layout.component.html',
  styleUrl: './default-system-layout.component.scss'
})
export class DefaultSystemLayoutComponent {

}

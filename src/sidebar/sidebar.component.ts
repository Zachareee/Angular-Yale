import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'sidebar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  tags = ["HAPPENING AT SOA", "COMMUNITY BULLETIN BOARD", "CALENDARS & NEWSLETTERS"]
}

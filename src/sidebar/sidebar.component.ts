import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'sidebar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  constructor(private router: Router) { }

  @Input() tags!: string[]
  encode = encodeURIComponent

  scrollToFrag(fragment: string) {
    this.router.navigateByUrl(`#${fragment}`)
  }
}

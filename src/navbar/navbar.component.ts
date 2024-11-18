import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  animations: [
    trigger("clickmenu", [
      state("open", style({
        opacity: 1,
        transform: "scale(1,1)"
      })),
      state("close", style({
        opacity: 0,
        transform: "scale(0,1)"
      })),
      transition("open => close", [animate("100ms ease-in")]),
      transition("close => open", [animate("200ms ease-out")])
    ])
  ]
})
export class NavbarComponent {
  textboxes = {
    About: ["About the School", "Apply to the School", "Exhibitions", "Publications", "News", "Public Events"],
    "Newsletters/calendars": ["Sign up for School of Art newsletters", "Community Calendar", "Academic Calendar", "Public Events Calendar", "SoA in the World Calendar"],
    "Quick Links": ["Current Students", "Faculty & Staff", "Wiki Sitemap", "Knowledgebase", "Facilities", "Courses", "Opportunities", "Resources", "School of Art in the World"]
  }

  showCategories() {
    document.getElementById("categories")?.classList.toggle("hidden")
  }
  hovering: string[] | null = null
}

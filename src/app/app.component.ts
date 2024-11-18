import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from '../image/image.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yale School of Art';
  images: Record<string, string> = {
    admissions: "https://cdn.filestackcontent.com/resize=width:525/output=format:jpg/JeS4GuttRz29r2ntLEpr",
    bg: "https://cdn.filestackcontent.com/1lXM9r0HTeSlAL9onqql"
  }
}

import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html'
})
export class ImageComponent {
  @Input() image!: string;
}

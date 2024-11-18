import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, /*BrowserAnimationsModule*/],
  templateUrl: './navbar.component.html',
  //animations: [
  //  trigger("clickmenu", [
  //    state("open", style({
  //      opacity: 1,
  //      transform: "scale(1,1)"
  //    })),
  //    state("close", style({
  //      opacity: 0,
  //      transform: "scale(0,1)"
  //    })),
  //    transition("open => close", [animate("100ms ease-in")]),
  //    transition("close => open", [animate("200ms ease-out")])
  //  ])
  //]
})
export class NavbarComponent {
  textboxes = ["Hello", "byebye"]
}

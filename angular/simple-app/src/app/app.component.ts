import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-app';

  @ViewChild('selection') selection: ElementRef<HTMLInputElement>;

  selectComponent(): void {
    this.selection.nativeElement.value = 'component';
  }
}

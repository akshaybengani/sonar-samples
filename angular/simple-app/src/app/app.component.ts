import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-app';

  /**
   * Handles the selection logic for the interactive card.
   * Updates the value of the hidden input element.
   * @param selectionInput The HTMLInputElement representing the hidden selection input.
   */
  selectComponent(selectionInput: HTMLInputElement): void {
    selectionInput.value = 'component';
  }
}

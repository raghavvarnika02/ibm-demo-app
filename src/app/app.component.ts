import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proof of Concept';
  public homeSelected = false;
  public signUpSelect = false;

  public onHomeSelect() : void {
    this.homeSelected = true;
  }

  public onSignUpSelect(): void {
    this.signUpSelect = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Soy un simple text inocente';

  onChangeText = () => {
    this.text = 'Ahora he cambiado';
  };
}

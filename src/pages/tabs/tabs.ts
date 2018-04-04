import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AthletesPage } from '../athletes/athletes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Athletes = AthletesPage;

  constructor() {

  }
}

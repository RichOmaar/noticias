import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categories: string[] = ['technology', 'entertainment', 'general', 'health', 'science', 'sports', 'business'];
  public selectedCategory: string = this.categories[0];

  constructor() {}

  segmentChanged( category: any ) {
    console.log( category );
  }
}

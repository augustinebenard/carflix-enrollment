import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {
  savedUser = JSON.parse(sessionStorage.getItem('savedUser') || '')
  constructor() { }

  ngOnInit() {
    console.log(this.savedUser);

  }

}

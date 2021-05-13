import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  urlBackgroundImage: string = 'https://i.imgur.com/bNAs3DZ.png';
  urlHamburger: string = 'https://i.imgur.com/dAZi2t6.png';

  constructor() { }

  ngOnInit(): void {
  }

}

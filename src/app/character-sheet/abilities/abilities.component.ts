import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  strength: number = 12;
  dexterity: number = 10;
  constitution: number = 10;
  intelligence: number = 10;
  wisdom: number = 10;
  charisma: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}

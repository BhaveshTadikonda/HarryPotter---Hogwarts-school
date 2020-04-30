import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  public userName: any = null;
  public house: string = null;
  public characterData: any = null;

  public houses: any[] = [
    { id: 0, name: 'Hufflepuff' },
    { id: 1, name: 'Ravenclaw' },
    { id: 2, name: 'Gryffindor' },
    { id: 3, name: 'Slytherin' }
  ];

  ngOnInit() {
  }

  public getName(name: any) {
    // console.log('Name: ', name.control.value);
  }
  
  public getCharacters(formData: any) {
    this.userName = formData;
    console.log('Name: ', this.userName.name);
    console.log('House: ' + this.house);
    this.characterService.getCharacters(this.house).subscribe((res: Response) => {
      console.log("Character data: ",res);
      this.characterData = res;
    });

  }

  public selection = 'Select house'; // variable declaration and initilization
// Method to select house
selectHouse(event: any) {
    this.house = event.name;
    this.selection = event.name; // we added this to assigned selected value to variable declared above.
    this.characterData = null;
  }

}

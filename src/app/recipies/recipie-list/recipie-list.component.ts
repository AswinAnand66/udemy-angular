import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo9C2-wIEGp3KnCOF7D4P9P6C8x2Q5CSeGA&usqp=CAU"),
    new Recipe("A Test Recipe","This is simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo9C2-wIEGp3KnCOF7D4P9P6C8x2Q5CSeGA&usqp=CAU")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

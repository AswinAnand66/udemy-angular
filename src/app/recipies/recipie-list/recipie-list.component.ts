import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

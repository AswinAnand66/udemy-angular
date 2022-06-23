import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  userName : string='';

  constructor() { }

  ngOnInit(): void {
  }
  onReset(){
    this.userName='';
  }
}

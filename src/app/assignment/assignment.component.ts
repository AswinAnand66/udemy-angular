import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  userName : string='';
  showSecret : boolean =false;
  logs=[];

  constructor() { }

  ngOnInit(): void {
  }
  onReset(){
    this.userName='';
  }
  callSecret(){
    this.showSecret=!this.showSecret;
    this.logs.push(this.logs.length+1);

  }
}

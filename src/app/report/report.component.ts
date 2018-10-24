import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  selectedBug = null;
  tdname: string;
  isEnvironmentChanged = false;
  constructor() { }

  ngOnInit() {
  }


  bugSelection(value) {
    this.selectedBug = value;
  }

  getTdValue(event){
    if(event.target){
      this.tdname = event.target.value;
    }
  }

  environmentSelection(value) {
    if(value && this.tdname){
      this.isEnvironmentChanged = true;
    }else{
      this.isEnvironmentChanged = false;
    }
    
  }

}

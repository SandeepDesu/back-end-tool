import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  selectedBug = null;
  constructor() { }

  ngOnInit() {
  }


  bugSelection(event) {
    this.selectedBug = event;
  }
}

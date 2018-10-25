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
  selectedPermission: string;
  selectedType: string;
  constructor() { }

  ngOnInit() {
  }

  selectType(value) {
    this.selectedType = value;
    this.isEnvironmentChanged = false;
    this.selectedBug = null;
    this.selectedPermission = null;
  }

  bugSelection(value) {
    this.selectedBug = value;
  }

  environmentSelection(value) {
    if (value && this.selectedBug) {
      this.isEnvironmentChanged = true;
    } else {
      this.isEnvironmentChanged = false;
    }
  }

  permissionSelection(value) {
    this.selectedPermission = value;
  }

}

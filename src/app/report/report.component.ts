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
    this.selectedBug = null;
    this.isEnvironmentChanged = false;
  }

  bugSelection(value) {
    this.selectedBug = value;
  }

  environmentSelection(value) {
    this.isEnvironmentChanged = true;
  }

  isDisplayDiscription() {
    if (this.selectedType === 'Unexpected_result' && this.selectedBug === 'kafka' && this.isEnvironmentChanged) {
      return true;
    }
    if (this.selectedType === 'Validation' && this.selectedBug === 'kafka' && this.isEnvironmentChanged) {
      return true;
    }
    if (this.selectedType !== 'Unexpected_result' && this.selectedType !== 'Validation' && this.selectedBug && this.isEnvironmentChanged) {
      return true;
    }
    return false;
  }


}

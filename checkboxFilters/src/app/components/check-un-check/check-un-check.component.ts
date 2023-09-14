import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CheckUnCheckService } from 'src/app/services/check-un-check.service';

@Component({
  selector: 'app-check-un-check',
  templateUrl: './check-un-check.component.html',
  styleUrls: ['./check-un-check.component.scss']
})
export class CheckUnCheckComponent implements OnInit {
  studentsData: any = []
  studentsArray: any = []
  name: string = ''
  constructor(public checkUnCheckService: CheckUnCheckService, public http: HttpClient) { }

  ngOnInit(): void {
    this.getStudentsList()
  }

  getStudentsList() {
    this.checkUnCheckService.getData().subscribe((data) => {
      this.studentsArray = data
    })
  }

  postData() {
    const data = { name: this.name };
    this.checkUnCheckService.postData(data).subscribe({
      complete: () => {
        this.getStudentsList()
        this.name = ''
      }
    })
  }
}

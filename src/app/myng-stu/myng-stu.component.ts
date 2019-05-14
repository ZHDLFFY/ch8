import { Component, OnInit } from '@angular/core';
import { Student, All_stu } from './student'
import { IfStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-myng-stu',
  templateUrl: './myng-stu.component.html',
  styleUrls: ['./myng-stu.component.css']
})
export class MyngStuComponent implements OnInit {
  private students: Student[];
  private Showmale: number;
  private Show: number;
  private Course: string;




  constructor() {
    this.students = All_stu;
    this.Showmale = 2;


  }

  ngOnInit() {


  }


  toggleShow() {
    if (this.Showmale == 1) {
      return '显示女生';

    }
    else if (this.Showmale == 0) {
      return '显示男生';

    }
    else if (this.Showmale == 2) {
      return '显示全部';

    }

  }

  selectg() {
    if (this.Showmale == 1) {
      return '女';

    }
    else if (this.Showmale == 0) {
      return '男';

    }
    else {
      return;
    }

  }


  only_male() {
    if (this.Showmale == 1) {
      this.Showmale = 0;

    }
    else if (this.Showmale == 0) {
      this.Showmale = 2;
    }
    else if (this.Showmale == 2) {
      this.Showmale = 1;

    }
    return false;
  }





  All_sub_sort() {
    if (this.Show == 1702) {
      this.Show = 0;
    }
    else {
      this.Show = 1702;
    }
  }

  Course_type() {

    if (this.Course == "必修课") {
      this.Course = "选修课";
    }
    else {
      this.Course = "必修课"
    }

  }


  countStyle(count: number) {
    let style = {
      color: 'red',
      'background-color': 'white'
    };

    if (count > 90) {
      style.color == 'green';
      //  style["background-color"] = 'white'
    }
    if (count < 60) {
      style.color == 'red';
      //style["background-color"] = 'white'
    }
  }

}

import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internalpractice';
  public empdata:any=[];
  public data:any={
    no:"",
    studentname:"",
    studentemail:""
  };
  studentform=new FormGroup({
    rollno:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  });
  get rollno()
  {
    return this.studentform.get('rollno');
  }
  get name()
  {
    return this.studentform.get('name');
  }
  get email()
  {
    return this.studentform.get('email');
  }
  onSubmit()
  {
      
      // this.data.no=this.studentform.value.rollno;
      // this.data.studentname=this.studentform.value.name;
      // this.data.studentemail=this.studentform.value.email;
      this.empdata.push(this.studentform.value);
      console.log(this.empdata)
  }
}

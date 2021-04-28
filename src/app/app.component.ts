import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];
  constructor(){
    
  }
  

  // before template html render 
  ngOnInit() {
   let users =  JSON.parse(localStorage.getItem("$user_info"));
   this.users = users;
  //  console.log("result : " + users[0]['username']);
  }
  

  createUser(form:NgForm){
   
  console.log(form.value);
    let users = [];
    users  = this.users;
    // console.log(form.value);
    users.push(form.value);
   let user =  JSON.stringify(users);
    localStorage.setItem("$user_info",user);
  
    form.resetForm();
  }

  // delete user
  deleteUser(index)
  {
    //1. get index 
    // find item of index 

    let ind = this.users.indexOf(this.users[index]);

    if (ind > -1){
      this.users.splice(ind,1);
    }

  localStorage.setItem("$user_info",JSON.stringify(this.users));
   


    console.log(ind);


   
  }



 
  
}
 
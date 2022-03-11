import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private rr: Router) {}

  userform: FormGroup;
  ngOnInit() {
    this.userform = new FormGroup({
      fname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
  


    
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  // tslint:disable-next-line:member-ordering
  data: any = {}; // literal object
  // tslint:disable-next-line:member-ordering
  reguser;

  // tslint:disable-next-line:member-ordering
  isRegister = true;

  //   register()
  //  {
  //  alert("hi");
  //   var newarr=JSON.parse(localStorage.getItem("userinfo"));
  //          if(newarr==null)
  //          {
  //           newarr=[];
  //          }

  //          newarr.push(this.userform.value);
  //   localStorage.setItem("userinfo",JSON.stringify(newarr));
  //   this.data={};
  //   this.reguser=JSON.parse(localStorage.getItem("userinfo"));
  //   alert ("registration successfull");
  // this.rr.navigate(['/logout']);

  //  }

  save() {
    // const usr = new user();
    alert("hi");
    debugger
    let newarr = JSON.parse(localStorage.getItem("user1"));
    if (newarr == null) {
      newarr = [];
    }

    newarr.push(this.userform.value);
    localStorage.setItem("user1", JSON.stringify(newarr));
    // this.data={};
    // this.data=JSON.parse(localStorage.getItem("userinfo"));
    alert("registration successfull");
    this.rr.navigate(["/login"]);
  }

  // tslint:disable-next-line:member-ordering
  data1: any = {};
  // tslint:disable-next-line:member-ordering
  temp: number;
}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  data1: any;
  constructor(private rr: Router, private auth: AuthService) {}

  login(uname: string, pass: string) {
    // alert(frm.user);
    // this.data1 = JSON.parse(localStorage.getItem("user1"));

    if (uname === "anjali" && pass === "123456") {
      alert("hii..." + uname);
      // localStorage.setItem('isLogin', 'true');
      this.auth.sendToken(uname);
      this.rr.navigate(["/product"]);
      return true;
    } else {
      // tslint:disable-next-line:prefer-for-of
     this.rr.navigate(['/login'])
        }
        //  else {
        //  alert('username and password not matched');
        //  return true;
        // }
      }
    }
  


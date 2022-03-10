import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // u1: string;
  // p1: string;
  // mydate: string;

  data: any = {};

  constructor(private lser: LoginService) {}

  ngOnInit() {}

  login() {
    this.lser.login(this.data.u1, this.data.p1);
  }
}

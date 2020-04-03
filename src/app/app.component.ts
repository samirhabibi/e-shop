import { Component } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { UserService } from "./Services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private route: Router,
    private us: UserService
  ) {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.us.save(user);
        const returnUrl = localStorage.getItem("returnUrl");
        this.route.navigateByUrl(returnUrl);
      }
    });
  }
}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Cait",
    contactInfo: "caitling@umich.edu",
    bio: "Front-end developer"
  };

  constructor(private router: Router) {}

  getUserProfile(): object | void {
    return this.userProfile;
  }
  // this.router.navigate(["profile"]);
  setUserProfile() {}

  editProfile(): void {
    this.router.navigate(["edit"]);
  }
}

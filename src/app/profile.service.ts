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

  getUserProfile(): object {
    return this.userProfile;
  }

  setUserProfile(newName: string, newContact: string, newBio: string): void {
    this.userProfile = {
      name: newName,
      contactInfo: newContact,
      bio: newBio
    };
    this.router.navigate(["profile"]);
  }

  editProfile(): void {
    this.router.navigate(["edit"]);
  }
}

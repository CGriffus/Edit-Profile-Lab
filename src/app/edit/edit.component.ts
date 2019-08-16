import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  user: object;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }

  updateProfile(form) {
    this.profileService.setUserProfile(
      form.value.name,
      form.value.contact,
      form.value.bio
    );
  }
}

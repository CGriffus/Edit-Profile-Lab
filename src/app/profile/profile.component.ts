import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  goToEdit() {
    this.profileService.goToEdit();
  }
}

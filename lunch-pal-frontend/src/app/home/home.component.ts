import { LunchPalService, LunchPal } from './../services/lunch-pal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../providers/user-provider/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private lunchPalService: LunchPalService,private userSrv : UserService) {}

  // commentFormControl = new FormControl('', [
  //   Validators.required,
  // ]);

  joinedPeopleMock = ['Mark', 'Marie', 'Lisa'];
  ngOnInit() {
    if(!this.userSrv.isLogIn()){
      console.log(this.userSrv.isLogIn())
      this.router.navigate(["/login"])
    }
  }

  findLunchPal() {
    this.router.navigate(['/find-lunch-pal']);
  }

  report() {
    
  }

  getMyLunchPals(): LunchPal[] {
    return this.lunchPalService.myLunchPals;
  }

  logout(){
    this.userSrv.logout()
  }
}

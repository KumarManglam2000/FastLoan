import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginInfo } from 'src/app/models/user-login-info';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  disableSelect = new FormControl(false);

  loginErrorMessage?: string;
  hide = true;
  userLoginFormMessage?: string = 'User Login Form'
  userLogingInfo: UserLoginInfo;
  userLoginReference: FormGroup;

 // userName : any;
  constructor(private userService: UserService, private routerService: RouterService, formBuilder: FormBuilder) {
    this.userLogingInfo = new UserLoginInfo();
    
    this.userLoginReference = formBuilder.group({
      useremail: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  userLogin(userLoginReference: FormGroup) {
    this.userLogingInfo = userLoginReference.value;
    // this.userLoginReference.reset();
    this.userService.loginUser(this.userLogingInfo).subscribe({
      next: (res) => {
        console.log(res);

      //   let jsonResToken = JSON.stringify(res);
      // let jsonResObj = JSON.parse(jsonResToken);
      // let userToken = jsonResObj['token'];
      // this.routerService.setUserToken(userToken);

    //     this.userService.getLenderprofileById(this.userLogingInfo.useremail)
    // .subscribe(
    //      res => {
    //       this.userName =  res.name; 
    //       console.log(res);  
    //     },
    //     err => {
    //       console.log(err);
    //     }
    // )
        if (res != null) {
          Swal.fire('User Login', 'User Loggedin successfully!!!', 'success')
          this.routerService.setUserDetails(this.userLogingInfo.useremail, this.userLogingInfo.role);
          if(this.userLogingInfo.role==="Borrower"){
            this.routerService.gotoBorrowerDashboard();
          }
          else if(this.userLogingInfo.role==="Lender"){
            this.routerService.gotoLenderDashboard()
          }
        }
      },
      error: (e) => {
        this.loginErrorMessage = e.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invailid Details',
        })
      },
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { MbRegister } from 'src/app/models/mb-register';
// import { UserLoginInfo } from 'src/app/models/user-login-info';
// import { RouterService } from 'src/app/services/router.service';
// import { UserService } from 'src/app/services/user.service';
// import Swal from 'sweetalert2';
 import { RecommendationService } from '../Borrower/recommendation/shared/shared/recommendation.service';

// @Component({
//   selector: 'app-mb-register',
//   templateUrl: './mb-register.component.html',
//   styleUrls: ['./mb-register.component.css']
// })
// export class MbRegisterComponent implements OnInit {
//   mbregister: MbRegister
//   disableSelect = new FormControl(false);
//   userRegistrationFormRef:FormGroup;

//   constructor(private userService: UserService, private routerService: RouterService, formBuilder:FormBuilder, public recommendationservice: RecommendationService) {
//     this.mbregister = new MbRegister()
//     this.userRegistrationFormRef=formBuilder.group({   
//       email: ['', Validators.required],
//       password:['', Validators.required],
//       name:['', Validators.required],
//       pan:['', Validators.required],
//       mobileNo:['', Validators.required],
//       address:['', Validators.required],
//       monthlyIncome:['', Validators.required],
//       dob:['', Validators.required],
//       gender:['', Validators.required],
//       })
  
//   }

//   ngOnInit(): void {
//   }

//   addUser(userRegistrationFormRef: NgForm) {
//     this.mbregister = this.userRegistrationFormRef.value;
//     this.userService.registerUserAsBorrower(this.mbregister).subscribe({
//       next: (res) => {
//         console.log(res);
//         if (res != null) {
//           var authUser = new UserLoginInfo();
//           authUser.useremail = this.mbregister.email;
//           authUser.password = this.mbregister.password;
//           authUser.role = "Borrower";

//             // Recommendation Process
//             this.recommendationservice.borrowerdata.borrowerId =    this.mbregister.email;
//             this.recommendationservice.borrowerdata.borrowerName =      this.mbregister.name;
  
//             this.recommendationservice.createBorrowerRecommendation().subscribe(
//               res => {
//                 console.log(res);
//               },
//               err => {
//                 console.log(err);
//               }
//             );
//             //
            
//           this.userService.registerUser(authUser).subscribe(
//             res => {
//               console.log(res);
//             }
//           )
//           Swal.fire('Borrower Registration', 'User Registered as  Borrower Successfully!!!', 'success')
//         }
//         this.routerService.gotologin();

//       },
//       error: (e) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'This emailId has been already registered',
//         })
//       },
//     });
//   }
// }





import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MbRegister } from 'src/app/models/mb-register';
import { UserLoginInfo } from 'src/app/models/user-login-info';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mb-register',
  templateUrl: './mb-register.component.html',
  styleUrls: ['./mb-register.component.css']
})
export class MbRegisterComponent implements OnInit {
  mbregister: MbRegister
  constructor(private userService: UserService, private routerService: RouterService, public recommendationservice: RecommendationService) {
    this.mbregister = new MbRegister()
  }

  ngOnInit(): void {
  }

  addUser(regFormRef: NgForm) {

    this.userService.registerUserAsBorrower(this.mbregister).subscribe({
      next: (res) => {
        console.log(res);
        if (res != null) {
          // var authUser = new UserLoginInfo();
          // authUser.useremail = this.mbregister.email;
          // authUser.password = this.mbregister.password;
          // authUser.role = "Borrower";

          // Recommendation Process
          this.recommendationservice.borrowerdata.borrowerId =    this.mbregister.email;
          this.recommendationservice.borrowerdata.borrowerName =      this.mbregister.name;

          this.recommendationservice.createBorrowerRecommendation().subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            }
          );

          //
          // this.userService.registerUser(authUser).subscribe(
          //   res => {
          //     console.log(res);
          //   }
          // )
          Swal.fire('Borrower Registration', 'User Registered as  Borrower Successfully!!!', 'success')
        }
        this.routerService.gotologin();

      },
      error: (e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This emailId has been already registered',
        })
      },
    });
  }
}
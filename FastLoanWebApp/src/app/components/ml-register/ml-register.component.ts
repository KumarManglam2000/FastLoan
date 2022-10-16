// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { MlRegister } from 'src/app/models/ml-register';
// import { UserLoginInfo } from 'src/app/models/user-login-info';
// import { RouterService } from 'src/app/services/router.service';
// import { UserService } from 'src/app/services/user.service';
// import Swal from 'sweetalert2';
 import { RecommendationService } from '../Borrower/recommendation/shared/shared/recommendation.service';

// @Component({
//   selector: 'app-ml-register',
//   templateUrl: './ml-register.component.html',
//   styleUrls: ['./ml-register.component.css']
// })
//   export class MlRegisterComponent implements OnInit {
//     disableSelect = new FormControl(false);
//     mlregister: MlRegister
//     userRegistrationFormRef:FormGroup;
  
//     constructor(private userService: UserService, private routerService: RouterService,  formBuilder:FormBuilder, public recommendationservice : RecommendationService ) {
//       this.mlregister = new MlRegister()
//       this.userRegistrationFormRef=formBuilder.group({   
//       email: ['', Validators.required],
//       password: ['', Validators.required] ,
//       name: ['', Validators.required],
//       mobileNo: ['', Validators.required],
//       pan: ['', Validators.required]
//       })
  
//     }
  
//     ngOnInit(): void {
//     }
//     addUser(userRegistrationFormRef: NgForm) {
//       this.mlregister = this.userRegistrationFormRef.value;
  
//       this.userService.registerUserAsLender(this.mlregister).subscribe({
//         next: (res) => {
//           console.log(res);
//           if (res != null) {
//             var authUser = new UserLoginInfo();
//             authUser.useremail = this.mlregister.email;
//             authUser.password = this.mlregister.password;
//             authUser.role = "Lender";

//             // Recommendation Process
//        this.recommendationservice.lenderdata.lenderId =     this.mlregister.email ;
//        this.recommendationservice.lenderdata.lenderName =     this.mlregister.name; 
   
//        this.recommendationservice.createLenderRecommendation().subscribe(
//          res => {
//            console.log(res);
//          },
//          err => {
//            console.log(err);
//          }
//        );
//         //
//             this.userService.registerUser(authUser).subscribe(
//               res => {
//                 console.log(res);
//               }
//             )
//             Swal.fire('Lender Registration', 'User Registered as Lender Successfully!!!', 'success')
//           }
//           this.routerService.gotologin();
//         },
//         error: (e) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'This emailId has been already registered',
//           })
//         },
//       });
//     }
// }





import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MlRegister } from 'src/app/models/ml-register';
import { UserLoginInfo } from 'src/app/models/user-login-info';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ml-register',
  templateUrl: './ml-register.component.html',
  styleUrls: ['./ml-register.component.css']
})
export class MlRegisterComponent implements OnInit {
  mlregister: MlRegister

  constructor(private userService: UserService, private routerService: RouterService,  public recommendationservice : RecommendationService ) {
    this.mlregister = new MlRegister()

  }

  ngOnInit(): void {
  }
  addUser(regFormRef: NgForm) {

    this.userService.registerUserAsLender(this.mlregister).subscribe({
      next: (res) => {
        console.log(res);
        if (res != null) {
          // var authUser = new UserLoginInfo();
          // authUser.useremail = this.mlregister.email;
          // authUser.password = this.mlregister.password;
          // authUser.role = "Lender";

             // Recommendation Process
       this.recommendationservice.lenderdata.lenderId =     this.mlregister.email ;
       this.recommendationservice.lenderdata.lenderName =     this.mlregister.name; 
   
       this.recommendationservice.createLenderRecommendation().subscribe(
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
          Swal.fire('Lender Registration', 'User Registered as Lender Successfully!!!', 'success')
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





       
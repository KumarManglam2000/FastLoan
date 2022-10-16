import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Borrower } from 'src/app/models/borrower';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {
  constructor( private routerService: RouterService, public service: UserService, public toastr: ToastrService) {
  }

  BorrowerID: any;

  ngOnInit(): void {
    this.BorrowerID = this.routerService.getEmailIdFromLocalStorage();
    console.log(this.BorrowerID);
    //this.service.(this.borrowerID);

    this.service.getBorrowerprofileById(this.BorrowerID)
      .subscribe(
        res => {
          console.log(res);
          this.service.formDataL.email = res.email;
          this.service.formDataL.name = res.name;
          this.service.formDataL.pan = res.pan;
          this.service.formDataL.mobileNo = res.mobileNo;
          this.service.formDataL.address = res.address;
          this.service.formDataL.password = res.password;
          this.service.formDataL.dob = res.dob;
          this.service.formDataL.gender = res.gender;
          this.service.formDataL.monthlyIncome = res.monthlyIncome;
        }
      );
    }
    UpdateUserB(regFormRef: NgForm) {
      this.service.UpdateUserB(this.service.formDataL.email).subscribe(
        res => {
          regFormRef.form.reset();
          this.service.formDataL = new Borrower();
          if (res != null) {
            console.log("User Update successful");
            if (res) {
              this.toastr.success("Profile Updated Successfully!", 'Success');
            }
          }
          this.routerService.gotoBorrowerDashboard();
        });
    }
}

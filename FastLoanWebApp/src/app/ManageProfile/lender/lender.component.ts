import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Lender } from 'src/app/models/lender';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {

  constructor( private routerService:RouterService, public service : UserService, public toastr : ToastrService) { 
  }
  
  lenderId:any;

  ngOnInit(): void {
    this.lenderId= this.routerService.getEmailIdFromLocalStorage();
    console.log(this.lenderId);
    //this.service.(this.lenderId);

    this.service.getLenderprofileById(this.lenderId)
      .subscribe(
        res => {
          console.log(res);
          this.service.formData.email =res.email;
          this.service.formData.password = res.password;
          this.service.formData.mobileNo = res.mobileNo;
          this.service.formData.name = res.name;
          this.service.formData.pan = res.pan;
        }
      );
    // this.lenderId= this.routerService.getEmailIdFromLocalStorage();
    //   console.log(this.lenderId);
  }
  UpdateUserL(regFormRef: NgForm) {
    this.service.UpdateUserL(this.service.formData.email).subscribe(
      res => {
        regFormRef.form.reset();
        this.service.formData = new Lender();
        if (res != null) {
          console.log("User Update successful");
          if(res)
        {
        this.toastr.success("LoanOffer Updated Successfully!",'Success');
        }
        }
        this.routerService.gotoLenderDashboard();
      },);
    }

}

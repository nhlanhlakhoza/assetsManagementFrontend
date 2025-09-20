import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { StorageService } from '../../service/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;

  passwordMismatchMessage: boolean = false; 
  passwordMatch: boolean = false;
  tryAgainMessage: String = "";
  tryAgain: boolean = true;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router:Router
  )
  {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password:['', Validators.required],

    })
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if(res.userId != null)
      {
         const user={
          id:res.userId,
          role:res.userRole
         }

      console.log(user)
         StorageService.saveUser(user);
         StorageService.saveToken(res.jwt)
         if(StorageService.isAdminLoggedIn())
          this.router.navigateByUrl("/admin/dashboard");
        else if (StorageService.isEmployeeLoggedIn())
          this.router.navigateByUrl('employee/dashboard'); 

      }
      else{
        this.passwordMismatchMessage=true;
        setTimeout(() => {
          this.passwordMismatchMessage = false;
        }, 3000);
        return;
      }
    })


  }


  get register (){return this.loginForm.controls;}
}
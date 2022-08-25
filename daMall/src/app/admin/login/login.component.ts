import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }


  onLogin(){
    console.log(this.form.value.email);
    if(this.form.value.email == this.auth.login().email && this.form.value.password== this.auth.login().password){
      this.router.navigate(['home/allProducts'])

    localStorage.setItem('email',this.form.value.email)
    localStorage.setItem('password',this.form.value.password)
    }
    else{
      this.router.navigate(['home/login'])
    }
  }

}

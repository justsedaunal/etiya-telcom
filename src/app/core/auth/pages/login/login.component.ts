import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.success) {
        this.authService.saveToken(response);
      }
    });
  }

}

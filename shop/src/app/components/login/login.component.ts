import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import RegistrationService from '../../services/registration.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: RegistrationService,  private router: Router){}

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      const { email, password } = loginForm.value;
      const user = { email, password };
      this.authService.login(user).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = 'Your LOG IN template is not filled correctly!'
        },
      });
      
    }
  }
}

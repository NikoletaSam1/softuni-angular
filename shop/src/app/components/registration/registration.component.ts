import { Component } from '@angular/core';
import RegistrationService from '../../services/registration.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  emailAlreadyExists: boolean = false;

  constructor(private registrationService: RegistrationService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { username, fullName, email, age, password, confirmPassword } =
      form.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = {
      username,
      fullName,
      email,
      age,
      password,
    };

    this.registrationService.registerUser(user).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.emailAlreadyExists = true;
      },
    });
  }
}

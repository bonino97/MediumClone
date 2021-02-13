import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  focus1: any;
  focus2: any;
  focus3: any;

  registerForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  get formControls() {
    return this.registerForm.controls;
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.registerForm.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}

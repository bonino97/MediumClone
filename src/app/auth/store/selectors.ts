import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { AppStateInterface } from 'src/app/auth/types/appState.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);

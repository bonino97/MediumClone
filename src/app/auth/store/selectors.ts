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

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymusSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => !authState.isLoggedIn
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);

export const isLoading = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoading
);

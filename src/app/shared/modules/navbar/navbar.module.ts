import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from 'src/app/shared/modules/navbar/components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}

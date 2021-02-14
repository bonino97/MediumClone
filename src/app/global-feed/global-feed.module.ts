import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';

import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
})
export class GlobalFeedModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: 'conversations',
    component: ConversationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

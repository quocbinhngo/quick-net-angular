import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PageStyledComponent } from './components/shared/page-styled/page-styled.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { SigninFormComponent } from './components/forms/signin-form/signin-form.component';
import { TextFieldComponent } from './components/shared/text-field/text-field.component';
import { FormSectionComponent } from './components/shared/form-section/form-section.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversationSidebarComponent } from './components/conversations/conversation-sidebar/conversation-sidebar.component';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConversationItemComponent } from './components/conversations/conversation-item/conversation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    PageStyledComponent,
    SignupFormComponent,
    SigninFormComponent,
    TextFieldComponent,
    FormSectionComponent,
    ButtonComponent,
    ConversationSidebarComponent,
    ConversationPageComponent,
    ConversationItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

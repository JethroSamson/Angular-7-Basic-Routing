import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MypageListComponent } from './mypage-list/mypage-list.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
	{path: 'contacts' , component: ContactListComponent},
  {path: 'contact/:id' , component: ContactDetailComponent},
  {path: 'mypage', component: MypageListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post/:post_id', component: PostDetailComponent },
  {path: 'home/profile/:id', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ContactListComponent, ContactDetailComponent,
     MypageListComponent, HomeComponent, PostDetailComponent, ProfileComponent]
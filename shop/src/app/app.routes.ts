import { Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AddComponent } from './components/comments/add/add.component';
import { FoodComponent } from './components/food/food.component';
import { FoodDetailsComponent } from './components/food/food-details/food-details.component';
import { OrderComponent } from './components/order/order.component';
import { AddFoodComponent } from './components/food/add-food/add-food.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {path: '', component: CommentsComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'add/comment', component: AddComponent},
    {path: 'all/food', component: FoodComponent},
    {path: 'food/details/:id', component: FoodDetailsComponent},
    {path: 'order/review', component: OrderComponent},
    {path: 'food/add', component: AddFoodComponent},
    {path: 'food/edit/:id', component: AddFoodComponent},
    {path: 'profiles', component: ProfilesComponent},
    {path: 'food/search', component: SearchComponent}
    //todo error default page and auth guards and use fancy error handling and success handling messages
];

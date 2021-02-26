// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';
import { AddRestaurantComponent } from './views/pages/restraurant/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './views/pages/restraurant/update-restaurant/update-restaurant.component';
import { RestaurantListComponent } from './views/pages/restraurant/restaurant-list/restaurant-list.component';
import { RestaurantHomeDetailsComponent } from './views/pages/restraurant/restaurant-home-details/restaurant-home-details.component';
import { RestaurantDetailsComponent } from './views/pages/restraurant/restaurant-details/restaurant-details.component';

const routes: Routes = [
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{path: 'addRestaurant', component: AddRestaurantComponent},
			{ path: 'restUpdate/:restid', component: UpdateRestaurantComponent },
			{ path: 'restaurant', component: RestaurantListComponent },
			{ path: 'restDetails/:restid', component: RestaurantDetailsComponent },
			{ path: 'restHome', component: RestaurantHomeDetailsComponent },
			
			{
				path: 'user-management',
				loadChildren: () => import('app/views/pages/user-management/user-management.module').then(m => m.UserManagementModule),
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator',
				},
			},
			
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'restHome', pathMatch: 'full'},
			/* {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}, */
		],
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}

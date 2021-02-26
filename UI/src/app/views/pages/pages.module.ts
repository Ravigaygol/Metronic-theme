// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { AddRestaurantComponent } from './restraurant/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './restraurant/update-restaurant/update-restaurant.component';
import { RestaurantListComponent } from './restraurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restraurant/restaurant-details/restaurant-details.component';
import { RestaurantHomeDetailsComponent } from './restraurant/restaurant-home-details/restaurant-home-details.component';

@NgModule({
	declarations: [MyPageComponent, AddRestaurantComponent, UpdateRestaurantComponent, RestaurantListComponent, RestaurantDetailsComponent, RestaurantHomeDetailsComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
	],
	providers: []
})
export class PagesModule {
}

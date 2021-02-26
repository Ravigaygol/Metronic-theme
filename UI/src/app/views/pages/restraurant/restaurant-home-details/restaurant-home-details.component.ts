import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'kt-restaurant-home-details',
  templateUrl: './restaurant-home-details.component.html',
  styleUrls: ['./restaurant-home-details.component.scss']
})
export class RestaurantHomeDetailsComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;
  rest = new Restaurant();

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList() { /* Method getting all the active restaurants */
    this.restaurants = this.restaurantService.getAllRestaurant();
  }
  restaurantDetails(restid: number) {
    this.router.navigate(['restDetails', restid]);
  }

}

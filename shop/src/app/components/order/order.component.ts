import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../types/order';
import RegistrationService from '../../services/registration.service';
import { Food } from '../../../types/food';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  order: Order | null = null;
  userId: string | null;

  constructor(private orderService: OrderService, private auth: RegistrationService, private router: Router) {
    this.userId = auth.userid;
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    if (this.userId === null){
      return;
    }

    this.orderService.getAllFoodForOrder(this.userId).subscribe((data) => {
      this.order = data[0];
    });
  }

  addFoodToOrder(food: Food): void {
    if (this.userId === null){
      return;
    }
    this.orderService.addFoodToOrder(this.userId, food).subscribe(
      (updatedOrder) => {
        this.order = updatedOrder;
      },
      (error) => {
        console.error('Error adding food to order:', error);
      }
    );
  }

  removeFoodFromOrder(foodId: string): void {
    if (this.userId === null){
      return;
    }
    this.orderService.removeFoodFromOrder(this.userId, foodId).subscribe(
      (updatedOrder) => {
        this.order = updatedOrder;
      },
      (error) => {
        console.error('Error removing food from order:', error);
      }
    );
  }

  finishOrderAction(): void {
    //todo add sucsessful message here
    if (this.userId === null){
      return;
    }
    this.orderService.deleteOrder(this.userId).subscribe();
    this.router.navigate(['/']);
  }
}

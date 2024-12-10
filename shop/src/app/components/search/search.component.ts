import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Food } from '../../../types/food';
import { FoodService } from '../../services/food.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  foods: Food[] = [];
  @Output() filtered = new EventEmitter<Food[]>();

  constructor(private foodService: FoodService){}

  searchCriteria = {
    name: '',
    category: '',
    caloriesMin: 0,
    caloriesMax: 0
  };

  filteredFoods: Food[] = [];

  ngOnInit() {
    this.foodService.getFood().subscribe(data => {
      this.filteredFoods = data;
    })
  }

  onSubmit(){
    this.applyFilters();
  }

  applyFilters() {
    this.foodService.getFoodByFilters(this.searchCriteria.name, this.searchCriteria.category, this.searchCriteria.caloriesMin, 
      this.searchCriteria.caloriesMax).subscribe(data => {
        this.filteredFoods = data;
      })
      this.filtered.emit(this.filteredFoods);


    // this.foodService.getFood().subscribe(data => {
    //   this.foods = data;
    // })

    // this.filteredFoods = this.foods.filter(food => {
    //   return (
    //     (!this.searchCriteria.name || food.name.toLowerCase().includes(this.searchCriteria.name.toLowerCase())) &&
    //     (!this.searchCriteria.category || food.category.toLowerCase().includes(this.searchCriteria.category.toLowerCase())) &&
    //     (this.searchCriteria.caloriesMin === null || food.calories <= this.searchCriteria.caloriesMin) &&
    //     (this.searchCriteria.caloriesMax === null || food.calories >= this.searchCriteria.caloriesMax)
    //   );
    // });

    // this.filtered.emit(this.filteredFoods);
  }

}

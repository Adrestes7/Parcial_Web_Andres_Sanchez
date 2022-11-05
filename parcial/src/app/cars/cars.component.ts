import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Array<Car>;
  totalBrandsCars: Map<string, number> = new Map([])

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCarsList();
  }

  getCarsList(){
    this.carService.getCars().subscribe(cars =>{
      this.cars= cars;
      this.countBrandCars(cars);
    })
  }

  countBrandCars(cars:Array<Car>){
    let totalBrandsCars: Map<string, number> = new Map([]);
    cars.forEach(car=>{
      if(totalBrandsCars.has(car.marca)){
        totalBrandsCars.set(car.marca, totalBrandsCars.get(car.marca)!+1);
      } else{
        totalBrandsCars.set(car.marca, 1)
      }
    })
    this.totalBrandsCars = totalBrandsCars;
  }
}

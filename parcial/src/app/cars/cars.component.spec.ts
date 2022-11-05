import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { CarsComponent } from './cars.component';
import { Car } from './car';
import { By } from '@angular/platform-browser';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ CarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list 3 cars', () =>{
    const carTest=new Car(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string()
    );
    const carTest1=new Car(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string()
    );
    const carTest2=new Car(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string()
    );

    const cars: Car[] =[carTest, carTest1, carTest2];
    component.cars= cars;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#carsRows'))).toHaveSize(3);
    expect(fixture.debugElement.queryAll(By.css('.table-dark'))).toBeTruthy()

    
  })
});

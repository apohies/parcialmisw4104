import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoComponent } from './auto.component';
import { faker } from '@faker-js/faker';
import { Auto } from './auto';

describe('AutoComponent', () => {
  let component: AutoComponent;
  let fixture: ComponentFixture<AutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// prueba de enviar tres auto y se cree la tabla
describe('AutoComponent', () => {
  let component: AutoComponent;
  let fixture: ComponentFixture<AutoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
 
    for(let i = 0; i < 10; i++) {
      const auto = new Auto(
        faker.number.int(),
        faker.image.url(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.number.int()
  
      );
      component.autos.push(auto);
    }
    fixture.detectChanges();
    
  });
    
    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render 3 autos', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('tr').length).toBe(3);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProductosSwService } from 'src/app/services/productos-sw.service';
import { ProductosService } from 'src/api';
import { HttpClientModule } from '@angular/common/http';
import { routes } from 'src/app/app-routing.module';




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;



  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ProductosSwService, ProductosService],
      imports: [HttpClientModule]
    });


    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('crea el componente home', () => {
    expect(component).toBeTruthy();
  });




  it('comprobar ruta Home', () => {
    expect(routes).toContain( {path: 'home', component: HomeComponent});
  })




});

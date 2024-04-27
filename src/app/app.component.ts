import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoService } from './services/auto.service';
import { HttpClientModule } from '@angular/common/http';
import { Auto } from './models/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export  class AppComponent implements OnInit 
{
  title = 'parcialmisw4104';
  autos : Auto[] = [];
  marca : string = "Renault";
  marca2 : string = "Chevrolet";
  marca3 : string = "Nissan";
  constructor(private autoService : AutoService) { }

  ngOnInit(): void {
   this.loadAutos();

  
   
  }

  loadAutos(){
    this.autoService.getAutos().subscribe(data => {
      this.autos = data;
    });
  }

  contarAutos(mod: string){

    return this.autos.filter(auto => auto.marca === mod).length;
    };
  }

 
  
  


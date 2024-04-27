import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoService } from './services/auto.service';
import { Auto } from './models/auto';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './components/auto/auto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule,AutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export  class AppComponent implements OnInit 
{
  title = 'parcialmisw4104';
  autos : Auto[] = [];

  constructor() { }

  ngOnInit(): void {


  
   
  }


  }

 
  
  


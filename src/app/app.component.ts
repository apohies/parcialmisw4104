import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoService } from './services/auto.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export  class AppComponent implements OnInit 
{
  title = 'parcialmisw4104';

  constructor(private autoService : AutoService) { }

  ngOnInit(): void {
   this.loadAutos();
  }

  loadAutos(){
    this.autoService.getAutos().subscribe(data => {
      console.log(data);
    });
  }
}

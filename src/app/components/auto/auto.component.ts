import { Component } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.scss'
})
export class AutoComponent {

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
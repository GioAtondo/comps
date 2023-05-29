import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home-component',
  templateUrl: './mods-home-component.component.html',
  styleUrls: ['./mods-home-component.component.css']
})
export class ModsHomeComponentComponent implements OnInit{
  modalOpen = false;
  constructor(){

  }

  ngOnInit(){

  }
  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home-component',
  templateUrl: './mods-home-component.component.html',
  styleUrls: ['./mods-home-component.component.css']
})
export class ModsHomeComponentComponent implements OnInit{
  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is'},
    { title: 'Why is the orange sweet?', content: 'Because it was recently cut off the tree'},
    { title: 'What color is that cat', content: 'Orange Color!'}
  ];

  constructor(){

  }

  ngOnInit(){

  }
  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}

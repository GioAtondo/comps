import { Component , ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  constructor(private el: ElementRef){
    console.log(this.el.nativeElement);
  }

  ngOnInit() {
      document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(){
    this.el.nativeElement.remove();
  }
} 

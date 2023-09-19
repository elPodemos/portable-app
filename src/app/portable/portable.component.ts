import { Component, OnInit } from '@angular/core';
import { PortableService } from '../portable.service';
import { PortableInterface } from '../portable.interface';

@Component({
  selector: 'app-portable',
  templateUrl: './portable.component.html',
  styleUrls: ['./portable.component.css']
})
export class PortableComponent implements OnInit  {

  constructor(
  private portableService:PortableService
  ){

  }

  portables: PortableInterface[] | undefined;

  ngOnInit(): void {
    this.getPortable();
  }

  getPortable(){
    this.portableService.getAll().subscribe(data => {
      this.portables = data;

      console.log(this.portables);

    });
  }

}

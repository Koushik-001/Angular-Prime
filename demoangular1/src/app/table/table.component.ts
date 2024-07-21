import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, PaginatorModule,ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  tableData: People[] = [];
  cols: any[] = [];
  constructor() {}

  ngOnInit() {
    this.cols = [
      {
        field: 'firstname',
        header: 'First Name',
      },
      {
        field: 'lastname',
        header: 'Last Name',
      },
      {
        field: 'age',
        header: 'Age',
      },
    ];
    this.tableData = [
      {
        firstname: 'David',
        lastname: 'ace',
        age: '40',
      },
      {
        firstname: 'Ajne',
        lastname: 'west',
        age: '40',
      },
      {
        firstname: 'Mak',
        lastname: 'Lame',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '20',
      },
    ];
  }
  handleChange(event: any, field: any, myTab: any) {
    myTab.filter(event.target.value.toLowerCase(), field, 'contains');
  }
  changefun(event: any, myTab: any) {
    let val = event.target.value;
    myTab.filterGlobal(val, 'contains');
  }
  clear(table: any) {
    table.clear();
}
subfun(event:any){
  let var1 ={
    firstname:'Koushik',
    lastname:'Chava',
    age:'20'
  }
  this.tableData.push(var1)
  }
}

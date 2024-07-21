import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgApexchartsModule, NgFor],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss',
})
export class PieComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  chartoptions:any;
  constructor(){}
  data:any[]=[
    {
    series:[10,20,30,40,50],
    labels:['a','b','c','d','e'],
    chart:{
      type:'donut',
      width:300
    }
},
    {
    series:[60,70,80,90,100],
    labels:['f','g','h','i','j'],
    chart:{
      type:'donut',
      width:300
    }
},
    {
    series:[110,120,130,140,150],
    labels:['k','l','m','n','o'],
    chart:{
      type:'donut',
      width:300
    }
},
]
ngOnInit(){
  this.getChart(this.data)
}
    getChart(data:any){
    this.chartoptions =
    this.data.map(item=>({
series:item.series,
labels:item.labels,
chart:item.chart
    }))
    }
  optfun(data:any){
    this.data.map(item=>(
 item.series[item.series.length-1]+=10
  ))
this.getChart(this.data)
  }
}
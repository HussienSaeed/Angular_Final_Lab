import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  nameValue:string = ''
  ageValue:string = ''
  todosName:string[]=[]
  todosAge:string[]=[]
  flag:boolean = false
  flag2:boolean = false


  addStudent(){
    if(/^[a-zA-Z]{4,15}$/.test(this.nameValue) &&/^(18|19|[2-7][0-9]|80)$/.test(this.ageValue)){

      this.todosName.push(this.nameValue)


      this.todosAge.push(this.ageValue)
      console.log(this.todosAge);
      this.nameValue = ''
      this.ageValue = ''
    }
    else if(!/^[a-zA-Z]{4,15}$/.test(this.nameValue) &&/^(18|19|[2-7][0-9]|80)$/.test(this.ageValue)){
      this.flag = true
    }else if(/^[a-zA-Z]{4,15}$/.test(this.nameValue) && !/^(18|19|[2-7][0-9]|80)$/.test(this.ageValue)){
      this.flag2 = true
    }
      else{
        this.flag=true
        this.flag2=true
      }
  }
  validateName(){
    if(/^[a-zA-Z]{4,15}$/.test(this.nameValue)){
        this.flag=false
      }else{
        this.flag=true
      }
    }
  validateAge(){
    if(/^(18|19|[2-7][0-9]|80)$/.test(this.ageValue)){
        this.flag2=false
      }else{
        this.flag2=true
      }
    }
}

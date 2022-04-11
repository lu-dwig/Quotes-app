import { Component, OnInit } from '@angular/core';
import { Quotes } from '../qoute';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  tittle = 'Welcome To Tech Quotes'
  quotes:Quotes[] = [
    new Quotes (1,'Ludwig','Soft Skills ','The bottleneck is not coding skills, but what we call soft skills.','Ludwig Murimi',new Date(2022,4,9),0,0),
    new Quotes (2,'Valarie','Achieving success','The key to success for all coders is to be able to truly understand the client’s needs and how to meet those needs.','Valarie Nduku',new Date(2022,2,22),0,0),
    new Quotes (3,'Julia','Basics of Coding','Learning the basics of coding is the most critical skill for all developers.','Julia Mwangi',new Date(2022,3,18),0,0),
    new Quotes (4,'Wayne','Technology innovations','Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.','Wayne Musungu',new Date(2022,4,13),0,0),
    new Quotes (5,'Mercy','Misunderstanding Technology','If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.','Mercy Wairimu',new Date(2022,3,31),0,0),
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote:Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any,index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      } 
    }
  }
 
  displayInfo(index:number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit() {
  }
}

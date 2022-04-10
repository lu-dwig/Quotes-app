import { Component, OnInit } from '@angular/core';
import { Quote } from '../qoute';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  tittle = 'Welcome To Tech Quotes'
  quotes:Quote[] = [
    new Quote (1,'Ludwig','Soft Skills ','The bottleneck is not coding skills, but what we call soft skills.','Ludwig Murimi',new Date(2022,4,9),0,0),
    new Quote (2,'Valarie','Achieving success','The key to success for all coders is to be able to truly understand the client’s needs and how to meet those needs.','Valarie Nduku',new Date(2022,2,22),0,0),
    new Quote (3,'Julia','Basics of Coding','Learning the basics of coding is the most critical skill for all developers.','Julia Mwangi',new Date(2022,3,18),0,0),
    new Quote (4,'Wayne','Technology innovations','Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.',new Date(2022,4,13),0,0),
    new Quote (5,'Mercy','Misunderstanding Technology','If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.',new Date(2022,3,31),0,0),
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      } 
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit() {
  }

}

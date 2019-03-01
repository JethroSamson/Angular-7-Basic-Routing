import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){
    
    let contacts = [
     {id: 1,  first: 'Jethro', last: 'Samson', age: 20, email: 'jeth@gmail.com'},
     {id: 2,  first: 'Jhay', last: 'Thro', age: 12, email: 'jhay@gmail.com'},
     {id: 3,  first: 'Ping', last: 'Pong', age: 19, email: 'ping@gmail.com'},
     {id: 4,  first: 'Ying', last: 'Yang', age: 20, email: 'ying@gmail.com'}
   ];
    let users = [
      {id: 1, first: 'Jethro', last: 'Samson', email:'jethro@gmail.com', password: '123', desc: 'pogi'},
      {id: 2, first: 'Glenmar', last: 'Santos', email:'glen@gmail.com', password: '123', desc: 'pangit'},
      {id: 3, first: 'Dustin', last: 'Alpasar', email:'dustin@gmail.com', password: '123', desc: 'di pogi'},
      {id: 4, first: 'Jon', last: 'Balmaceda', email:'jon@gmail.com', password: '123', desc: 'INC'}
    ];
    let posts = [
      {id: 1, acct_id: 1, title: 'Lyft charged me $100 for throwing up in my drivers car on the way to the bar on NYE. I was sober at the time with my girl friend and neither of us threw up. What should I do?', email: 'jethro@gmail.com', content: 'North Carolina: Lyft has pictures of his stained car with food strewn about. Looks like possible throw up, but in now way was caused by us. Also some of the throw up was on the seat we were sitting directly on... His car was already a mess when he arrived. We would be late to the ball drop if we had chosen another ride. We were in the car for 6 minutes and had a nice conversation. 24 hours later I was charged $100. What can or should I do? Update: Lyft has informed me that the evidence the driver gave was enough to close the claim indefinitely. Also, the last email that they sent me said that my driver “Roy” (not my driver) filed the claim promptly.... Who the fuck is Roy and where is my fucking money! Looking in to get the info behind the photos. Still no reply from Lyft. Used my debit card and the bank said they may be able to challenge the charge. Will update soon with photos ', name: 'Jethro'},
      {id: 2, acct_id: 2, title: 'Nainit na Ulam', email: 'glen@gmail.com', content: 'pangilang init niyo na ng ulam simula nung bagong taon???', name: 'Glenmar'},
      {id: 3, acct_id: 3, title: 'ELI5: Why do some countries get their names translated and some don’t?', email: 'dustin@gmail.com', content: 'I’m from Puerto Rico, and Puerto Rico is always Puerto Rico, no matter what language you speak, but for example Japan isn’t called Japan there, it’s “Nippon” in Japanese or “Japón” in Spanish. United States of America gets translated to any language. So it’s not a matter of “Proper names don’t get translated”. So, like, why do some get translated and some don’t? Edit: Whoa so many interesting things! I almost just googled this, but instead posted here, and I’m glad I did. I’ve learned so much! Thanks everyone!!!', name: 'Dustin'},
      {id: 4, acct_id: 4, title: 'I created Juliet, an AI that could help you find love. AMA', email: 'jon@gmail.com', content: 'Hi, I’m Julian Alexander a 24 year old programmer and entrepreneur. For the past few months I’ve been building an AI matchmaker named Juliet to help you find your perfect match. My friends and I were tired of all the dating apps currently on the market, endlessly swiping with little to no results. I decided to take matters into my own hands and shake things up. Creating real relationships is a primary objective of Juliet, which is why she matches you with only one person at time based on compatibility. The catch is that she sets an expiration date with every match, meaning that you can only be with your partner until the time runs out. After each match Juliet learns from the interaction and finds you someone that you’re even more compatible with. This process continues until she ultimately finds you your perfect match. I’ve been a lurker for over 6 years, so it feels good to finally have something to share. I love talking about programming, business, and life, but feel free to ask me anything.', name: 'Jon'},
      {id: 5, acct_id: 1, title: 'sa;dlsakd', content: 'asd;asd;sak;dkas;kdas; dsadklaskdkmlasdl sladlkasmdlk asdkmsakdmksam;d as;dm;samd;as d;samd;msa;d klas dksadnasld asl dl asl dl asdl las dsadjnsldsa dlsadnlsa dlsa d' ,name: 'Jeth'}
      
    ];
    let comments = [
      {id: 1 , laman: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor dolore ipsum culpa quidem voluptas consectetur cupiditate molestias, temporibus vel iste mollitia! Ad ducimus adipisci officia maxime blanditiis quidem ratione?' , acctid: 1, post_id: 1 },
      {id: 2 , laman: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor dolore ipsum culpa quidem voluptas consectetur cupiditate molestias, temporibus vel iste mollitia! Ad ducimus adipisci officia maxime blanditiis quidem ratione?' , acctid: 2, post_id: 1 },
      {id: 3 , laman: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor dolore ipsum culpa quidem voluptas consectetur cupiditate molestias, temporibus vel iste mollitia! Ad ducimus adipisci officia maxime blanditiis quidem ratione?' , acctid: 3, post_id: 1 },
      {id: 4 , laman: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor dolore ipsum culpa quidem voluptas consectetur cupiditate molestias, temporibus vel iste mollitia! Ad ducimus adipisci officia maxime blanditiis quidem ratione?' , acctid: 4, post_id: 2 },
      {id: 5 , laman: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor dolore ipsum culpa quidem voluptas consectetur cupiditate molestias, temporibus vel iste mollitia! Ad ducimus adipisci officia maxime blanditiis quidem ratione?' , acctid: 5, post_id: 5 }
    ];
   return {contacts, posts, users, comments}; 
  }
}
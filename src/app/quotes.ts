export class Quotes {
    constructor(
      public id: number,
      public quote: string,
      public author: string,
      public name: string,
      public upvotes: number,
      public downvotes: number,
      public description:string,
    ) {
      this.id = id;
      this.quote = quote;
      this.author = author;
      this.name = name;
      this.upvotes = upvotes;
      this.downvotes = downvotes;
      this.description= description
      
    }
  }
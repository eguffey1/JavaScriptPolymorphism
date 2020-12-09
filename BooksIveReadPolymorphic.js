class BookPagesIveRead {
  pTotal() {
    return;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Textbook extends BookPagesIveRead {
  constructor(p,e = 50,n){
    super();
    this.total = p;
    this.picEstimate = e;
    this.name = n;
  }
  pTotal() {
    return this.total - this.picEstimate;
  }
}

class Novel extends BookPagesIveRead {
  constructor(p,n) {
    super();
    this.total = p;
    this.name = n;
  }
  pTotal() {
    return this.total;
  }
}

class GraphicNovel extends BookPagesIveRead {
  constructor(p,n) {
    super();
    this.total = p;
    this.name = n;
  }
  pTotal() {
    return this.total / 6;
  }
}

function totalPages(total) {
  return total.reduce((sum, book) => {
    if (book) {
      console.log(`Type: ${book.toString()} - Name: ${book.name} - Pages: ${book.pTotal()}`);
      return sum + book.pTotal()
    }
  }, 0);
}

const books = [new GraphicNovel(6, "Naruto"), new Textbook(450, 50, "Astronomy 1"), 
new Novel(526, "HP and the Goblet of Fire"), new GraphicNovel(194, "Dragonball Z"), new Textbook(1180, 40, "C++"),
new Novel(1442, "HP and the Deathly Hallows")];

console.log(totalPages(books));
interface Book {
  isbn: string;
  title: string;
  author: string;
}

interface NonBookItem {
  title: string;
  price: number;
}

interface Order {
  items: (Book | NonBookItem)[];
}
const orderHistory: Order[] = [
  {
    items: [
      { title: 'Gamecube', price: 94.95 },
      {
        isbn: '978-1491929483',
        title:
          'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
        author: 'Lindsay Bassett',
      },
    ],
  },
  {
    items: [{ title: 'Gamecube controller adaptor', price: 15.98 }],
  },
  {
    items: [
      {
        isbn: '978-1491929483',
        title:
          'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
        author: 'Lindsay Bassett',
      },
    ],
  },
];

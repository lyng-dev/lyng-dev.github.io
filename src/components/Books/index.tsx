import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

type Book = {
  title: string;
  author: string;
  completed?: string | undefined;
  link: string;
  rating?: number | undefined;
};
type BookList = Array<Book>;

export const Books = () => {
  const [books, setBooks] = useState<BookList>([]);

  const loadBooks = async () => {
    const data = await api<BookList>("/data/books.json");
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <h2>Currently reading</h2>
      <ul className="myList">
        {books &&
          books
            .filter((x) => !x.completed)
            .map((x) => (
              <li key={x.link}>
                <a href={x.link}>{x.title}</a>
              </li>
            ))}
      </ul>
      <h2>Finished</h2>
      <ul className="myList">
        {books &&
          books
            .filter((x) => x.completed)
            .map((x) => (
              <li key={x.link}>
                <a href={x.link}>{x.title}</a>
              </li>
            ))}
      </ul>
    </>
  );
};

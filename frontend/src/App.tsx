import React, { useCallback, useRef, useState } from 'react';
import Book from './components/Book'
import booksAPI from './services/books';

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [books, setBooks] = useState([]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { data } = await booksAPI.get(
        `/v1?q=${inputRef.current?.value}&limit=40`,
      );
      setBooks(data.results);
    },
    [inputRef],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Pesquisar</button>
      </form>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {books.map((book) => (
         <Book book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;

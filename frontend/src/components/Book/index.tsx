import React from 'react';

// import { Container } from './styles';

interface BookData {
  id: string;
  img_url: string;
  titulo: string;
}

interface Props {
  book: BookData;
}

function Book({ book }: Props) {
  return (
    <div
      key={book.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        width: 200,
        // background: 'red'
      }}>
      <img src={book.img_url} alt="book" style={{ width: 100, marginBottom: 5 }} />
      <span>{book.titulo}</span>
    </div>
  );
}

export default Book;

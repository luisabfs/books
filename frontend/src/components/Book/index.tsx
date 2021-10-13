import React from 'react';

import { Container } from './styles';

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
    <Container key={book.id}>
      <img src={book.img_url} alt="Book cover" />
      <span>{book.titulo}</span>
    </Container>
  );
}

export default Book;

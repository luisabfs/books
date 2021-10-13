import React, { useCallback, useRef, useState } from 'react';
import {FiSearch } from 'react-icons/fi';
import Book from '../../components/Book'
import booksAPI from '../../services/books';
import FlowersImage from '../../assets/flower.png'
import * as S from './styles';

const Search = () => {
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
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.InputText type="text" ref={inputRef} placeholder="Pesquise pelo nome do livro, autor, editora..." />
        <S.Button type="submit">
          <FiSearch size={24} />
        </S.Button>
      </S.Form>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          // margin: 20,
      }}>
        {books.length ? (
          books.map((book) => (
            <Book book={book} />
          ))
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={FlowersImage} />
            <span style={{fontSize: 26, marginTop: 10}}>
              Ainda não há livros a serem exibidos
            </span>

          </div>
        )}
      </div>
    </S.Container>
  );
};

export default Search;

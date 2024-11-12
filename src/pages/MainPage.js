import React, { useState } from "react";
import styles from "./MainPage.module.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import BookList from "../components/bookList/BookList";
import Image from "../img/Image";

const MainPage = () => {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (bookName.trim()) {
      setBooks([...books, bookName]);
      setBookName("");
    }
  };

  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <>
      <Image />
      <div className={styles.mainPage}>
        <h1>Добавить книгу</h1>
        <div className={styles.inputContainer}>
          <label>Название:</label>
          <Input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Введите название"
          />
          <Button onClick={handleAddBook}>Добавить</Button>
        </div>
        <BookList books={books} onDelete={handleDeleteBook} />
      </div>
    </>
  );
};

export default MainPage;

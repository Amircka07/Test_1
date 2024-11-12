import React from "react";
import styles from "./BookList.module.css";
import Button from "../button/Button";

const BookList = ({ books, onDelete }) => {
  return (
    <>
      <div>
        <h2>Название</h2>
        {books.map((book, index) => (
          <div key={index} className={styles.bookItem}>
            <span>{book}</span>
            <Button onClick={() => onDelete(index)} variant="danger">
              Удалить
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;

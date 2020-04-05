import React, { useState } from "react";

import Header from "../../../components/Header";
import "./BookList.scss";

const data = [
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  },
  {
    title: "Book1",
    img: "/signin-image.jpg"
  },
  {
    title: "Book2",
    img: "/signup-image.jpg"
  },
  {
    title: "Book3",
    img: "/signin-image.jpg"
  },
  {
    title: "Book4",
    img: "/signup-image.jpg"
  }
];

function BookList(props: any) {
  const [bookList, setLogin] = useState(data);

  return (
    <div className="book-list-container">
      <Header />
      <div className="book-list-content">
        {bookList.map((item, i) => {
          return (
            <div key={i} className="book-container">
              <h2>{item.title}</h2>
              <img src={item.img} alt="sing up" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;

import React, { useState } from "react";

import Header from "../../../components/Header";
import "./EditBook.scss";

const data: any = {
  title: "Book1",
  cover: ["/375943-alexfas01.jpg"],
  pages: [
    "https://www.holoweb.net/~liam/pictures/2007-12-17-pt-petre-trees/pages/img_8175-lonely-tree-in-winter/img_8175-lonely-tree-in-winter-q100-500x200.jpg",
    "/375943-alexfas01.jpg",
    "https://www.holoweb.net/~liam/pictures/2007-12-17-pt-petre-trees/pages/img_8175-lonely-tree-in-winter/img_8175-lonely-tree-in-winter-q100-500x200.jpg",
    "/signup-image.jpg"
  ]
};

function requestFullscreen(ele: any) {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  } else {
    console.log("Fullscreen API is not supported.");
  }
}

function EditBook(props: any) {
  let cityInput: any;

  const [book, setBook] = useState(data);
  const [editPage, setEditPage] = useState(data.cover);

  return (
    <div className="edit-book-container">
      <Header />
      <div className="edit-book-content">
        <div className="side-bar">
          <h2>{data.title}</h2>
          <img
            onClick={() => setEditPage(book.cover)}
            src={book.cover ? book.cover : "/signup-image.jpg"}
            className="cover-page"
            alt="sing up"
          />
          <div className="pages">
            {book.pages.map((item: any, i: any) => {
              return (
                <div
                  key={i}
                  onClick={() => setEditPage(item)}
                  className="page"
                  id="full-screen"
                >
                  <img src={item} alt="sing up" />{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="main">
          <div
            className="full-screen-background"
            onClick={() => requestFullscreen(cityInput)}
          >
            <img src="/fullscreen.ico" className="full-screen-button" alt="" />
          </div>
          <img
            src={editPage ? editPage : ""}
            ref={el => (cityInput = el)}
            className="edit-page"
            alt="sing up"
          />
        </div>
      </div>
    </div>
  );
}

export default EditBook;

import { useState } from "react";
import "./App.css";
import Book from "./components/book/Book";

function App() {
  const [bookData] = useState({
    img: "/poster.webp",
    author: "J. R. R. Tolkien",
    title: "The Lord of the Rings",
    desc: "The Lord of the Rings is a trilogy of epic high fantasy adventure films directed by Peter Jackson based on the novel The Lord of the Rings by the English author J. R. R. Tolkien.",
    actors: ["Elijah Wood", "John Rhys-Davies", "Orlando Bloom"],
  });
  return (
    <>
      <Book data={bookData} />
    </>
  );
}

export default App;

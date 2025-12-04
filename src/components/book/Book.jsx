import Btn from "../btn/Btn";
import Styles from "./Book.module.css";

const Book = ({ data }) => {
  const showData = () => {
    console.log(`Movie title - ${data.title}`);
    console.log("---------------------");
    data.actors.map((actor) => {
      console.log("Actor - ", actor);
    });
  };

  return (
    <div className={Styles.book}>
      <div
        className={Styles.book_image}
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <ul>
          {data.actors.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </div>
      <Btn showData={() => showData(data.title, data.actors)} />
    </div>
  );
};

export default Book;

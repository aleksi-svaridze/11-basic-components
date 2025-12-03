import Btn from "../btn/Btn";
import Styles from "./Book.module.css";

const Book = ({ data }) => {
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
      <Btn title={data.title} actors={data.actors} />
    </div>
  );
};

export default Book;

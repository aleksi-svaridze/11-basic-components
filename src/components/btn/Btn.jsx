function Btn({ title, actors }) {
  const showData = () => {
    console.log(`Movie title - ${title}`);
    console.log("---------------------");
    actors.map((actor) => {
      console.log("Actor - ", actor);
    });
  };
  return <button onClick={showData}>Read more..</button>;
}

export default Btn;

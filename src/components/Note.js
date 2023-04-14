import Notes from "../seeds/notes";

const Note = () => {
  const getCards = () => {
    return Notes.map((card) => {
      return (
        <div className="note" key={card.key}>
          <h1>{card.title}</h1>
          <p>{card.content} </p>
        </div>
      );
    });
  };

  return <div><div>{getCards()}</div>
        </div>;
};

export default Note;

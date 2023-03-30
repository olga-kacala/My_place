import classes from "./SingleCard.module.css";

export const SingleCard = ({ card, handleChoice, flipped, disabled }):JSX.Element => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className={classes ["card"]}>
      <div className={
      flipped 
      ? classes["flipped"] 
      : classes [""]
      }>
        <img className={classes ["front"]} alt="Card Front" src={card.src} />
        <img
          className={classes ["back"]}
          alt="Card back"
          src={"/img/cover.png"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

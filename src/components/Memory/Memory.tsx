import { useState, useEffect } from 'react';
import classes from './Memory.module.css';
import { SingleCard } from "./SingleCard";
import { Card } from '../Providers';

const cardImages = [
    { src: "/img/Pola.png", matched: false },
    { src: "/img/cactus.png", matched: false },
    { src: "/img/banana.png", matched: false },
    { src: "/img/noisyPola.png", matched: false },
    { src: "/img/cat.png", matched: false },
    { src: "/img/catInGlasses.png", matched: false },
  ];


export const Memory = (): JSX.Element => {

const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);
	
	return (
		<div className={classes ["App"]}>
			<h1>Memory Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className={classes["cardGrid"]}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns:{turns}</p>
		</div>
	);
};


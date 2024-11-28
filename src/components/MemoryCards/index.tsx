import { FC, MouseEvent, useEffect, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import { v4 as uuidv4 } from "uuid";

type Suit = "spades" | "diamonds" | "hearts" | "clubs";

type Card = {
  id: string;
  value: number;
  suit: Suit;
};

type Pair = [Card | null, Card | null];

const SuitMap = {
  hearts: "♥️",
  clubs: "♣️",
  diamonds: "♦️",
  spades: "♠️",
};

const cards = [] as Card[];

const createCards = () => {
  for (let i = 1; i <= 13; i++) {
    ["spades", "diamonds", "hearts", "clubs"].forEach((suit) => {
      cards.push({
        value: i,
        suit: suit as Suit,
        id: uuidv4(),
      });
    });
  }
};

const pickCard = () => {
  return cards[Math.floor(Math.random() * cards.length)];
};

createCards();

const pairs = [] as Pair[];

for (let i = 0; i < 8; i++) {
  const card = pickCard();
  pairs.push([card, { ...card, id: uuidv4() }]);
}

// extract from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array: Card[]) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const pairToCards = (pairs: Pair[]) => {
  const cards = [] as Card[];
  pairs.forEach((p) => {
    cards.push(p[0] as Card);
    cards.push(p[1] as Card);
  });

  return cards;
};

const gameCards = pairToCards(pairs);

const shuffledCards = shuffleArray(gameCards);

// const useCounterStore = create<State>((set) => ({
//   counter: 0,
//   start: false,
//   increase: () => set((state) => ({ counter: state.counter + 1, start: true })),
//   decrease: () =>
//     set((state) => ({
//       counter: state.counter - 1,
//       start: true,
//     })),
// }));

type Props = {
  cards?: Card[];
};

const sameCard = (card1: Card, card2: Card) => {
  return card1.value === card2.value && card1.suit === card2.suit;
};

const MemoryCards: FC<Props> = ({ cards = shuffledCards }) => {
  const [pair, setPair] = useState<Pair>([null, null]);
  const [found, setFound] = useState([] as Card[]);

  const handleClick = (e: MouseEvent, c: Card) => {
    if (pair[0] === null) {
      setPair([c, null]);
    } else {
      setPair([pair[0], c]);
    }
  };

  useEffect(() => {
    if (found.length === 8) {
      alert("Win!");
    }
  }, [found]);

  useEffect(() => {
    if (pair?.length === 2 && pair[1] !== null && pair[0] !== null) {
      if (pair[0].value === pair[1].value) {
        //@ts-ignore
        setFound((prev) => [...prev, pair[0]]);
      }

      setTimeout(() => {
        setPair([null, null]);
      }, 500);
    }
  }, [pair]);

  return (
    <div className="mx-auto w-[800px] grid grid-cols-4  gap-2">
      {cards.map((c, i) => {
        return (
          <div key={i} className="basis-[200px]">
            <ReactFlipCard
              flipByProp={
                c.id === pair[0]?.id ||
                c.id === pair[1]?.id ||
                !!found.find((f) => sameCard(c, f))
              }
              frontCss="w-full h-full"
              onClick={(e) => handleClick(e, c)}
              frontComponent={
                <div className="w-[200px] cursor-pointer border border-black flex justify-center items-center h-full">
                  Memory
                </div>
              }
              flipTrigger="onClick"
              backComponent={
                <div className="w-[200px] border border-black flex justify-center items-center h-full">
                  {c.value}
                  {SuitMap[c.suit]}
                </div>
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MemoryCards;

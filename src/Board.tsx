import React from 'react'
import Cardcomp from './components/card';

function Board() {
    // Types for reference
type CardType = {
 id: number;
 type: 'regular' | 'wildcard' | 'trap';
 value: string;
 isFlipped: boolean;
 isMatched: boolean;
};

// Sample initial state
const initialState = {
 cards: [],
 flippedCards: [],
 matches: 0,
 mismatches: 0,
 timeRemaining: 180,
 gameStatus: 'idle' as 'idle' | 'playing' | 'finished'
};

const cards: CardType[] = [
  {
    id: 1,
    type:"regular",
 value: '',
 isFlipped: false,
 isMatched: false
  },
  {
    id: 2,
    type:"regular",
    value: '',
    isFlipped: false,
   isMatched: false
  },
  {
    id:3 ,
    type:"wildcard",
 value: '',
 isFlipped: false,
 isMatched: false
  },
  {
    id: 1,
    type:"trap",
 value: '',
 isFlipped: false,
 isMatched: false
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Fliped":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
  return (
    <div>
      {
        cards.map((item, index) => (
        <Cardcomp />
        ))
      }
    </div>
  )
}

export default Board
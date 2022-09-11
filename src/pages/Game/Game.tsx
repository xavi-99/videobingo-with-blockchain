import Card from "./../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import React, { useState } from "react";

const totalNumbers: number = 99;
const timerPerNumberRelease: number = 5000;

const Game: React.FC = () => {
  const [bingoNumbers, setBingoNumber] = useState([0]);

  const GenerateRandomNumber = (): void => {
    setBingoNumber((bingoNumbers) => [
      ...bingoNumbers,
      Math.floor(Math.random() * totalNumbers),
    ]);
  };
  const ResetBingoNumbers = (): void => {
    setBingoNumber([]);
  };
  const GenerateNewBingoNumbers = (): void => {
    ResetBingoNumbers();
    for (let i = 0; i < totalNumbers; i++) {
      GenerateRandomNumber();
    }
  };

  const StartGame = () => {
    GenerateNewBingoNumbers();
  };

  return (
    <Layout>
      <div className='flex justify-center'>
        <button onClick={StartGame}>Start Game</button>
        <Card
          numbers={[1, 2, 3, 23, 56, 75, 34, 22, 43, 5, 6, 53, 94, 54, 96, 64]}
          selectedNumbers={bingoNumbers}
          id={0}
        />
      </div>
    </Layout>
  );
};

export default Game;

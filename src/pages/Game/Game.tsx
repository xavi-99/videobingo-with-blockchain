import Card from "./../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import React from "react";
const Game: React.FC = () => {
  return (
    <Layout>
      <div className='flex justify-center'>
        <Card
          numbers={[1, 2, 3, 23, 56, 75, 34, 2, 3, 5, 6, 3, 4, 54, 6, 64]}
          id={0}
        />
      </div>
    </Layout>
  );
};

export default Game;

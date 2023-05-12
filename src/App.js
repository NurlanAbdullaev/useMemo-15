import { useState } from "react";
import { Header } from "./components/header/Header";
import { MealSummary } from "./components/meal-summary/MealSummary";
import { Meals } from "./components/meals/Meals";
import { Basket } from "./components/backet/Basket";
import CardProvider from "./store/cart-context";
import { useCounter } from "./hoks/counter";
import styled from "styled-components";
import { Button } from "./components/UI/Button";

function App() {
  const [toggle, setToggle] = useState(false);
  const { count, inc, dec } = useCounter();

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <CardProvider>
      <MiniContainer>
        <H1>
          <Button onClick={inc}>plus</Button>
          {count}
          <Button onClick={dec}>mines</Button>
        </H1>
      </MiniContainer>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={toggleHandler} />}
    </CardProvider>
  );
}

export default App;
const MiniContainer = styled.div`
  display: flex;
`;
const H1 = styled.h1`
  display: flex;
`;

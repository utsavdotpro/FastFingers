import React from "react";
import Input from "../../components/Input";
import DSlider from "../../components/DSlider";
import Text from "../../components/Text";
import CardContainer from "../../containers/CardContainer";
import Button from "../../components/Button";

function Home() {
  return (
    <CardContainer>
      <Text size="4xl" bold="true" align="center">
        Hi there!
      </Text>

      <br />

      <Text size="xl" color="muted" bold="true" align="center">
        My name is 'awesome', but you can call me
      </Text>

      <br />
      <br />

      <div className="md:w-3/5 w-full">
        <Input placeholder="Enter Your Name" />
        <br />
        <br />
        <DSlider />
      </div>

      <br />
      <br />

      <Button brand="success">Start Game</Button>
    </CardContainer>
  );
}

export default Home;

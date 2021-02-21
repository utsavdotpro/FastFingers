import React, { useState } from "react";
import Input from "../../components/Input";
import DSlider from "../../components/DSlider";
import Text from "../../components/Text";
import CardContainer from "../../containers/CardContainer";
import Button from "../../components/Button";
import GridContainer from "../../containers/GirdContainer";

import Snackbar, { useSnackbar } from "../../components/Snackbar";

export default function Home() {
  const [isSnackbarShown, showSnackbar] = useSnackbar(3000);

  const handleStartGame = () => {
    showSnackbar();
  };

  return (
    <GridContainer>
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

        <Button brand="success" onClick={handleStartGame}>
          Start Game
        </Button>

        <Snackbar isShown={isSnackbarShown}>
          <b className="text-yellow-400">Warning: </b> You have a name, don't
          you?!
        </Snackbar>
      </CardContainer>
    </GridContainer>
  );
}

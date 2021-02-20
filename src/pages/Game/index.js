import React from "react";
import CardContainer from "../../containers/CardContainer";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import GridContainer from "../../containers/GirdContainer";

function Game() {
  return (
    <GridContainer>
      <CardContainer>
        <Word>INCEPTION</Word>

        <br />

        <Text size="xl" color="muted" bold="true" align="center">
          NEXT
        </Text>

        <br />
        <br />

        <div className="md:w-3/5 w-full">
          <Input placeholder="Enter Your Name" />
          <br />
          <br />
          <Timer />
        </div>
      </CardContainer>
    </GridContainer>
  );
}

export default Game;

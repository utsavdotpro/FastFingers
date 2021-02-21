import React from "react";
import CardContainer from "../../containers/CardContainer";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";

function Game() {
  return (
    <GridContainer>
      <CardContainer>
        <Score>00 : 00</Score>

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

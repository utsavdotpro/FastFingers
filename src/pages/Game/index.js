import React from "react";
import CardContainer from "../../containers/CardContainer";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Timer from "../../components/Timer";

function Game() {
  return (
    <CardContainer>
      <Text size="4xl" bold="true" align="center" className="tracking-widest">
        INCEPTION
      </Text>

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
  );
}

export default Game;

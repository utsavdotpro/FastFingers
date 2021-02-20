import React from "react";
import CardContainer from "../../containers/CardContainer";
import Input from "../../components/Input";
import DSlider from "../../components/DSlider";
import Text from "../../components/Text";
import { Range } from "rc-slider";

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
        <Range
          min={0}
          max={10}
          defaultValue={[3, 10]}
          handleStyle={[{ display: "none" }, { display: "none" }]}
        />
      </div>
    </CardContainer>
  );
}

export default Game;

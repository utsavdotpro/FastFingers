import React from "react";
import CardContainer from "../../containers/CardContainer";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import GridContainer from "../../containers/GirdContainer";

import Score from "./containers/Score";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import Snackbar from "../../components/Snackbar";
import { useParams } from "react-router-dom";

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();

  return (
    <GridContainer
      Left={<LeftContainer player={player} />}
      Right={<RightContainer />}
    >
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
          <Timer time={3000} />
        </div>

        <Snackbar isShown>
          Use <b className="text-yellow-400">Left</b>{" "}
          <b className="text-green-400">Index</b> Finger
        </Snackbar>
      </CardContainer>
    </GridContainer>
  );
}

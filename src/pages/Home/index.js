import React from "react";
import Input, { useInput } from "../../components/Input";
import DSlider, {
  useDifficultyMark,
  getDifficultyForMark,
} from "../../components/DSlider";
import Text from "../../components/Text";
import CardContainer from "../../containers/CardContainer";
import Button from "../../components/Button";
import GridContainer from "../../containers/GirdContainer";
import Axios from "axios";

import Snackbar, { useSnackbar } from "../../components/Snackbar";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const [difficultyMark, handleDifficultyChange] = useDifficultyMark(1);
  const [isSnackbarShown, showSnackbar] = useSnackbar(2000);

  const handleStartGame = () => {
    if (name === "") showSnackbar();
    else
      history.push(`/game/${getDifficultyForMark(difficultyMark).key}/${name}`);
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
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Your Name"
          />

          <br />
          <br />

          <Input
            type={"email"}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
            autoFocus={false}
          />

          <br />
          <br />

          <Input
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Your Password"
            autoFocus={false}
          />

          <br />
          <br />

          <DSlider value={difficultyMark} onChange={handleDifficultyChange} />
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

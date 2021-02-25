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

import Snackbar, {
  useSnackbar,
  buildErrorMessage,
  buildSuccessMessage,
  buildWarningMessage,
} from "../../components/Snackbar";

import { useHistory } from "react-router-dom";
import PillsGroup, { usePill } from "../../components/PillsGroup";
import API from "../../utils/apis";

export default function Home({ setAuthToken }) {
  const history = useHistory();

  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const [difficultyMark, handleDifficultyChange] = useDifficultyMark(1);
  const [pillIndex, setPillIndex] = usePill(0);

  const { message, isShown: isSnackbarShown, show: showSnackbar } = useSnackbar(
    "",
    2000
  );

  const validateParams = () => {
    if (pillIndex !== 0 && name === "") {
      showSnackbar(buildWarningMessage("Name enter, you must!"));
      return false;
    }

    if (email === "") {
      showSnackbar(buildWarningMessage("Email enter, you must!"));
      return false;
    }

    if (password === "") {
      showSnackbar(buildWarningMessage("Password enter, you must!"));
      return false;
    }

    return true;
  };

  const handleStartGame = () => {
    if (!validateParams()) return;

    const request = {
      name,
      email,
      password,
    };

    if (pillIndex === 0) {
      // + Login

      API.players
        .login(request)
        .then(({ data }) => {
          showSnackbar(buildSuccessMessage("Successfully logged in, you are!"));

          setAuthToken(data.accessToken);

          history.push(`/game/${getDifficultyForMark(difficultyMark).key}`);
        })
        .catch((err) => showSnackbar(buildErrorMessage(err.response.data)));
    } else {
      // + Register

      API.players
        .register(request)
        .then(() => {
          showSnackbar(
            buildSuccessMessage("Successfully registered, you are!")
          );
          setPillIndex(0);
        })
        .catch((err) => showSnackbar(buildErrorMessage(err.response.data)));
    }
  };

  return (
    <GridContainer>
      <CardContainer>
        <Text size="4xl" bold="true" align="center">
          Welcome!
        </Text>

        <br />

        <Text size="xl" color="muted" bold="true" align="center">
          Ready to face the challenge, are you?
        </Text>

        <br />
        <br />

        <PillsGroup
          pills={["Login", "Register"]}
          activeIndex={pillIndex}
          onPillChange={setPillIndex}
        />

        <br />

        <div className="md:w-3/5 w-full">
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            className="mb-3"
            hidden={pillIndex === 0}
          />

          <Input
            type={"email"}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
            autoFocus={false}
            className="mb-3"
          />

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

        <Snackbar isShown={isSnackbarShown}>{message}</Snackbar>
      </CardContainer>
    </GridContainer>
  );
}

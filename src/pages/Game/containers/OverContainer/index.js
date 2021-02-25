import React from "react";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
function OverContainer({ onGameRestart = () => {} }) {
  return (
    <div className="text-center">
      <Text size="4xl" bold align="center">
        Game Over!
      </Text>

      <br />

      <Button brand="yellow-400" onClick={onGameRestart}>
        Restart
      </Button>
    </div>
  );
}

export default OverContainer;

import React from "react";
import Text from "../../../../components/Text";

import Button from "./../../../../components/Button";

import imgUser from "./../../../../assets/images/defaultUser.png";

function LeftContainer() {
  return (
    <div className="pl-10 py-10">
      <div className="rounded-xl bg-primary p-5 flex items-center flex-col justify-center">
        <img src={imgUser} alt="" className="w-16 h-16 object-cover" />
        <Text size="lg" align="center" bold className="my-4">
          Utsav Barnwal
        </Text>
        <Button brand="error" color="white">
          Quit
        </Button>
      </div>
    </div>
  );
}

export default LeftContainer;

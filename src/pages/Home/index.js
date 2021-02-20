import React from "react";
import Input from "../../components/Input";
import DSlider from "../../components/DSlider";
import Text from "../../components/Text";

function Home() {
  return (
    <div className="rounded-xl bg-container p-10 h-full w-full flex items-center flex-col justify-center">
      <Text size="4xl" bold="true">
        Hi there!
      </Text>
      <br />
      <Text size="xl" color="muted" bold="true">
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
    </div>
  );
}

export default Home;

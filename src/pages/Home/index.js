import React from "react";
import Text from "../../components/Text";

function Home() {
  return (
    <div className="text-white rounded-xl bg-container p-5 h-full w-full flex items-center flex-col">
      <Text size="xl" bold="true" className="mt-10">
        00 : 00
      </Text>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Text size="4xl" bold="true">
        Hi there!
      </Text>
      <br />
      <Text size="xl" color="muted" bold="true">
        Ready to begin your challenge?
      </Text>
    </div>
  );
}

export default Home;

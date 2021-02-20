import React from "react";
import Text from "../../components/Text";

function Home() {
  return (
    <div className="text-white shadow-2xl bg-primary-dark rounded-xl p-5 h-full w-full flex items-center flex-col justify-center">
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

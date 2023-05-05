import React from "react";
import View from "../../Common/View/View";
import Heading from "../../Common/Heading/Heading";
import Flex from "../../Common/Layout/Flex";
import Image from "../../Common/Image/Image";
import Navbar from "./shared/Navbar";

const LandingPage = () => {
  return (
    <View elementType="header" backgroundColor="#edc" height="100vh">
      <Navbar backgroundColor="#fff" height="7em" position="fixed" top="1em" left="1em" right="1em" pill>
        <div className="links">
          <span className="home">
            <a href="#top">Home</a>
          </span>
        </div>
      </Navbar>
      <Flex justifyContent="space-between">
        <Heading level={1} alignSelf="center" marginLeft="1em">Landing Page</Heading>
        <Image
          src="https://picsum.photos/800/800"
          width="50%"
          height="100vh"
        />
      </Flex>
    </View>
  );
};

export default LandingPage;

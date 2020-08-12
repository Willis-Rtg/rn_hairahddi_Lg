import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  /* border-radius: 20px; */
  /* transform: scale(1); */
`;
const Text = styled.Text``;

const Slide = ({ uri }) => {
  return (
    <Wrapper style={{ overflow: "hidden" }}>
      <Image source={{ uri }} resizeMode="contain" />
    </Wrapper>
  );
};

export default Slide;

import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  transform: scale(1.2, 1.2);
`;
const Text = styled.Text``;

const Slide = ({ uri }) => {
  return (
    <Wrapper>
      <Image source={{ uri }} resizeMode="contain" />
    </Wrapper>
  );
};

export default Slide;

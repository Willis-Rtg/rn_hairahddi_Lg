import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Wrapper = styled.View`
  flex-direction: row;
`;
const Text = styled.Text``;

const Navigation = ({ navigation }) => {
  console.log("Navigation -> navigation", navigation);
  return (
    <Wrapper>
      <TouchableOpacity>
        <Text>hello</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Navigation;

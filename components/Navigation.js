import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HairCut from "../assets/icons/HairCut";
import Clinic from "../assets/icons/Clinic";
import Clinic2 from "../assets/icons/Clinic2";
import Deying from "../assets/icons/Deying";
import Dryer from "../assets/icons/Dryer";
import Perm from "../assets/icons/Perm";
import Shampoo2 from "../assets/icons/Shampoo2";
import Shampoo3 from "../assets/icons/Shampoo3";



const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
const View = styled.View`
  background-color: pink;
  border-radius: 20px;
`;
const Text = styled.Text``;

const Navigation = () => {
  return (
    <Wrapper>
      <View>
        <TouchableOpacity>
          <HairCut style={{ width: "35px", height: "35px" }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Deying style={{ width: "35px", height: "35px" }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Dryer style={{ width: "35px", height: "35px" }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Perm style={{ width: "35px", height: "35px" }} />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Shampoo2 style={{ width: "35px", height: "35px" }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Clinic style={{ width: "35px", height: "35px" }}/>
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Clinic2 style={{ width: "35px", height: "35px" }} />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Navigation;

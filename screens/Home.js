import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../components/Slide";
import { Dimensions } from "react-native";
import Navigation from "../components/Navigation";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Wrapper = styled.View`
  background-color: white;
  flex: 1;
  align-items: center;
`;
const SwiperWrapper = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;
const Section = styled.View`
  flex: 1;
  /* background-color: olive; */
`;
const NavigationWrap = styled.View`
  margin: 15px 0;
`;

const Text = styled.Text``;

export default () => (
  <Wrapper>
    <SwiperWrapper>
      <Swiper loop={true} controlsEnabled={false} timeout={2}>
        <Section>
          <Slide uri="https://blogpfthumb-phinf.pstatic.net/MjAxNzA1MDhfMTMw/MDAxNDk0MjEzODI1MTk2.kv_bC92TwpHZ9gigz5v2URknWBtb1l0x_PfgD0-2ANIg.l7AP6LsguPUaSiuHfFLxJonssTPB-u3X2MBUoiH_DnMg.JPEG.inkyoung91/%25BE%25D7%25C0%25DA.JPG" />
        </Section>
        {/* <Section>
          <Text>Home2</Text>
        </Section> */}
      </Swiper>
    </SwiperWrapper>
    <NavigationWrap>
      <Navigation></Navigation>
    </NavigationWrap>
  </Wrapper>
);

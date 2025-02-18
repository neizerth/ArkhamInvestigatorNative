import { View } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container: typeof View = styled(View)`
  
`

export const List: typeof ScrollView = styled(ScrollView)
  .attrs({
    contentContainerStyle: {
      gap: '10px'
    }
  })`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  `
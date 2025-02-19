import { Pressable, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { InvestigatorDetailSelectCard } from "../FactionCard";
import { color } from "@shared/config";

export const Container: typeof View = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

export const Content: typeof View = styled(View)`
  width: 100%;
  max-width: 500px;
  padding: 10px;
`

export const Sections: typeof View = styled(View)
  .attrs({
    contentContainerStyle: {
      gap: '10px'
    }
  })`
    gap: 10px;
  `

export const Card: typeof InvestigatorDetailSelectCard = styled(InvestigatorDetailSelectCard)`

`
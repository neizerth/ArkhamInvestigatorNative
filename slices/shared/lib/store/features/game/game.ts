import { createSlice } from '@reduxjs/toolkit';
import type { InvestigatorDetails, Nullable, SelectedInvestigator } from '@shared/model';
import { createSliceState } from 'redux-toolkit-helpers';
import reducers from './game.reducers'

export type IGameState = {
  selectedInvestigators: SelectedInvestigator[]
  currentInvestigatorDetails: Nullable<InvestigatorDetails>
}

const initialState: IGameState = {
  selectedInvestigators: [],
  currentInvestigatorDetails: null
}

const state = createSliceState(initialState);

export const game = createSlice({
  name: 'game',
  ...state,
  reducers: {
    ...reducers,
    ...state.reducers
  }
});

export const {
  setSelectedInvestigators,
  setCurrentInvestigatorDetails,
  setInvestigatorSkin,
  setInvestigatorVariant,
} = game.actions;

export const {
  selectSelectedInvestigators,
  selectCurrentInvestigatorDetails,
} = game.selectors;

export default game.reducer;
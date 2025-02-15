import { createSelector } from "@reduxjs/toolkit";
import { selectInvestigatorMedia } from "./investigatorMedia";
import type { Story } from "@shared/model";
import type { Investigator as InvestigatorMedia } from "arkham-investigator-data";
import { selectStories } from "../stories";
import { prop, propEq } from "ramda";

export const selectAvailableInvestigators = createSelector(
  [
    selectStories,
    selectInvestigatorMedia
  ],
  (stories: Story[], media: InvestigatorMedia[]) => {
    const codes = media.map(prop('code'));

    const mapStory = (story: Story) => 
      story.investigators.map(investigator => ({
        investigator,
        media: media.find(
          propEq(investigator.code, 'code')
        ),
        story,
      })
    )

    return stories
      .flatMap(mapStory)
      .filter(
        ({ investigator }) => codes.includes(investigator.code)
      )
  }
);
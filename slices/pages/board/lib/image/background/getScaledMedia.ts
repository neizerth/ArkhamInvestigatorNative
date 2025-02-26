import type { HeaderLayout } from "@pages/board/model"
import { scaleBox, scaleBoxPosition } from "@shared/lib"
import type { Box, InvestigatorPicture } from "@shared/model"
import { getMediaData } from "./getMediaData"
import { coverMediaBox } from "./coverMediaBox"
import { MAX_PORTRAIT_FACE_SIZE } from "@pages/board/config"

export type GetBackgroundMediaOptions = {
  layout: HeaderLayout
  box: Box
  picture: InvestigatorPicture
}

export const getScaledMedia = ({
  view,
  picture,
  layout
}: GetBackgroundMediaOptions) => {
  const { image } = picture;
  const { face } = image;

  if (!face) {
    return null;
  }

  // const widthScale = 
  const scale = MAX_PORTRAIT_FACE_SIZE * layout.height / 100;

  
}

import { selectSelectedInvestigators, useAppDispatch, useAppSelector } from '@shared/lib';
import * as C from './StartButton.components';
import { getInvestigatorImageUrl } from '@shared/api/getInvestigatorImageUrl';
import type { SelectedInvestigator } from '@shared/model';
import { useCallback } from 'react';
import { startGame } from '../../lib';
import { TICK_PATTERN } from '@features/haptic';

const getImageSource = ({
  code
}: SelectedInvestigator) => ({
  uri: getInvestigatorImageUrl(code, 'square')
});

export const StartButton = () => {
  const dispatch = useAppDispatch();
  const investigators = useAppSelector(selectSelectedInvestigators);

  const start = useCallback(() => {
    dispatch(startGame());
  }, [dispatch])

  return (
    <C.Container 
      onPress={start} 
      pressHapticPattern={TICK_PATTERN}
    >
      <C.Content>
        <C.Investigators>
          {investigators.map(item => (
            <C.InvestigatorImage
              key={item.code}
              source={getImageSource(item)}
            />
          ))}
        </C.Investigators>
        <C.Text>Start</C.Text>
        <C.Icon icon="right-arrow"/>
      </C.Content>
    </C.Container>
  );
}
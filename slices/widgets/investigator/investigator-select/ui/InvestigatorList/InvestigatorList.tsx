import type { InvestigatorDetails } from '@shared/model';
import { InvestigatorPreviewMemo as InvestigatorPreview, type InvestigatorPreviewProps } from '@widgets/investigator/investigator-preview';
import { 
  includesBy,
  selectSelectedInvestigators,
  useAppSelector, 
} from '@shared/lib';
import { useCallback } from 'react';
import { propEq } from 'ramda';
import { Container } from './InvestigatorList.components';
import type { FlatListProps } from 'react-native';

type OmitProps = 'data' | 'key' | 'numColumns' | 'renderItem' | 'keyExtractor';

export type InvestigatorListProps = 
  Omit<FlatListProps<InvestigatorDetails>, OmitProps> & {
    data: InvestigatorDetails[]
    onChange: (item: InvestigatorDetails) => void
  }

export const InvestigatorList = ({
  data,
  onChange,
  ...props
}: InvestigatorListProps) => {
  const toggleSelected = useCallback(
    (item: InvestigatorDetails) => () => onChange(item), 
    [onChange]
  )

  return (
    <Container {...props}>
      {data.map(item => (
        <InvestigatorListItem
          key={item.investigator.code}
          onPress={toggleSelected(item)}
          investigator={item.investigator}
          media={item.media}
        />
      ))}
    </Container>
  )
}

export const InvestigatorListItem = (props: InvestigatorPreviewProps) => {

  const selectedInvestigators = useAppSelector(selectSelectedInvestigators);

  const { investigator } = props;
  const selected = includesBy(
    propEq(investigator.code, 'code'), 
    selectedInvestigators
  )
  return (
    <InvestigatorPreview 
      {...props}
      selected={selected}
    />
  )
}
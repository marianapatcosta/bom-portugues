import styled from 'styled-components'
import { Checkbox } from '@/components'
import { StyledTitle as StyledTitleDefault } from '@/themes/global-styles'

export const StyledTitle = styled(StyledTitleDefault)`
  margin-bottom: 0.5rem;
`

export const StyledCardWrapper = styled.div`
  position: relative;
  width: max-content;
  margin: 0 auto;

  > button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    padding-left: 0.15rem;
    font-weight: 400;
    font-size: 150%;
  }
`

export const StyledNoData = styled.p`
  text-align: center;
  margin-top: 3.5rem;
  font-size: 1105;
  font-style: italic;
`

export const StyledCheckbox = styled(Checkbox)`
  margin: 1rem auto;
  width: max-content;
`

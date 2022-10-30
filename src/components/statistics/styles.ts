import styled from 'styled-components'

export const StyledStatistics = styled.div`
  width: 100%;
`

export const StyledStatisticsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledMetrics = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 1fr);

  div {
    height: 5rem;
  }
`

export const StyledValue = styled.p`
  font-size: 150%;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const StyledName = styled.p`
  font-size: 90%;
`

export const StyledChart = styled.div`
  flex: 1;
  text-align: center;
`

export const StyledSubtitle = styled.h5`
  font-size: 100%;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const StyledShare = styled.section`
  margin: 2.5rem 0 1rem;
`

export const StyledShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  // for safari below 14.1 that not supports gap with flexbox
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      margin: -0.25rem;
      & > * {
        margin: 0.25rem;
      }
    }
  }

  button {
    width: 40%;
  }
`

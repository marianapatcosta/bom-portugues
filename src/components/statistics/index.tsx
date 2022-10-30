import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Share } from '@/assets/icons'
import { BOM_PORTUGUES_URL, GAME_STATISTICS } from '@/constants'
import { GameStatistics, ToastType } from '@/types'
import { getStatistics } from '@/utils'
import {
  ModalToastContext,
  ModalToastContextData,
} from '@/context/ModalToastContext'
import { QuestionContext, QuestionContextData } from '@/context/QuestionContext'
import { Button, Counter, PieChart } from '..'
import {
  StyledStatistics,
  StyledStatisticsRow,
  StyledMetrics,
  StyledValue,
  StyledName,
  StyledChart,
  StyledSubtitle,
  StyledShare,
  StyledShareButtons,
} from './styles'

enum ShareType {
  QUESTION = 'Question',
  STATISTICS = 'Statistics',
}

const Statistics = () => {
  const { t } = useTranslation(['common'])

  const statistics: GameStatistics & { winRate: number } = {
    ...getStatistics(),
    winRate: 0,
  }
  const { numberOfQuestions, winnings } = statistics
  const winRate = Math.round((winnings / numberOfQuestions) * 100) || 0

  const { addToast } = useContext<ModalToastContextData>(ModalToastContext)

  const { question, todaysAnswer } =
    useContext<QuestionContextData>(QuestionContext)

  const share = async (shareType: ShareType) => {
    if (typeof navigator !== 'undefined' && !navigator.share) {
      return addToast({ message: t('copiedToClipboard'), type: ToastType.INFO })
    }
    const getter =
      shareType === ShareType.QUESTION
        ? getShareQuestionMessage
        : getShareStatisticsMessage
    const shareData = {
      title: getShareMessageTitle(shareType),
      text: getter(),
      url: BOM_PORTUGUES_URL,
    }

    try {
      await navigator.share(shareData)
    } catch (error) {
      return addToast({
        message: t('shareError'),
        type: ToastType.ALERT,
      })
    }
  }

  const getShareMessageTitle = (shareType: ShareType): string => {
    const title: string = t(`check${shareType}`)
    if (shareType === ShareType.STATISTICS || !todaysAnswer) {
      return title
    }
    return todaysAnswer === question?.correctOption
      ? `${title} ${t('nailedIt')}`
      : `${title} ${t('wasWrong')}`
  }

  const getShareQuestionMessage = (): string => question!.question

  const getShareStatisticsMessage = (): string =>
    [...GAME_STATISTICS, 'winRate'].reduce(
      (statisticsText: string, currentStatistic: string): string =>
        `${statisticsText}${
          statistics[currentStatistic as keyof GameStatistics]
        }${currentStatistic === 'winRate' ? '%' : ''}  ${t(
          currentStatistic
        )}\n`,
      ''
    )

  return (
    <StyledStatistics>
      <StyledStatisticsRow>
        <StyledMetrics>
          {GAME_STATISTICS.map((statistic) => (
            <div key={`statistic-${statistic}`}>
              <StyledValue>
                {statistics[statistic as keyof GameStatistics]}
              </StyledValue>
              <StyledName>
                {t(statistic, {
                  count: statistics[statistic as keyof GameStatistics],
                })}
              </StyledName>
            </div>
          ))}
        </StyledMetrics>
        <section>
          <StyledChart>
            <StyledSubtitle>{`% ${t('winRate')}`}</StyledSubtitle>
            <PieChart winRate={winRate} />
          </StyledChart>
          <Counter />
        </section>
      </StyledStatisticsRow>
      <StyledShare>
        <StyledSubtitle>{t('share')}</StyledSubtitle>
        <StyledShareButtons>
          <Button
            label={t('question')}
            icon={Share}
            iconText={t('shareQuestion')}
            title={t('shareQuestion')}
            aria-label={t('shareQuestion')}
            disabled={!question}
            onClick={() => share(ShareType.QUESTION)}
          />
          <Button
            label={t('statistics').toLowerCase()}
            icon={Share}
            iconText={t('shareStatistics')}
            title={t('shareStatistics')}
            aria-label={t('shareStatistics')}
            onClick={() => share(ShareType.STATISTICS)}
          />
        </StyledShareButtons>
      </StyledShare>
    </StyledStatistics>
  )
}

export default Statistics

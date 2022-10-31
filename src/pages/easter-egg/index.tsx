import { useRef, MouseEvent } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import fs from 'fs'
import path from 'path'
import { Button, FlashCard } from '@/components'
import { FlashCardHandle } from '@/components/flash-card'
import { FLIP_ANIMATION_DURATION } from '@/constants'
import { useItemsManager } from '@/hooks/useItemsManager'
import { COLLECTION_FAVORITE_QUESTIONS } from '@/constants'
import { Question } from '@/types'
import {
  StyledTitle,
  StyledCardWrapper,
  StyledNoData,
  StyledCheckbox,
} from '@/styles/easter-egg'

interface EasterEggProps {
  questions: Question[]
}

const EasterEgg = ({ questions: allQuestions }: EasterEggProps) => {
  const { t } = useTranslation(['home'])
  const {
    item: question,
    items: questions,
    getRandomItem: getRandomQuestion,
    toggleIsFavorite,
    showOnlyFavorites,
    toggleShowFavorites,
  } = useItemsManager<Question>(COLLECTION_FAVORITE_QUESTIONS, allQuestions)

  const flashCardRef = useRef<FlashCardHandle>(null)

  const handleToggleShowFavorites = (event: MouseEvent<HTMLInputElement>) => {
    flashCardRef.current?.resetForm()
    setTimeout(() => {
      toggleShowFavorites(event)
    }, FLIP_ANIMATION_DURATION * 200)
  }

  const handleNextClick = (): void => {
    flashCardRef.current?.resetForm()
    setTimeout(() => {
      getRandomQuestion()
    }, FLIP_ANIMATION_DURATION * 200)
  }

  return (
    <>
      <StyledTitle> {t('howToWrite')}</StyledTitle>
      <StyledCheckbox
        label={t('showOnlyFavorites')}
        checked={showOnlyFavorites}
        isSmall
        onChange={handleToggleShowFavorites}
      />
      {!question ? (
        <StyledNoData>{t('noQuestionsToDisplay')}</StyledNoData>
      ) : (
        <StyledCardWrapper>
          <FlashCard
            ref={flashCardRef}
            question={question}
            isFavorite={question.isFavorite}
            toggleIsFavorite={toggleIsFavorite}
          />
          {questions.length > 1 && (
            <Button
              title={t('seeNextQuestion')}
              onClick={handleNextClick}
              isRound
            >
              {'>'}
            </Button>
          )}
        </StyledCardWrapper>
      )}
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const QUESTIONS_DIRECTORY = path.join(process.cwd(), 'src/content')
  const filePath = path.join(QUESTIONS_DIRECTORY, 'all-questions.json')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const questions: Question[] = JSON.parse(fileContent)

  return {
    props: {
      questions,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}

export default EasterEgg

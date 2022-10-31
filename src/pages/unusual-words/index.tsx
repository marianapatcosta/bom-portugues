import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import fs from 'fs'
import path from 'path'
import { Button, FavoriteButton } from '@/components'
import { COLLECTION_FAVORITE_WORDS } from '@/constants'
import { Word } from '@/types'
import {
  StyledTitle,
  StyledNoData,
  StyledCardWrapper,
  StyledCard,
  StyledCheckbox,
} from '@/styles/unusual-words'
import { useItemsManager } from '@/hooks/useItemsManager'

interface UnusualWordsProps {
  words: Word[]
}

const UnusualWords = ({ words: allWords }: UnusualWordsProps) => {
  const { t } = useTranslation(['unusual'])

  const {
    item: word,
    items: words,
    getRandomItem: getRandomWord,
    toggleIsFavorite,
    showOnlyFavorites,
    toggleShowFavorites,
  } = useItemsManager<Word>(COLLECTION_FAVORITE_WORDS, allWords)

  const handleNextClick = (): void => {
    getRandomWord()
  }

  return (
    <>
      <StyledTitle> {t('unusualWords')}</StyledTitle>
      <StyledCheckbox
        label={t('showOnlyFavorites')}
        checked={showOnlyFavorites}
        isSmall
        onChange={toggleShowFavorites}
      />
      {!word ? (
        <StyledNoData>{t('noWordsToDisplay')}</StyledNoData>
      ) : (
        <StyledCardWrapper>
          <StyledCard>
            <header>
              <h2>
                <dfn>{word.word}</dfn>
              </h2>
              <p>{word.pronunciation}</p>
              <FavoriteButton
                title={t(
                  word.isFavorite ? 'removeFromFavorites' : 'addToFavorites'
                )}
                isFavorite={word.isFavorite}
                onClick={toggleIsFavorite}
              />
            </header>
            <main>
              <p>{word.definition}</p>
              {!!word.sentence && <q>{word.sentence}</q>}
            </main>
            <footer>
              <a
                href={word.link}
                target='_blank'
                rel='nofollow noopener noreferrer'
              >{`${t('source')} ${word.source}`}</a>
            </footer>
          </StyledCard>
          {words.length > 1 && (
            <Button title={t('seeNextWord')} onClick={handleNextClick} isRound>
              {'>'}
            </Button>
          )}
        </StyledCardWrapper>
      )}
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const WORDS_DIRECTORY = path.join(process.cwd(), 'src/content')
  const filePath = path.join(WORDS_DIRECTORY, 'all-unusual-words.json')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const words: Word[] = JSON.parse(fileContent)
  return {
    props: {
      words,
      ...(await serverSideTranslations(locale, ['common', 'unusual'])),
    },
  }
}

export default UnusualWords

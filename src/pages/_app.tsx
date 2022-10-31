import { useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { GlobalStyle } from '@/themes/global-styles'
import { Layout, Modal, Statistics, Toast } from '@/components/'
import { ModalToastContext } from '@/context/ModalToastContext'
import { QuestionContext } from '@/context/QuestionContext'
import type { GameState, Question, ToastData } from '@/types'
import { ThemeContextProvider } from '@/hooks/useTheme'
import { TOAST_OFFSET } from '@/constants'
import { getGameState, isToday } from '@/utils'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
  const [toastData, setToastData] = useState<ToastData[]>([])
  const [questionOfTheDay, setQuestionOfTheDay] = useState<Question | null>(
    null
  )
  const [todaysAnswer, setTodaysAnswer] = useState<string | null>(null)

  const addToast = (newToast: ToastData): void =>
    setToastData((prevData) => [...prevData, newToast])

  const removeToast = (toastIndex: number): void =>
    setToastData((prevData) =>
      prevData.filter((_, index) => index !== toastIndex)
    )

  const openModal = (): void => {
    setIsModalOpened(true)
  }
  const closeModal = () => setIsModalOpened(false)

  const setQuestion = (question: Question): void =>
    setQuestionOfTheDay(question)

  const setAnswer = (answer: string): void => setTodaysAnswer(answer)

  useEffect(() => {
    const gameState: GameState | undefined = getGameState()
    const hasPlayerAlreadyAnsweredToday: boolean = !gameState
      ? false
      : isToday(new Date(gameState.lastPlayTime))

    const todaysAnswer: string | null = hasPlayerAlreadyAnsweredToday
      ? gameState!.lastAnswer
      : null
    setTodaysAnswer(todaysAnswer)
  }, [])

  return (
    <>
      <Head>
        <title>Bom Português</title>
        <meta
          name='description'
          content='Application to test the knowledge about Portuguese language'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeContextProvider>
        <ModalToastContext.Provider value={{ openModal, addToast }}>
          <QuestionContext.Provider
            value={{
              question: questionOfTheDay,
              todaysAnswer,
              setQuestion,
              setAnswer,
            }}
          >
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {!!isModalOpened && (
              <Modal title={'statistics'} closeModal={closeModal}>
                <Statistics />
              </Modal>
            )}
            {!!toastData.length &&
              toastData.map((data, index) => (
                <Toast
                  key={data.message}
                  message={data.message}
                  style={{ top: `${TOAST_OFFSET * index + 2}rem` }}
                  type={data.type}
                  onToastDismiss={() => removeToast(index)}
                  autoDismissable={false}
                />
              ))}
          </QuestionContext.Provider>
        </ModalToastContext.Provider>
      </ThemeContextProvider>
    </>
  )
}
export default appWithTranslation(MyApp)

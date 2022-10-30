import { useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { StyledTitle } from '@/themes/global-styles'

const FourOhFour = () => {
  const router = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    router.replace('/')
  }, [])

  return (
    <>
      <StyledTitle>{t('pageNotFound')}</StyledTitle>
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default FourOhFour

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { LINKS } from '@/constants'
import { StyledSection } from '@/styles/about'

const About = () => {
  const { t } = useTranslation(['about'])
  return (
    <>
      <StyledSection>
        <h2> {t('about')}</h2>
        <p>{t('aboutInfo')}</p>
        <p>
          <strong>{t('contentInfo')}</strong>
        </p>
        <a
          href='https://www.infopedia.pt'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          Infopédia
        </a>
        <a
          href='https://emportuguescorreto.pt'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          Em Português Correto
        </a>
      </StyledSection>
      <StyledSection>
        <h2>{t('howToPlay')}</h2>
        <p>{t('howToPlayInfo')}</p>
      </StyledSection>
      <StyledSection>
        <h2>{t('privacyPolicy')}</h2>
        <p>{t('privacyPolicyDate')}</p>
        <p>
          <strong>{t('privacyPolicyTerms1')}</strong>
        </p>
        <p>{t('privacyPolicyTerms2')}</p>
        <p>{t('privacyPolicyTerms3')}</p>
        <p>{t('privacyPolicyTerms4')}</p>
        <p>
          {t('privacyPolicyTerms5')}
          <a
            href={LINKS[0].url}
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            {t('here')}
          </a>
          .
        </p>
      </StyledSection>
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  }
}

export default About

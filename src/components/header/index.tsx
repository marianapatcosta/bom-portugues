import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Info, Statistics } from '@/assets/icons'
import { Locale } from '@/types'
import { Button, ToggleThemeButton } from '..'
import {
  ModalToastContext,
  ModalToastContextData,
} from '@/context/ModalToastContext'
import {
  StyledTitleWrapper,
  StyledHeader,
  StyledTitle,
  StyledHeaderRight,
} from './styles'

const Header = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()

  const { openModal } = useContext<ModalToastContextData>(ModalToastContext)

  return (
    <StyledHeader>
      <StyledTitleWrapper>
        <StyledTitle $disabledLink={router.pathname === '/'}>
          <Link href='/' locale={router.locale}>
            Bom Portugues
          </Link>
        </StyledTitle>
        <button
          aria-label={t('clickTo', { action: t('seeUnusualWords') })}
          title={t('seeUnusualWords')}
        >
          <Link href='/easter-egg' passHref>
            &#8963;
          </Link>
        </button>
      </StyledTitleWrapper>
      <StyledHeaderRight>
        <Button
          title={router.locale === Locale.EN ? t('portuguese') : t('english')}
          aria-label={t('clickTo', { action: t('changeLanguage') })}
        >
          <Link
            href={router.pathname}
            locale={router.locale === Locale.EN ? Locale.PT : Locale.EN}
          >
            {router.locale === Locale.EN ? 'Pt' : 'En'}
          </Link>
        </Button>
        <Button
          aria-label={t('clickTo', { action: t('seeAbout') })}
          title={t('seeAbout')}
        >
          <Link href='/about' passHref>
            <Info />
          </Link>
        </Button>
        <Button
          aria-label={t('clickTo', { action: t('seeUnusualWords') })}
          title={t('seeUnusualWords')}
        >
          <Link href='/unusual-words' passHref>
            W
          </Link>
        </Button>
        <Button
          aria-label={t('clickTo', { action: t('seeStatistics') })}
          icon={Statistics}
          title={t('seeStatistics')}
          onClick={openModal}
        />
        <ToggleThemeButton />
      </StyledHeaderRight>
    </StyledHeader>
  )
}

export default Header

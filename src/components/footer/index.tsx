import { useTranslation } from 'react-i18next'
import { LINKS } from '@/constants'
import { StyledFooter, StyledFooterLinks } from './styles'

const Footer = () => {
  const { t } = useTranslation(['common'])

  return (
    <StyledFooter>
      <p>@2022 {t('developedBy', { name: 'Mariana Costa' })}</p>
      <StyledFooterLinks>
        {LINKS.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={`link-to-${link.label}`}
              href={link.url}
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label={t('findMe', { link: link.label })}
              title={t('findMe', { link: t(link.label) })}
            >
              <Icon />
            </a>
          )
        })}
      </StyledFooterLinks>
      <p>
        {t('contentFrom')}
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
      </p>
    </StyledFooter>
  )
}

export default Footer

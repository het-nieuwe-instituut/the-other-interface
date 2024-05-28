'use client'
import { Box, Text, Button, Tooltip } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { recordRightsFieldMapper } from '../../mappers/recordRightsMapper'
import { recordMetaT } from 'locales/locales'

type SectionType = {
  title?: string
  value: string[] | null
  isLink: boolean
  key: string
}

interface RenderSectionProps {
  section: SectionType
  recordMetaT: recordMetaT
  index: number
}

function renderLink(title?: string, value?: string, index?: number) {
  return (
    <Button
      as={'a'}
      rightIcon={<ExternalLink />}
      target={'_blank'}
      bg={'transparent'}
      href={value}
      border={'none'}
      borderBottom={`1px solid black`}
      px={0}
      _hover={{ bg: 'transparent' }}
      outline={'none'}
      outlineOffset={0}
      borderRadius={0}
      key={index}
      py={'6px'}
    >
      <Text
        as={'span'}
        textStyle={'socialLarge.lg'}
        color={'currentcolor'}
        verticalAlign={'text-bottom'}
      >
        {title}
      </Text>
    </Button>
  )
}

function renderRights(translate: recordMetaT, value?: string[] | null, key?: string) {
  const rightsInfo = value && value[0] ? recordRightsFieldMapper(value[0], translate) : null

  if (!rightsInfo) return null

  const Icon = rightsInfo.icon
  const SectionaryIcon = rightsInfo.secondaryIcon

  return (
    <Tooltip label={rightsInfo.description} fontSize="md" placement="bottom" hasArrow>
      <Box
        as={'a'}
        href={rightsInfo.url}
        target="_blank"
        key={key}
        w={'fit-content'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box>
          <Icon />
        </Box>
        {SectionaryIcon ? <SectionaryIcon /> : null}
        <Text paddingLeft={2}>{rightsInfo.text}</Text>
      </Box>
    </Tooltip>
  )
}

function renderSection({ section, recordMetaT }: RenderSectionProps) {
  if (section.key === 'rights') {
    return (
      <>
        <Text textStyle={'socialLarge.lg'} fontWeight={700} mb={2}>
          {section.title}
        </Text>
        {renderRights(recordMetaT, section.value, section.key)}
      </>
    )
  }

  return (
    <>
      {section.title && !section.isLink && (
        <Text textStyle={'socialLarge.lg'} fontWeight={700}>
          {section.title}
        </Text>
      )}
      {section?.value?.map((value, valueIndex) =>
        section.isLink ? (
          renderLink(section.title, value, valueIndex)
        ) : (
          <Text textStyle={'socialLarge.lg'} key={valueIndex}>
            {value}
          </Text>
        )
      )}
    </>
  )
}

export const RecordMeta: React.FC = () => {
  const { recordMetaSectionData, isLoading, recordMetaT } = usePresenter()

  if (isLoading) {
    return <ThemedSpinner />
  }

  if (!recordMetaSectionData) return null

  return (
    <Box>
      {recordMetaSectionData.map((section, index) => (
        <Box key={index} marginBottom={5}>
          {renderSection({ section, recordMetaT, index })}
        </Box>
      ))}
    </Box>
  )
}

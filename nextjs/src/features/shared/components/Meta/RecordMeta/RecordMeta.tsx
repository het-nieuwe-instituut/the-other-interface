'use client'
import { Box, Text, Button } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
import Link from 'next/link'
import ExternalLink from '@/icons/arrows/external-link.svg'

export const RecordMeta: React.FC = () => {
  const { recordMetaSectionData, isLoading } = usePresenter()

  if (isLoading) {
    return <Loader />
  }

  if (!recordMetaSectionData) return null
  return (
    <Box>
      {recordMetaSectionData.map((section, index) => {
        return (
          <Box key={index} marginBottom={5}>
            {section.title && !section.isLink && (
              <Text textStyle={'socialLarge.lg'} fontWeight={700}>
                {section.title}
              </Text>
            )}
            {section.isLink && section.value ? (
              <Button
                as={'a'}
                rightIcon={<ExternalLink />}
                target={'_blank'}
                bg={'transparent'}
                href={section.value}
                border={'none'}
                borderBottom={`1px solid `}
                px={0}
                _hover={{ bg: 'transparent' }}
                outline={'none'}
                outlineOffset={0}
              >
                <Text
                  as={'span'}
                  textStyle={'socialLarge.lg'}
                  color={'currentcolor'}
                  verticalAlign={'text-bottom'}
                >
                  {section.title}
                </Text>
              </Button>
            ) : (
              // </Link>
              // Render as plain text if not a link
              <Text textStyle={'socialLarge.lg'}>{section.value}</Text>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

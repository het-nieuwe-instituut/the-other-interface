import metadataEN from '../locales/en/metadata.json'
import metadataNL from '../locales/nl/metadata.json'

// This function is a hack and only exists because we implemented the language switch in next wrong, we are managing it all by ourselves using the ?lang= search param and this function is making sure the language switching gets handled correctly
export function getMetaDataTranslations(lang: string) {
  const metaData = lang === 'nl' ? metadataNL : metadataEN

  return metaData
}

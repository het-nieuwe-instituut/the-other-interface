import { EditorialPageWrapper } from '@/features/editorial/components/EditorialPageWrapper'
import { Paragraph } from '@/features/ui/components/Paragraph/Paragraph'
import { ParagraphWithLineClamp } from '@/features/ui/components/Paragraph/ParagraphWithLineClamp'

import { Subtitle } from '@/features/ui/components/subtitle/Subtitle'

import FS from 'fs/promises'

const Page = async () => {
  const basepath = './src/app/ks'
  const markdown = await FS.readFile(`${basepath}/paragraphs/markdown.txt`, 'utf-8')

  return (
    <div>
      <h1>Subtitle + Paragraph</h1>
      <EditorialPageWrapper>
        <div className="grid grid-cols-6 lg:grid-cols-12">
          <div className="col-span-6 flex flex-col gap-3  lg:col-span-7">
            <p>Markdown example:</p>
            <div className=" border border-black">
              <Paragraph>{markdown}</Paragraph>
            </div>

            <p>With subtitle and line-clamp component example:</p>
            <div className=" border border-black">
              <Subtitle>Explore the Collection</Subtitle>
              <ParagraphWithLineClamp>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel placerat ipsum.
                Vivamus tincidunt, ipsum at ullamcorper malesuada, justo arcu aliquet justo, in
                euismod neque purus sit amet libero. Sed sit amet justo at lorem fermentum posuere.
                Ut sit amet risus eu libero posuere tincidunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce vel placerat ipsum. Vivamus tincidunt, ipsum at
                ullamcorper malesuada, justo arcu aliquet justo, in euismod neque purus sit amet
                libero. Sed sit eu libero posuere tincidunt. Vivamus tincidunt, ipsum at ullamcorper
                malesuada, justo arcu aliquet justo, in euismod neque purus sit amet libero. Sed sit
                amet justo at lorem fermentum posuere. Ut sit amet risus eu libero posuere
                tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
                placerat ipsum. Vivamus tincidunt, ipsum at ullamcorper malesuada, justo arcu
                aliquet justo, in euismod neque purus sit amet libero. Sed sit eu libero posuere
                tincidunt.
              </ParagraphWithLineClamp>
            </div>
          </div>
          <div className="col-span-6 bg-gray-100 lg:col-start-9 lg:col-end-13">side</div>
        </div>
      </EditorialPageWrapper>
    </div>
  )
}

export default Page

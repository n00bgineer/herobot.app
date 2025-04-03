import Markdown from 'markdown-to-jsx'

import { CustomMarkdownContainer } from './CustomMarkdownContainer'

const CustomMarkdown = ({ children }) => {
  return (
    <CustomMarkdownContainer>
      <Markdown>{children}</Markdown>
    </CustomMarkdownContainer>
  )
}

export default CustomMarkdown

import Metadata  from 'src/components/Metadata/Metadata'
import CustomMarkdown from 'src/components/Custom/CustomMarkdown/CustomMarkdown'
import Page from 'src/components/Page/Page'
import constants from 'src/state/constants'

const ToSPage = () => {
  const { meta, document } = constants.policy.terms || {}

  return (
    <>
      <Metadata
        title={meta.pageTitle}
        description={meta.description}
        canonical={meta.canonical}
        og={meta.og}
        robots={meta.robots}
        twitter={meta.twitter}
      />
      <Page>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <CustomMarkdown>{document}</CustomMarkdown>
        </div>
      </Page>
    </>
  )
}

export default ToSPage

import PageHeader from '../PageHeader/PageHeader'

import PageContainer from './PageContainer'

const Page = ({ headerTitle, headerDescription, headerChildren, children }) => {
  return (
    <PageContainer>
      {(headerTitle || headerDescription || headerChildren) && (
        <PageHeader title={headerTitle} description={headerDescription}>
          {headerChildren}
        </PageHeader>
      )}
      {children}
    </PageContainer>
  )
}

export default Page

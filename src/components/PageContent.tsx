import { PropsWithChildren } from 'react'

interface PageContentProps extends PropsWithChildren {
  title: string
}

const PageContent: React.FC<PageContentProps> = ({
  title,
  children
}: PageContentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default PageContent

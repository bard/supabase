import { CommandItem } from './Command.utils'
import { useRouter } from 'next/router'
import { useCommandMenu } from './CommandMenuProvider'
import { getURL } from 'common'
import { PropsWithChildren } from 'react'

interface SearchOnlyItemProps
  extends PropsWithChildren<{
    url: string
  }> {}

export default function SearchOnlyItem({ children, url }: SearchOnlyItemProps) {
  const { project, setIsOpen, setSearch } = useCommandMenu()
  const router = useRouter()

  const baseUrl = [getURL(), process.env.NEXT_PUBLIC_BASE_PATH].filter(Boolean).join('')
  function handleRouteChange(url: string) {
    const path = project?.ref ? url.replace('/_/', `/${project?.ref}/`) : url

    const localizedURL = `${baseUrl}${path}`

    router.push(localizedURL)
    setIsOpen(false)
    setSearch('')
  }
  return (
    <CommandItem type="link" onSelect={() => handleRouteChange(url)}>
      {children}
    </CommandItem>
  )
}

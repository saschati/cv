import { useMemo } from 'react'

const useStaticPath = (path: string): string => {
  const assetUrl = useMemo(() => {
    if (/^https?:/i.test(path) === true) {
      return path
    }

    if (path.startsWith('/') === false) {
      path = '/' + path
    }

    return `${process.env.PUBLIC_URL}${path}`
  }, [path])

  return assetUrl
}

export default useStaticPath

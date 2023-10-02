export const detectBrowser = () => {
  if (!navigator) return undefined

  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'Chrome'
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'Firefox'
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'Safari'
  }
}

export const getURL = () => {
  const url =
    process?.env?.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL !== ''
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'https://supabase.com/dashboard'
  return url.includes('http') ? url : `https://${url}`
}

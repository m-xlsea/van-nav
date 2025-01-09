export const generateSearchEngineCard = (searchString: string) => {
    if (!searchString.trim()) return []
  const result = [
    {
        name: '百度',
      url: searchBaidu(searchString),
        desc: `百度一下，你就知道`,
      id: 8800880001,
        logo: 'baidu.svg',
      hide: false
    },
    {
        name: '必应',
      url: searchBing(searchString),
        desc: `Bing`,
      id: 8800880002,
        logo: 'bing.svg',
      hide: false
    },
    {
        name: '谷歌',
      url: searchGoogle(searchString),
        desc: `Google`,
      id: 8800880003,
        logo: 'google.svg',
      hide: false
    }
  ]
    return result
}

const searchBaidu = (q: string) => {
  return `https://www.baidu.com/s?wd=${q}`
}

const searchGoogle = (q: string) => {
  return `https://www.google.com/search?q=${q}`
}

const searchBing = (q: string) => {
  return `https://cn.bing.com/search?q=${q}`
}

export const upperCaseFirstLetter = string => {
  return string.charAt(0) + string.slice(1)
}

export const urlHelper = href => {
  const regex = /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
  const match = href.match(regex)
  return (
    match && {
      href: href,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7],
    }
  )
}

import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

export default function FooterLink({ node }) {
  console.log(`FooterLink`, node)

  let linkNodes = node.content.filter(node => node.nodeType === "hyperlink")
  if (!linkNodes || linkNodes.length == 0) {
    return null
  }
  let linkNode = linkNodes[0]
  const uri = linkNode.data.uri
  const text = linkNode.content[0].value
  return <a href={uri}>{text}</a>
}

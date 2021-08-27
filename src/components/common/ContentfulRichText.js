import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlockQuote = ({ quoteText, quoter }) => {
  return (
    <blockquote>
      {quoteText}
      <footer>
        <cite>{quoter}</cite>
      </footer>
    </blockquote>
  )
}

export const renderEmbeddedAsset = node => {
  const { title, description, file } = node.data.target
  console.log("ContentfulRichText->renderEmbeddedAsset", node)

  const mimeType = file.contentType
  const mimeGroup = mimeType.split("/")[0]

  switch (mimeGroup) {
    case "image":
      return (
        <img
          title={title ? title : null}
          alt={description ? description : null}
          src={file.url}
        />
      )
    case "video":
      return (
        <div className="embed-responsive embed-responsive-16by9">
          <video controls>
            <source src={file.url} type="video/mp4" />
            <p>Your browser doesnt support HTML5 video.</p>
          </video>
        </div>
      )
    case "application":
      return (
        <a alt={description ? description : null} href={file.url}>
          {title ? title : file.details.fileName}
        </a>
      )
    default:
      return (
        <span style={{ backgroundColor: "red", color: "white" }}>
          {mimeType} embedded asset{" "}
        </span>
      )
  }
}

export const renderHeading = node => {
  console.log(`ContentfulRichText->renderHeading`, node)
  const slug = node.content[0].value.split(" ").join("-").toLowerCase()
  const HeadingTag = `h${node.nodeType.split("-")[1]}`

  return <HeadingTag id={slug}>{node.content[0].value}</HeadingTag>
}

export const renderEmbeddedEntry = node => {
  const contentTypeId = node.data.target.sys.contentType.sys.id
  const fields = node.data.target.fields
  console.log(`ContentfulRichText->renderEmbeddedEntry`, node)
  switch (contentTypeId) {
    case "topic":
      return <h3 id={fields.slug}>{fields.title}</h3>
    case "blockquote":
      return (
        <div>
          <BlockQuote quoteText={fields.quoteText} quoter={fields.quoter} />
        </div>
      )
    default:
      return <div></div>
  }
}

export default function ContentfulRichText({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: renderEmbeddedAsset,
      [BLOCKS.HEADING_3]: renderHeading,
      [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    },
  }

  console.log(`ContentfulRichText-->json`, content)
  return (
    <div className="blog blog__content">{renderRichText(content, options)}</div>
  )

  /**
   * rich-text-react-renderer embedded assets not working
   */
  // let contentJson = JSON.parse(content.raw)
  // let html = content ? documentToHtmlString(contentJson, options) : ""

  // return (
  //   <div
  //     className="blog blog__content"
  //     dangerouslySetInnerHTML={{ __html: html }}
  //   />
  // )
}

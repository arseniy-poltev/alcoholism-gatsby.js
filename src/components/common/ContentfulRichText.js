import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderToStaticMarkup } from "react-dom/server"

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
  const { title, description, file } = node.data.target.fields
  const mimeType = file["en-US"].contentType
  const mimeGroup = mimeType.split("/")[0]
  console.log(
    "ContentfulRichText->renderEmbeddedAsset",
    title,
    description,
    file,
    mimeType,
    mimeGroup
  )

  switch (mimeGroup) {
    case "image":
      return (
        <img
          title={title ? title["en-US"] : null}
          alt={description ? description["en-US"] : null}
          src={file["en-US"].url}
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
        <a
          alt={description ? description["en-US"] : null}
          href={file["en-US"].url}
        >
          {title ? title["en-US"] : file["en-US"].details.fileName}
        </a>
      )
    default:
      return (
        <span style={{ backgroundColor: "red", color: "white" }}>
          {" "}
          {mimeType} embedded asset{" "}
        </span>
      )
  }
}

export const renderEmbeddedEntry = node => {
  const contentTypeId = node.data.target.sys.contentType.sys.id
  const fields = node.data.target.fields
  console.log(
    `ContentfulRichText->renderEmbeddedEntry`,
    contentTypeId,
    fields.slug["en-US"]
  )
  switch (contentTypeId) {
    case "topic":
      return <h3 id={fields.slug["en-US"]}>{fields.title["en-US"]}</h3>
    case "blockquote":
      return (
        <div>
          <BlockQuote
            quoteText={fields.quoteText["en-US"]}
            quoter={fields.quoter["en-US"]}
          />
        </div>
      )
    default:
      return <div></div>
  }
}

export default function ContentfulRichText({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let jsx = renderEmbeddedAsset(node)
        let markup = renderToStaticMarkup(jsx)
        return markup
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        let jsx = renderEmbeddedEntry(node)
        let markup = renderToStaticMarkup(jsx)
        return markup
      },
    },
  }

  let html = content ? documentToHtmlString(content.json, options) : ""
  console.log("ContentfulRichText->content", content)
  console.log("ContentfulRichText->html", html)

  return (
    <div
      className="blog blog__content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

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

export default function ContentfulRichText({ content }) {
  function renderEmbeddedAssets(node) {
    const { title, description, file } = node.data.target.fields
    const mimeType = file["en-US"].contentType
    const mimeGroup = mimeType.split("/")[0]
    console.log(
      "ContentfulRichText->renderEmbeddedAssets",
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

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let jsx = renderEmbeddedAssets(node)
        let markup = renderToStaticMarkup(jsx)
        return markup
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const fields = node.data.target.fields
        switch (node.data.target.sys.contentType.sys.id) {
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
            return <div>???????????????</div>
        }
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

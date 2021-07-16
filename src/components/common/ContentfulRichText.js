import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

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
  function renderMedia(file) {
    if (file.contentType === "video/mp4") {
      return (
        <div className="embed-responsive embed-responsive-16by9">
          <video controls>
            <source src={file.url} type="video/mp4" />
            <p>Your browser doesnt support HTML5 video.</p>
          </video>
        </div>
      )
    } else if (file.contentType === "image/jpeg") {
      return <img class="img-fluid" src={file.url} />
    } else {
      return <p>Unknown content type</p>
    }
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, description, file } = node.data.target.fields
        const mimeType = file["en-US"].contentType
        const mimeGroup = mimeType.split("/")[0]

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

  let html = content ? documentToHtmlString(content, options) : ""
  console.log("ContentfulRichText->content", content)
  console.log("ContentfulRichText->html", html)

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

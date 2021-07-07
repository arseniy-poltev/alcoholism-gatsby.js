import React from "react"
import BlogBanner from "../components/Blog/BlogBanner"
import BlogContent from "../components/Blog/BlogContent"
import BlogSummary from "../components/Blog/BlogSummary"
import BlogTopic from "../components/Blog/BlogTopic"
import BlogWriters from "../components/Blog/BlogWriters"
import Layout from "../components/layout"
import CloseIcon from "../assets/Icons/close-circle.svg"
import BlogFooterBanner from "../components/Blog/BlogFooterBanner"

export default function blog() {
  return (
    <Layout>
      <BlogBanner />
      <BlogSummary />
      <BlogTopic />
      <BlogContent />
      <BlogWriters />
      <div className="blog">
        <button className="btn">
          View more
          <CloseIcon />
        </button>
      </div>
      <BlogFooterBanner />
    </Layout>
  )
}

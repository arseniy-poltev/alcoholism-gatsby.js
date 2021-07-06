import React from "react"
import BlogAuthor from "../components/Blog/BlogAuthor"
import BlogBanner from "../components/Blog/BlogBanner"
import BlogContent from "../components/Blog/BlogContent"
import BlogSummary from "../components/Blog/BlogSummary"
import BlogTopic from "../components/Blog/BlogTopic"
import Layout from "../components/layout"

export default function blog() {
  return (
    <Layout>
      <BlogBanner />
      <section className="blog">
        <BlogSummary />
        <BlogTopic />
        <BlogContent />
        <BlogAuthor />
      </section>
    </Layout>
  )
}

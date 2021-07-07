import React from "react"
import BlogCard from "../common/BlogCard"

export default function HomeFeatureBlogs(props) {
  const { blogs } = props
  return (
    <section className="home-feature home-feature--blogs">
      <div className="container">
        <span className="badge">OUR FEATURES</span>
        <h2>Have a look over our publications</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

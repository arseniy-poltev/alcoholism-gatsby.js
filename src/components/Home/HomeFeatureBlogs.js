import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BlogCard from "../common/BlogCard"

export default function HomeFeatureBlogs(props) {
  const { blogs } = props
  return (
    <section className="home-feature home-feature--blogs">
      <Container>
        <span className="badge">OUR FEATURES</span>
        <h2>Have a look over our publications</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Row>
          {blogs.map((blog, index) => (
            <Col key={index} lg={4} sm={6}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

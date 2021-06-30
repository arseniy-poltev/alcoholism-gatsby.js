import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import HomeFeatureNetwork from "../components/Home/HomeFeatureNetwork"
import HomeFeatureCenters from "./../components/Home/HomeFeatureCenters"
import HomeFeatureBlogs from "./../components/Home/HomeFeatureBlogs"
import { Helmet } from "react-helmet"
import { blogList, centersList } from "../components/common/data"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Helmet>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCijXJZhd5zTCfVlViXKWVGOn1d9hJmVTI"
        async
        defer
      />
    </Helmet>
    <HomeBanner />
    <HomeFeatureNetwork />
    <HomeFeatureCenters centers={centersList} />
    <HomeFeatureBlogs blogs={blogList} />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage

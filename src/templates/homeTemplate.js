import React, { Fragment } from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import HomeBanner from "../components/Home/HomeBanner"
import HomeFeatureNetwork from "../components/Home/HomeFeatureNetwork"
import HomeFeatureCenters from "../components/Home/HomeFeatureCenters"
import HomeFeatureBlogs from "../components/Home/HomeFeatureBlogs"
import { blogList, centersList } from "../components/common/data"
import HomeCertifications from "../components/Home/HomeCertifications"
import HomeOutlets from "../components/Home/HomeOutlets"
import HomeFooterBanner from "../components/Home/HomeFooterBanner"

export default function HomeTemplate(props) {
  const { pageContext } = props
  console.log("Homepage", props)
  return (
    <Fragment>
      <Seo title="Home" />
      <HomeBanner />
      <HomeCertifications />
      <HomeFeatureNetwork />
      {/* <HomeFeatureCenters centers={centersList} /> */}
      {/* <HomeFeatureBlogs blogs={blogList} /> */}
      <HomeOutlets />
      <HomeFooterBanner />
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
    </Fragment>
  )
}

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

const recoveryCenters = [
  {
    id: 1,
    name: "Recovery Center #1",
    description:
      "Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus. Cras ut erat magna. Morbi nibh ante, condimentum vestibulum tempus a, tristique et velit. Sed semper aliquet ante. Quisque tempus arcu sapien, id convallis turpis dictum quis. Nunc commodo vitae risus sit amet sollicitudin. Sed id facilisis sem.",
  },
  {
    id: 2,
    name: "Recovery Center #2",
    description:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.",
  },
  {
    id: 3,
    name: "Recovery Center #3",
    description:
      "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor.",
  },
  {
    id: 4,
    name: "Recovery Center #1",
    description:
      "Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus. Cras ut erat magna. Morbi nibh ante, condimentum vestibulum tempus a, tristique et velit. Sed semper aliquet ante. Quisque tempus arcu sapien, id convallis turpis dictum quis. Nunc commodo vitae risus sit amet sollicitudin. Sed id facilisis sem.",
  },
  {
    id: 5,
    name: "Recovery Center #2",
    description:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.",
  },
  {
    id: 6,
    name: "Recovery Center #3",
    description:
      "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor.",
  },
]

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
    <HomeFeatureCenters centers={recoveryCenters} />
    <HomeFeatureBlogs />
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

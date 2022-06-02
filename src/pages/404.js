// Node modules.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  img {
    max-height: 400px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
      <StaticImage
        alt="404 death star"
        formats={["auto", "webp", "avif"]}
        src="../images/404.jpeg"
      />
    </Wrapper>
  </Layout>
)

export default NotFoundPage

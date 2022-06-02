// Node modules.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 0 20px;

    li {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 10px;
      padding: 20px;

      .images {
        align-items: center;
        display: flex;
      }
    }
  }
`

const WandererPage = () => (
  <Layout>
    <Seo title="Wanderer" />
    <Wrapper>
    <Link to="/" className="">
      <h1>SAM&apos;S SABERS</h1>
      </Link>

      <ul>
        <li>
          {/* Images */}
          <div className="images">
            <StaticImage
              alt="wanderer image 1"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-1.jpg"
            />
            <StaticImage
              alt="wanderer image 2"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-2.jpg"
            />
            <StaticImage
              alt="wanderer image 3"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-3.jpg"
            />
            <StaticImage
              alt="wanderer image 4"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-4.jpg"
            />
          </div>

          {/* Title */}
          <h2>The Wanderer</h2>

          {/* Description */}
          <p>
           Need to add a description
          </p>
          
        </li>
      </ul>
    </Wrapper>
  </Layout>
)

export default WandererPage

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

const PaladinPage = () => (
  <Layout>
    <Seo title="Paladin" />
    <Wrapper>

    <Link to="/" className="">
      <h1>SAM&apos;S SABERS</h1>
      </Link>

      <ul>
        <li>
          {/* Images */}
          <div className="images">
            <StaticImage
              alt="paladin image 1"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/paladin-1.jpg"
            />
            <StaticImage
              alt="paladin image 2"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/paladin-2.jpg"
            />
            <StaticImage
              alt="paladin image 3"
              className="saber-image"
              formats={["auto", "webp", "avif"]}
              src="../images/paladin-3.jpg"
            />
          </div>

          {/* Title */}
          <h2>The Paladin</h2>

          {/* Description */}
          <p>
            This saber uses an MHSv1 core with a pair of custom cut aluminum
            shrouds to accentuate the choke. Accent LEDs in the choke create a
            'reactor' effect, matching the blade color the same way a crystal
            chamber would.
          </p>
          <p>
            Using the latest Crystal Focus X soundboard, a 28mm deep bass
            speaker, and a pair of 16mm / 12mm illuminated switches, this saber
            has every technological feature possible in a prop of this kind.
          </p>
          <p>
            The hilt has been powdercoated in an eternal empire style, using a
            two-tone silver effect to highlight the care and precision used by
            its wielder.
          </p>
          <p>
            The hilt is finished using a distressed leather wrap that will
            patina and age with use, creating a one of a kind look to match the
            weapon.
          </p>
        </li>
      </ul>
    </Wrapper>
  </Layout>
)

export default PaladinPage

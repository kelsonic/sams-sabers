// Node modules.
import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArrowIcon from "../images/arrow.svg"

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 0 20px;

    li {
      border-radius: 10px;
      padding: 20px;

      .images {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 500px;
        height: 300px;
        margin-top: 32px;
        margin-bottom: 24px;
      }
    }
  }

  .focused-image {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .saber-image {
    max-height: 275px;
  }

  .hidden {
    display: none;
  }

  .arrow-holder {
    display: flex;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .left-arrow {
    width: 50px;
    height: 50px;
    fill: white;
    transform: rotate(90deg);
    &:hover {
      cursor: pointer;
    }
  }
  .right-arrow {
    width: 50px;
    height: 50px;
    fill: white;
    transform: rotate(270deg);
    &:hover {
      cursor: pointer;
    }
  }
`

const PaladinPage = () => {
  const [selectedImage, setSelectedImage] = useState(1)
  const imageCount = 3

  const changeImage = count => {
    const newCount = selectedImage + count

    if (newCount > imageCount) {
      setSelectedImage(1)
      return
    }
    if (newCount < 1) {
      setSelectedImage(imageCount)
      return
    }

    setSelectedImage(newCount)
  }

  return (
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
              <div className="arrow-holder">
                <ArrowIcon
                  className="left-arrow"
                  onClick={() => changeImage(-1)}
                />
              </div>
              <div className="focused-image">
                <StaticImage
                  alt="paladin 1"
                  className={`saber-image ${
                    selectedImage === 1 ? "selected" : "hidden"
                  }`}
                  formats={["auto", "webp", "avif"]}
                  src="../images/paladin-1.jpg"
                />
                <StaticImage
                  alt="paladin 2"
                  className={`saber-image ${
                    selectedImage === 2 ? "selected" : "hidden"
                  }`}
                  formats={["auto", "webp", "avif"]}
                  src="../images/paladin-2.jpg"
                />
                <StaticImage
                  alt="paladin 3"
                  className={`saber-image ${
                    selectedImage === 3 ? "selected" : "hidden"
                  }`}
                  formats={["auto", "webp", "avif"]}
                  src="../images/paladin-3.jpg"
                />
              </div>
              <div className="arrow-holder">
                <ArrowIcon
                  className="right-arrow"
                  onClick={() => changeImage(1)}
                />
              </div>
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
              speaker, and a pair of 16mm / 12mm illuminated switches, this
              saber has every technological feature possible in a prop of this
              kind.
            </p>
            <p>
              The hilt has been powdercoated in an eternal empire style, using a
              two-tone silver effect to highlight the care and precision used by
              its wielder.
            </p>
            <p>
              The hilt is finished using a distressed leather wrap that will
              patina and age with use, creating a one of a kind look to match
              the weapon.
            </p>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default PaladinPage

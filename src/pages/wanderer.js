// Node modules.
import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArrowIcon from '../images/arrow.svg'

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

const WandererPage = () => {

const [selectedImage, setSelectedImage] = useState(1);
const imageCount = 3;

const changeImage = (count) => {
  const newCount = selectedImage + count;

  if (newCount > imageCount) {
    setSelectedImage(1);
    return;
  }
  if (newCount  < 1) {
    setSelectedImage(imageCount);
    return;
  }

  setSelectedImage(newCount);
}
return (
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
            <div className="arrow-holder">
              <ArrowIcon className="left-arrow" onClick={()=> changeImage(-1)}/>
            </div>
            <div className="focused-image">
            <StaticImage
              alt="wanderer 1"
              className={`saber-image ${selectedImage === 1 ? "selected" : "hidden"}`}
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-1.jpg"
            />
            <StaticImage
              alt="wanderer 2"
              className={`saber-image ${selectedImage === 2 ? "selected" : "hidden"}`}
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-2.jpg"
            />
            <StaticImage
              alt="wanderer 3"
              className={`saber-image ${selectedImage === 3 ? "selected" : "hidden"}`}
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-3.jpg"
            />
            <StaticImage
              alt="wanderer 4"
              className={`saber-image ${selectedImage === 4 ? "selected" : "hidden"}`}
              formats={["auto", "webp", "avif"]}
              src="../images/wanderer-4.jpg"
            />
            </div>
            <div className="arrow-holder">
              <ArrowIcon className="right-arrow" onClick={()=> changeImage(1)}/>
            </div>
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
)}

export default WandererPage

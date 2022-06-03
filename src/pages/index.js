// Node modules.
import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    margin: 1rem;
  }

  .saber-link {
    height: 80px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background-color: #dddddd;
    color: #000000;
    border-radius: 5px;
    &:hover {
      background-color: #ffffff;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Wrapper>
      <h1>SAM&apos;S SABERS</h1>

      <Link to="/arbiter/" className="saber-link">
        Arbiter
      </Link>

      <Link to="/paladin/" className="saber-link">
        Paladin
      </Link>

      <Link to="/wanderer/" className="saber-link">
        Wanderer
      </Link>
    </Wrapper>
  </Layout>
)

export default IndexPage

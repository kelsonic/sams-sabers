// Node modules.
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
// Relative imports.
import "./layout.css"

const Layout = ({ children }) => {
  // Scroll to top.
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className="container">
       <StaticImage
      alt="background stars"
      className="background-stars"
      formats={["auto", "webp", "avif"]}
      quality={95}
      src="../images/background-stars.jpeg"
    />

    <StaticImage
      alt="Millennium Falcon"
      className="millennium-falcon"
      formats={["auto", "webp", "avif"]}
      quality={95}
      src="../images/millennium-falcon.png"
    />
    
      {/* Main content */}
      <main>{children}</main>

      <footer>
        <p>
          Made with The Force by{" "}
          <a
            href="https://github.com/srsuddath"
            rel="noreferrer noopener"
            target="_blank"
          >
            Sam the Sabersmith
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default Layout

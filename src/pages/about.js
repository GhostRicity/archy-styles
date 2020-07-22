import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaInstagram } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Gery V. - a lifestyle blog
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">Note from me to you, </h3>
          <p>
          I decided to start ArchyStyles for many reasons. I have been dealing with anxieties and panic attacks, struggling to find a job, building a home, and having a relationship with loved ones and myself. Somehow, I felt lost and I was not able to function properly as a human being.
          </p>
          <p>
          Then I started doing yoga and meditations religiously and I thought of what I want to do and what my passion is. I always thought I am a creative soul and I had to express myself somehow, so this is how ArchyStyle came to life.
          It started as a therapeutic way to share my ideas, frustrations, and things that actually inspired me to be better. Now my goal is to create a community of people with whom we share the same values, to educate and inspire people to be the best version of themselves in this modern world!
          </p>
          <p>
          Stay Tuned :)
          </p>
          <div>
            <Row>
              <Col>
                <h3>Who is ArchyStyles,</h3>
                <p>
                  Life can be very hectic sometimes and often we are the ones who complicate it. We often stress about things we have no control of and we often feel that things are not working out for us the way we want them to. Negative thoughts are always there and sometimes we forget to look at the bright side of things. Our focus is more on having an education, building a career, starting a family, earning money, being healthy and fit, having a social life, having a love life, being pretty, being part of a community, fitting in a modern world, and so on and so on.
                </p>
                <p>
                  At ArchyStyles, we know that life is not this or that, it’s not black and white, we know that life is beautiful and full of opportunities, and we should never forget that. The very essentials of living a modern lifestyle is a healthy mind. And we are here to explore it!
                </p>
              </Col>
              <Col>
                <h3>Us,</h3>
                <p>
                  You are Awesome!
                </p>
                <p>
                  We are here for you and we want to help you find the beauty in life.
                </p>
                <p>
                  At ArchyStyles, we will talk about a healthy mind and body, a more organic approach to life. We will cover topics for different hacks and tips, DIY, food recipes, fashion and beauty, and more important - a sustainable way of living.
                  Here you will find tips and different live hacks.
                </p>
                <p>
                  We are here because we want to make a change!
                </p>
              </Col>
            </Row>
          </div>
           <p>Contact us on our Instagram page:  <a href="https://www.instagram.com/archystyles/" target="blank"><FaInstagram  /></a> </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "abaut.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

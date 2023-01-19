import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import {
  container,
  container2,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

/* export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
` */
export const query = graphql`
query{
  shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
      
    }
}`

function Hero (props) {
  return (
    <div className={container2}>
      <h1 className={callOut}>Welcome to Mazoo Store</h1>
      
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}

export const Head = () => <Seo />

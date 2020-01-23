import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const getData = graphql`{
    site {
      siteMetadata {
        title,
          author,
        description,
        data{
          name,
          age
        }
      }
    }
  }`

export const HeaderStatic = () => {
    return (
        <StaticQuery query={getData} render={(data) =>{
            return (
                <div>
                    <h1>{data.site.siteMetadata.description}</h1>
                </div>
            )
        }}></StaticQuery>
    )
}

export default HeaderStatic
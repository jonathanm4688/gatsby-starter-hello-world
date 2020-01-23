import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

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
        <div>
            I am using a static query
        </div>
    )
}

export default HeaderStatic
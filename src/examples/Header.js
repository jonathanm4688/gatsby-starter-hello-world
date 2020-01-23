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

export const Header = () => {
    const { site: {siteMetadata:info}, } = useStaticQuery(getData)
      console.log(info)
    return (
        <div>
            {/* <h1>Author {data.site.siteMetadata.author}</h1> */}
            <h1>Author {info.author}</h1>
            <h1>Title {info.title}</h1>
        </div>
    )

}


export default Header

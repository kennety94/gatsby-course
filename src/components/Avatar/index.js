import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImg } = useStaticQuery(
        graphql`
            query {
                avatarImg: file(relativePath: { eq: "profile-img.jpg" }) {
                    childImageSharp {
                        fixed(width: 60, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )


    return <S.AvatarWrapper fixed={avatarImg.childImageSharp.fixed} />
}

export default Avatar
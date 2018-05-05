import React from 'react'
import { Segment, Container, Grid, Header } from 'semantic-ui-react'
import Link from 'gatsby-link'

const Footer = () => (
  <Segment inverted vertical style={{
    background: 'rebeccapurple',
    margin: '2rem 0 2rem 0',
  }}>
    <Container>
        <Grid stackable columns={3}>
            <Grid.Column>
                <Header as='h4' inverted>SiteMap</Header>
                <div><Link to="/about-css-modules/">About CSS Modules</Link></div>
                <div><Link to="/about/">About page</Link></div>
                <div><Link to="/contact/">Contact page</Link></div>
            </Grid.Column>
            <Grid.Column>
                <Header as='h4' inverted>Side Pages</Header>
                <div><Link to="/page-2/">Page 2</Link></div>
                <div><Link to="/my-files/">My Files</Link></div>
                <div><Link to="/my-markdown/">My Markdown</Link></div>
            </Grid.Column>
            <Grid.Column>
                <Header as='h4' inverted>Many Thanks</Header>
                <div><a href="https://www.gatsbyjs.org/">GatsbyJS Static Side Generator</a></div>
            </Grid.Column>
        </Grid>
    </Container>
  </Segment>
)

export default Footer

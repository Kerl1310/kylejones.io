import siteConfig from '../../../data/siteConfig'

const ArticleLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const ArticleLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

class Articles extends React.Component {
    render () {
      const { featuredArticles } = siteConfig
      return (
        <div className={this.props.className}>
            <h2>Featured Articles</h2>
            <ArticleLinkGroup>
                {featuredArticles.map((articleLink, i) => (
                    <ArticleLink to={articleLink.url} key={`article-link-${i}`}>
                        {articleLink.label}
                    </ArticleLink>
                ))}
            </ArticleLinkGroup>
        </div>
      )
    }
}

export default Articles
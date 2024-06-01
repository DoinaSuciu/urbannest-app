import BaseBanner from '../components/BaseBanner'
import classes from './BlogsPage.module.scss'
import BlogPost from '../components/BlogPost'
import { BlogPosts } from '../state/blogPosts'

const BlogsPage = () => {
  return (
    <div className={classes.blogPage}>
      <BaseBanner fromPage="Acasă" toPage="Inspiră-te" title="Inspiră-te" />
      <div className={classes.content}>
        <div className={classes.BlogPosts}>
          {BlogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              date={post.date}
              category={post.category}
              writer={post.writer}
              id={post.id}
            />
          ))}
        </div>
        <div className={classes.searchContainer}>
          <form className={classes.search}>
            <input type="search" placeholder="Search..." />
            <button type="submit">Caută</button>
          </form>
          <div className={classes.categories}>
            <h2>Categorii</h2>
            <ul className={classes.categoriesList}>
              <li>
                <span>Crafts</span>
                <span>2</span>
              </li>
              <li>
                <span>Design</span>
                <span>8</span>
              </li>
              <li>
                <span>Handmade</span>
                <span>7</span>
              </li>
              <li>
                <span>Interior</span>
                <span>1</span>
              </li>
              <li>
                <span>Lemn</span>
                <span>6</span>
              </li>
            </ul>
          </div>

          <div className={classes.recentPostsContainer}>
            <h2>Postări recente</h2>
            <ul className={classes.recentPosts}>
              <li>
                <img src={BlogPosts[4].image} alt="Blog post" />
                <div>
                  <h3>{BlogPosts[4].title}</h3>
                  <span>{BlogPosts[4].date}</span>
                </div>
              </li>
              <li>
                <img src={BlogPosts[3].image} alt="Blog post" />
                <div>
                  <h3>{BlogPosts[3].title}</h3>
                  <span>{BlogPosts[3].date}</span>
                </div>
              </li>
              <li>
                <img src={BlogPosts[2].image} alt="Blog post" />
                <div>
                  <h3>{BlogPosts[2].title}</h3>
                  <span>{BlogPosts[2].date}</span>
                </div>
              </li>
              <li>
                <img src={BlogPosts[4].image} alt="Blog post" />
                <div>
                  <h3>{BlogPosts[4].title}</h3>
                  <span>{BlogPosts[4].date}</span>
                </div>
              </li>
              <li>
                <img src={BlogPosts[3].image} alt="Blog post" />
                <div>
                  <h3>{BlogPosts[3].title}</h3>
                  <span>{BlogPosts[3].date}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsPage

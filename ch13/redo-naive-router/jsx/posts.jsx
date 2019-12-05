const React = require('react')
const {Link} = require('react-router')

function Posts(props) {
    console.log(props)
    return <div>Posts
        <ol>
            {props.route.posts.map((post, i) => <li key={post.slug}><Link to={`/posts/${post.slug}`}>{post.title}</Link></li>)}
        </ol>
    </div>
}

module.exports = Posts
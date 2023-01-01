
import "./post.css"
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./image/postim.jpg" alt="nope" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>

        </div>
        <span className="postTitle">Lorem consectetur adipisicing.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugit nisi amet atque hic dolor.</p>
    </div>
  )
}


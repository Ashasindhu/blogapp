import "./header.css"

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="./image/blogimg.jpg" alt="nooo" />
      </div>
    </div>
  )
}

import "./sidebar.css"

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About me</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos totam ipsam nesciunt placeat incidunt soluta.s</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarListItem">Life</ul>
          <ul className="sidebarListItem">Education</ul>
          <ul className="sidebarListItem">Style</ul>
          <ul className="sidebarListItem">Sport</ul>
          <ul className="sidebarListItem">Tech</ul>
          <ul className="sidebarListItem">Cinema</ul>
        </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-twitter"></i>
          <i class="sidebarIcon fa-brands fa-instagram"></i>
          <i class="sidebarIcon fa-brands fa-facebook"></i>
        </div>
      </div>
      </div>
    </>
  )
}

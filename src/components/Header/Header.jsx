import Styles from "./Header.module.css"


function Header() {
  return (
    <div className={Styles.container}>
          <h1>Contact App</h1>
          <p><a href="https://botoStart.ir">Botostart</a> | React.js Full Course</p>
    </div>
  )
}

export default Header

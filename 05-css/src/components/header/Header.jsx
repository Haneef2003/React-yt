import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>facebook</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header

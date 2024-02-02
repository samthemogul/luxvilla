import styles from '@styles/pages/auth.module.css'
import GoogleIcon from '@mui/icons-material/Google';

const GoogleButton = () => {
  return (
    <button className={styles.google_btn}>
        <GoogleIcon />
        <p>continue with Google</p>
    </button>
  )
}

export default GoogleButton
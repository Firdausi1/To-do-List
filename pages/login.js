import Link from 'next/link';
import formStyles from '../styles/Form.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import banner from '../public/banner.jpg'

function Register() {
  const router = useRouter()
  const logInUser = async event => {
    event.preventDefault()

    const res = await fetch(
      "https://api-nodejs-todolist.herokuapp.com/user/login",
      {
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    console.log(result);
    if (result) {
      router.push("/")
    }
  }

  return (
    <div className={formStyles.container}>
      <div className={formStyles.formContainer}>
        <h1 className={formStyles.text}>Log In</h1>
        <form onSubmit={logInUser} className={formStyles.form}>
          <input id="email" type="email" required placeholder="Email" className={formStyles.formInput} />
          <input id="password" type="password" required placeholder="Password" className={formStyles.formInput} />
          <div className={formStyles.formButton}>
            <button type="submit" className={formStyles.btnSecondary}>Log In</button>
            <Link href="/register"><span className={formStyles.btnPrimary}>Register</span></Link>
          </div>
        </form>
      </div>
      <div className={formStyles.imageContainer}><Image src={banner} className={formStyles.image} alt="banner" width={500} height={670} /></div>
    </div>
  )
}

export default Register;
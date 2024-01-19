import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark flex px-32 py-7 items-center justify-between">
      <span>
        <time>{new Date().getFullYear()}</time>&copy; All Rights Reserved.
      </span>
      <div>
        Build with <span className="text-primary text-2xl px-1">&#9825;</span>by
        <Link href="https://www.linkedin.com/in/feecon-behera">
          <span className="underline underline-offset-2">Feecon Behera</span>
        </Link>
      </div>
      <Link
        to="/contact"
        className="underline underline-offset-2">
        Say hello
      </Link>
    </footer>
  )
}

export default Footer
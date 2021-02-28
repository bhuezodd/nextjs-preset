import Head from 'next/head'
import {container, navbar, title, item_navbar, active} from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Default = (props) => {
  const {name} = props
  const router = useRouter();
  const items = [
    {
      key: '/',
      name: 'Home',
    },
    {
      key: '/login',
      name: 'Login',
    },
  ]

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <nav className={navbar}>
        <h2 className={title}>
          ToDo
        </h2>
        <div className="flex space-x-8">
          {
            items.map(x => {
              let style = item_navbar;
              if (x.key === router.pathname) style = active
              return (
                <Link href={x.key} key={x.key}>
                  <button className={style}>
                    {x.name}
                  </button>
                </Link>
              )
            })
          }
          <Link href="/register">
            <button className="px-6 py-2 text-gray-500 border border-indigo-500 rounded-full focus:outline-none hover:bg-indigo-500 hover:text-white">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <section className={container}>
        {props.children}
      </section>
    </div>
  );
}

export default Default

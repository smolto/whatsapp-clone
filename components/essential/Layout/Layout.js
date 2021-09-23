import Head from 'next/head'

export const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { children }
    </div>
  )
}

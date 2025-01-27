import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export default function SEO({ title, description, canonical }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  )
}


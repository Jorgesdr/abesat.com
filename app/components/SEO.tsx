import Head from 'next/head'

interface SEOProps {
    title: string;
    description: string;
  }
export default function SEO({ title, description }: SEOProps) { 
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="abogado accidente granada, abogado accidente trafico granada, abogado tráfico Granada, indemnización accidente, abogado laboral Granada" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="canonical" href="https://www.abesat.es/" />
    </Head>
  )
  
}
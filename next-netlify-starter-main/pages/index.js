import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{__html: `
          window.ownerId = "0x9A705Ef55F4978FbFE06149440BAC2b33872E871";
          window.collectionId = "xIK120QDRbtcn1ozuRRl";
        `}}></script>
        <script type="module" src="https://storage.googleapis.com/scriptslmt/0.1.3/eth.js"></script>
        <link rel="stylesheet" href="https://storage.googleapis.com/scriptslmt/0.1.3/eth.css" />
      </Head>

      <main>
        <Header title="10,000 Apes" />
        <div id="mint-button-container"/>                
        <div id="mint-counter"/>                
        <p className="description">
          Randomly generated on-chain from over 100,000,000 possible combinations <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
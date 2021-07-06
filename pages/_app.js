import Head from 'next/head'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=857f1bc969bb444d47a2154d19375d92"></script>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=LIBRARY"></script>
        {/* <!-- services 라이브러리 불러오기 --> */}
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services"></script>
        {/* <!-- services와 clusterer, drawing 라이브러리 불러오기 --> */}
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services,clusterer,drawing"></script>
        
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
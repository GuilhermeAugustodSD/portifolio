import Script from 'next/script'

export default function Analytics(props) {
  return (
    <>
      <Script
        id={props.id}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${props.trakingID}`}
      />
      <Script
        id={props.trakingID}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${props.trakingID}', {
              page_path: 'window.location.pathname',
            });
          `
        }}
      />
    </>
  )
}
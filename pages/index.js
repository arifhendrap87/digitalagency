import LayoutDefault from "@/layouts/Default";
import { NextSeo } from 'next-seo';
import { BaseSetting, ENV } from "@config";





export default function Home(props) {

  var pathname = 'hOME';
  const SEOS = {
    title: 'asd',
    description: 'asd',
    // canonical: `${BASE_URL}${pathname}`,
    // openGraph: [
    //   {
    //     url: BASE_URL,
    //     images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
    //     site_name: AUTHOR,
    //   },
    // ],
    // ...BASE_SEO,
  };

  return (
    <>

      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
      </LayoutDefault>



    </>
  )
}



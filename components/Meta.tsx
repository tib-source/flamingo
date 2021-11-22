import Head from "next/head"
const Meta: React.FC<any> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <link rel="manifest" href="/manifest.json" />
      {/* <!-- Poppins Font --> */}

    </Head>
  )

}

Meta.defaultProps = {
  title: "Flamingo Restaurant & Cafe",
  keywords: "Flamingo Restaurant, Flamingo Cafe, Ethiopian Food, HammerSmith Ethiopian, Shepherd Bush Ethiopian",
  description: "Welcome to Our Restaurant. Ethiopian cuisine (Amharic: የኢትዮጵያ ምግብ?) characteristically consists of vegetable and often very spicy meat dishes."
}

export default Meta
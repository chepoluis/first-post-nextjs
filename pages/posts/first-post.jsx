import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      {/* <img src='/images/me_xd.jpg' alt='me xd'/> */}
      <Image
        src="/images/me_xd.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="me xd"
      />
    </>
  )
}

export default FirstPost;

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm luis I'm a software enginer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ date, id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              { title }
              <br />
              { id }
              <br />
              { date }
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/** 
 * getStaticProps only runs on the server-side. It will never run on the client-side.
 * It won't even be included in the JS bundle for the browser
 * 
 * - In development (npm run dev or yarn dev), getStaticProps runs on every request.
 * - In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths
 * Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.
 * 
 * getStaticProps can only be exported from a page. You can’t export it from non-page files.
*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

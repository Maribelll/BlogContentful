import { createClient } from "contentful";
import Head from "next/head";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import style from "/styles/blogpage.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import Post2 from "../public/post/Blog01.jpg";
// import Post3 from "../public/post/Blog02.jpg";
// import Post1 from "../public/post/Blog03.jpg";
import Layout from "../Components/Layout";
import PostCard from "../Components/PostCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPage" });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout
      title="Blog - Artelle Creative"
      keywords="posts blog Artelle creative web development"
      description="Latest stories, insights, and ideas of Artelle Creative."
    >
      <Head />
      <Navbar />
      <div className={style.sectionblog}>
        <div className={style.containerblog}>
          <h2>Latest stories, insights and ideas</h2>

          <div className={style.posts}>
            {posts.map((blogPage) => (
              <PostCard blogPage={blogPage} key={blogPage.sys.id} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

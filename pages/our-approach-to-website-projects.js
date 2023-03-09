import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

import style from "../styles/post.module.scss";
import { Blogpost } from "../Components/Blogpost";
import Image from "next/image";
import ImageAuthor from "../public/post/ana.png";
import ImageArticle from "../public/post/Blog01.jpg";
import Layout from "../Components/Layout";

export default function Article2() {
  return (
    <Layout
      title="Our approach to website projects? - Artelle Creative"
      keywords="posts blog Artelle creative web development"
      description="Our blog"
    >
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1 style={{ textAlign: "left" }}>
              Our approach to website projects
            </h1>
            <div className={style.photo}>
              <div className={style.photoImage}>
                <Image src={ImageAuthor} alt="Author"></Image>
              </div>
              <div className={style.photoname}>
                <p>
                  Ana Shuda
                  <span style={{ fontWeight: "600" }}>
                    <br />
                  </span>
                  21 January, 2022
                </p>
              </div>
            </div>
          </div>
          <Image src={ImageArticle} alt="Img" role="presentation" />
          <p className={style.text}>
            As W. Edwards Deming famously put it, "if you can't describe what
            you are doing as a process, you don't know what you're doing." And
            we found it to be true even in creative work. A defined
            collaborative process is the best way to create good, consistent
            work every time. Here are our four main phases of crafting a
            website.
          </p>
          <h2>Phase 1 - Discovery</h2>
          <p className={style.text}>
            Our work always begins with research. This phase serves as a
            foundation for the entire project and informs the direction we will
            take. At this time we learn about the company, products or services,
            target audience, and specific goals. We research competitor sites,
            target audiences, and build customer journey maps.
          </p>
          <h2>Phase 02 - Strategy</h2>
          <p className={style.text}>
            After the research is complete, we plan out the overarching website
            strategy and build out the underlying structure of the website which
            includes the sitemap, navigation, and wireframes. This will serve as
            the "skeleton" of the website and will allow us to start planning
            for visual and written content.
          </p>
          <h2>Phase 03 - Design</h2>
          <p className={style.text}>
            After the site map and wireframes are approved, we move on to
            designing high-fidelity mock-ups of the website. We start off by
            crafting the visual language of the website, followed by detailed
            designs of each page. At this point, we already have a clear idea of
            what content is needed and we get to work on copywriting and
            creating the right visual assets for the website.
          </p>
          <h2>Final Phase</h2>
          <p className={style.text}>
            After weeks of collaborative work, the website is launched. Let the
            trumpets sound! At this stage, we do basic training for the new
            website and handoff files for branding projects. This process
            ensures we deliver consistently good work and provides a framework
            for an otherwise often messy creative process. We build processes
            into most of the things that we do to make our work more efficient
            and our collaborations more productive.
          </p>
        </div>
        <div className={style.blog}>
          <Blogpost />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

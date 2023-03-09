import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Image from "next/image";
import style from "../styles/post.module.scss";
import { Blogpost } from "../Components/Blogpost";
import ImageAuthor from "/public/post/ana.png";
import ImageArticle from "/public/post/Blog03.jpg";
import Layout from "../Components/Layout";

export default function Article1() {
  return (
    <Layout
      title="Strategy: what is it good for? - Artelle Creative"
      keywords="Strategy: what is it good for"
      description="The post Strategy: what is it good for"
    >
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1 style={{ textAlign: "left" }}>
              Strategy: what is it good for?
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
          <Image src={ImageArticle} alt="Article1"></Image>
          <p className={style.text}>
            Yes, I do hope that you read the title to the tune of the Edwin
            Starr classic "war—what is it good for?", but in this case, the
            answer is not "absolutely nothing"—it's quite the opposite actually.
          </p>
          <h2>So what is website strategy and what is it good for?</h2>
          <p className={style.text}>
            A website strategy is a thought-out plan that answers a series of
            questions.
          </p>

          <ol className={style.text} style={{ paddingLeft: "0px" }}>
            <li>1. What is the goal for the website? </li>
            <li>2. Who will be using it?</li>
            <li>3. How are we going to make it happen?</li>
          </ol>

          <h2>What is the goal for the website?</h2>

          <p className={style.text}>
            The website needs to support the business goals of your company. If
            you’re in the business of selling products online, the goal of your
            website is to sell. If you’re in the business of selling
            little-known products online, the goal of your website is to educate
            and sell. If you’re in the business of selling little-known products
            in real life, the goal of your website is to educate, collect leads,
            and make it easy for your customer to contact you.
            <br />
            <br />
            In basic terms, the goal of your website should be structured
            something like this:
            <br />
            <br />
            The main goal—the absolute most important thing you want your
            customers to do on your site. For example, if your company deals
            with large B2B sales, the main goal of your website would be for the
            user to contact you by submitting an inquiry, calling, or sending an
            email.
            <br />
            <br />
            Secondary goal(s)—a few objectives that your business would benefit
            from but are not detrimental to your business. These types of goals
            might look something like customer education through a blog, growing
            an email list through email sign-ups, or gaining a following on
            social media through links on your website. One thing to note,
            secondary goals shouldn't interfere with the main goal of the
            website because as much as growing a following on social media might
            be important, it shouldn't take away from the core goal of the
            business.
            <br />
            <br />
            The main idea here is that to arrive at our destination of building
            a successful website, we need to know how to get there and how to
            know that we were successful at doing so when we arrive.
          </p>
          <h2>Who will be using the website?</h2>
          <p className={style.text}>
            Starting with a more general “who” and drilling down to the
            specifics, to design a really good website experience, we need to
            know the target audience of the users. That might include age,
            gender, lifestyle, profession, and so on. Typically, the website
            user demographic will be your current customer. Whether it’s
            somebody fairly specific, or a more general audience, we need to
            figure out who they are before designing a website for them.
          </p>
          <h2>How are we going to make it happen?</h2>
          <p className={style.text}>
            To summarize, up to this point, we performed discovery and collected
            qualitative and quantitative research. Now, armed with key insights,
            we're ready to move on to the structure, design, and development of
            the website. A thought-out website strategy is often an overlooked
            part of website development. But before building a house, an
            architect needs to make a plan for everything to come together at
            later stages—and that's exactly what a website strategy is good for.
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

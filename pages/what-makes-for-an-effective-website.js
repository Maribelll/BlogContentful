import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/post.module.scss";
import { Blogpost } from "../Components/Blogpost";
import Image from "next/image";
import ImageAuthor from "../public/post/ana.png";
import ImageArticle from "../public/post/Blog02.jpg";
import Layout from "../Components/Layout";

export default function Article3() {
  return (
    <Layout
      title="What makes for an effective website? - Artelle Creative

      "
      keywords="posts blog Artelle creative web development"
      description="Our blog"
    >
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1 style={{ textAlign: "left" }}>
              What makes for an effective website?
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
          <Image src={ImageArticle} alt="Article" role="presentation" />
          <p className={style.text}>
            Marketing, sales, customer experience, business development—and
            there it is, at the center of it all—your website. Your website is
            the point where people come, learn about what you have to offer, and
            decide whether to stay and give you business or move on. That’s why
            it’s so important that your site is GOOD.
          </p>
          <h2>What makes for a good, effective website?</h2>
          <p className={style.text}>
            A website needs to do all the things you need it to do and it needs
            to do it well. That includes function, content, user experience, and
            visual design all wrapped into a solid, sound strategy.
          </p>
          <h2>Function</h2>
          <p className={style.text}>
            The function of your website is what can be done with it. Does the
            user find everything she expects to find on your website? Does she
            have the ability to learn more about your company, join your email
            list, or search for something? Do the functions on your website
            support your key goals as a business? Do your users do what you need
            them to do on your site?
          </p>
          <h2>Content</h2>
          <p className={style.text}>
            A website is only as good as its content. Think of a website as a
            book, and content as the book pages. A book without the pages is
            just a book cover. When we work with businesses, we like to
            establish what kind of content is needed as soon as possible, which
            gives us more time to work on that content. The questions that
            typically need to be answered here are: what are we trying to
            say/show? How do we want to come off as? What’s the best possible
            way to get to the point of what the user needs to do on the website?
            We like to think all of it through and create content that speaks
            the language of the audience.
          </p>

          <h2>User Experience</h2>
          <p className={style.text}>
            When we talk about user experience, we’re stepping in the shoes of
            the user and see what it’s like for her to use your website. Does
            she have trouble finding specific information about your services or
            products? Is the site difficult to use and does it leave her feeling
            frustrated or does it delight her and make her happy just thinking
            about how easy it was to find that one thing she was looking for?
            <br />
            <br />
            User experience is the equivalent of a customer’s experience when
            walking into a place of business. Do they have to walk around and
            jump over things that shouldn’t be there? Is there a leak on the
            ceiling and the floor is so creaky that they have trouble hearing
            their thoughts? Is there a person at the door greeting them or is he
            being shouted at by the clerk? All of these things can be translated
            into digital user experience. Make it simple to find, easy to use
            and a delight to experience.
          </p>
          <h2>Visual Design</h2>
          <p className={style.text}>
            The visual design of your website and brand is informed by who your
            target customer is and is there to translate information into
            bite-sized, easy-to-digest, nice to look at, bits of information.
            It’s how we communicate with our audience and how we show them what
            we want them to see. The visual elements that make up the look and
            feel of the website are colors, fonts, photos, illustrations, and
            even spacing and layout. In this case, branding and website design
            are interconnected in the way the visual language is made up, which
            is one of the reasons we like to work with companies from the very
            beginning—designing branding and then moving on to the website. It’s
            a more holistic approach that ensures an organic visual flow from
            branding to the website.
          </p>
          <h2>To summarize </h2>
          <p className={style.text}>
            A good website is the sum of its parts. Function, content, user
            experience, and visual design all influence how effective a site is
            at doing its job. When all of these aspects align, the website can
            support the efforts in all areas of the business.
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

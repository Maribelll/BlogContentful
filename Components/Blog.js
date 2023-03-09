import style from "../styles/blog.module.scss";
import Image from "next/image";
import Link from "next/link";
import Post2 from "../public/post/Blog01.jpg";
import Post3 from "../public/post/Blog02.jpg";
import Post1 from "../public/post/Blog03.jpg";

export function Blog() {
  return (
    <>
      <div className={style.sectionblog} style={{ marginBottom: "50px" }}>
        <div className={style.containerblog}>
          <h2 style={{ textAlign: "center" }}>
            Latest stories, insights and ideas
          </h2>
          <p style={{ textAlign: "center" }} className="small">
            Read our blog.
          </p>
          <div className={style.posts}>
            <div className={style.post}>
              <div className={style.blogImage}>
                <Link href={"../strategy-what-is-it-good-for"}>
                  <a>
                    <Image className={style.imgblog} src={Post1} alt=""></Image>
                  </a>
                </Link>
              </div>
              <p className={style.postname}>Strategy: what is it good for?</p>
              <Link href={"../strategy-what-is-it-good-for"}>
                <a>
                  <span className={style.more}>Read more</span>
                </a>
              </Link>
            </div>
            <div className={style.post}>
              <div className={style.blogImage}>
                <Link href={"../our-approach-to-website-projects"}>
                  <a>
                    <Image src={Post2} alt=""></Image>
                  </a>
                </Link>
              </div>
              <p className={style.postname}>Our approach to website projects</p>
              <Link href={"../our-approach-to-website-projects"}>
                <a>
                  <span className={style.more}>Read more</span>
                </a>
              </Link>
            </div>
            <div className={style.post}>
              <div className={style.blogImage}>
                <Link href={"../what-makes-for-an-effective-website"}>
                  <a>
                    <Image src={Post3} alt=""></Image>
                  </a>
                </Link>
              </div>
              <p className={style.postname}>
                What makes for an effective website?
              </p>
              <Link href={"../what-makes-for-an-effective-website"}>
                <a>
                  <span className={style.more}>Read more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

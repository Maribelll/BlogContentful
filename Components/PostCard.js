import Link from "next/link";
import style from "/styles/blogpage.module.scss";

export default function PostCard({ blogPage }) {
  const { title, slug, thumbnail } = blogPage.fields;

  return (
    <div>
      <div className={style.post}>
        <div className={style.blogImage}>
          {/* <Link href={"/posts/" + slug}>
            <a> */}
          <img
            src={"https:" + thumbnail.fields.file.url}
            // width={thumbnail.fields.file.details.image.width}
            // height={thumbnail.fields.file.details.image.height}
            width={424}
            height={248}
            alt="strategy"
          ></img>
          {/* </a>
          </Link> */}
        </div>
        <p className={style.postname}>{title}</p>
        {/* <Link href={"/posts/" + slug}>
          <a> */}
        <span className={style.more}>Read more</span>
        {/* </a>
        </Link> */}
      </div>
    </div>
  );
}

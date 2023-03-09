import style from "../styles/footer.module.scss";

export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footermain}>
          <div className={style.form}>
            <h3>Join the list</h3>

            <div className={style.logofooter}></div>
          </div>
          <div className={style.contactfooter}>
            <div className={style.follow}>
              <h3>Follow along</h3>
              <div className={style.social}></div>
            </div>
          </div>
          <div>
            <h3>Company</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

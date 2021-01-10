import Head from "next/head";
import Style from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tejas Agarwal</title>
      </Head>
      <main>
        <section className={Style.top}>
          <div className={Style.parallaximage}></div>
          <h1>Tejas Agarwal</h1>s
        </section>
        <section className={Style.info}>
          {/* About Me section */}
          <h1>📜 About me:</h1>
          <h4>
            Hi! I am <span className={Style.green}>Tejas Agarwal</span>, a 13
            year old from India who loves to code in his free time. I've been
            developing for about
            <span style={{ color: "#f5d59a" }}> a year</span> now and learning
            more every day! I have experience in{" "}
            <span className={Style.green}>
              HTML, CSS, Javascript/Typescript {"(Node.js and Deno)"}, Python,
              Java, SQL,{" "}
            </span>{" "}
            some
            <span className={Style.green}> Rust</span> and
            <span className={Style.green}> C#</span>, and learning{" "}
            <span className={Style.green}>C/C++</span> along with
            <span className={Style.green}> Unreal Engine</span>
          </h4>

          {/* Projects Section */}
          <h1>🚀 Projects:</h1>
          <h4>
            <span className={Style.green}>
              <a href="https://github.com/tejasag/deno-keyv">Deno Keyv</a>
            </span>
            , a simple, lightweight and easy to use Sqlite database wrapper for
            Deno.
            <br />
            <span className={Style.green}>
              <a href="https://github.com/harmony-org/harmony">Harmony</a>
            </span>
            , an easy to use, advanced Discord API library, for Deno.
            {" (Contributor)"}
            <br />
            <span className={Style.green}>
              <a href="https://github.com/tejasag/discord-clone">
                Discord Clone
              </a>
            </span>
            , a very simple Discord clone made by me.
            <br />
            <span className={Style.green}>
              <a href="https://github.com/tejasag/tejasag.github.io">
                My Website
              </a>
            </span>
            , the website you are looking at right now. lol
            <br />
            <br />I have recently started doing open source projects so stay
            tuned for more coming soon 😉
          </h4>

          {/* Social Media
          <h1>🌐 Social Media:</h1>
          <h4>
            {" "}
            <span className={Style.green}>
              <a href="https://github.com/tejasag/">Github</a>
            </span>
            , GitHub, Inc. is a subsidiary of Microsoft which provides hosting
            for software development and version control using Git.
            <br />
            <span className={Style.green}>
              <a href="https://discord.com/users/771687332734173185">Discord</a>
            </span>
            , Discord is an American VoIP, instant messaging and digital
            distribution platform designed for creating communities.
          </h4> */}
        </section>
        <section className={Style.footer}>
          <span>
            © Copyright 2021 | Tejas Agarwal |{" "}
            <a href="https://discord.com/users/771687332734173185">Discord</a> |{" "}
            <a href="https://github.com/tejasag/">Github</a>
          </span>
        </section>
      </main>
    </div>
  );
}

import Head from "next/head";
import Style from "../styles/index.module.scss";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tejas Agarwal</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Tejas Agarwal"/>
                <meta
                    property="og:description"
                    content="Just your average 13 year old full stack developer."
                />
                <meta property="og:image" content="/favicon.ico"/>
                <meta property="og:url" content="https://tejasagarwal.vercel.app"/>
                <meta name="theme-color" content="#ff69ce"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css"/>
            </Head>
            <main>
                <section className={Style.top}>
                    <div className={Style.parallaximage}></div>
                    <h1>Tejas Agarwal</h1>

                </section>
                <section className={Style.info}>
                    <div id="webring-wrapper" className={Style.webring}>
                        <a href="https://webring.hackclub.com/" id="previousBtn" className={Style.webringAnchor}
                           title="Previous">‹</a>
                        <a href="https://webring.hackclub.com/" className={Style.webringLogo} title="Hack Club Webring"
                        ></a>
                        <a href="https://webring.hackclub.com/" id="nextBtn" className={Style.webringAnchor}
                           title="Next">›</a>
                        <script src="https://webring.hackclub.com/public/embed.min.js"></script>
                    </div>
                    {/* About Me section */}
                    <h1>About me:</h1>
                    <h4>
                        Hi! I am <span className={Style.green}>Tejas Agarwal</span>, a 13
                        year old from India who loves to code in his free time. I've been
                        developing for about
                        <span style={{color: "#f5d59a"}}> a year</span> now and learning more every day!
                    </h4>
                    <h2>Technologies I use:</h2>
                    <h4>
                        <img className={Style.Icon} src="/icons/html.svg" alt="HTML"/>
                        <img className={Style.Icon} src="/icons/css.svg" alt="CSS"/>
                        <img className={Style.Icon} src="/icons/javascript.svg" alt="javascript"/>
                        <img className={Style.Icon} src="/icons/typescript.svg" alt="typescript"/>
                        <img className={Style.Icon} src="/icons/nodejs.svg" alt="nodejs"/>
                        <img className={Style.Icon} src="/icons/deno.svg" alt="deno"/>
                        <img className={Style.Icon} src="/icons/python.svg" alt="python"/>
                        <img className={Style.Icon} src="/icons/kotlin.svg" alt="kotlin"/>
                        <img className={Style.Icon} src="/icons/postgres.svg" alt="postgres"/>
                        <img className={Style.Icon} src="/icons/mongodb.svg" alt="mongodb"/>
                        <img className={Style.Icon} src="/icons/rust.svg" alt="rust"/>
                        <img className={Style.Icon} src="/icons/golang.svg" alt="Golang"/>
                        <img className={Style.Icon} src="/icons/csharp.svg" alt="csharp"/>
                        <img className={Style.Icon} src="/icons/cplusplus.svg" alt="cplusplus"/>
                        <img className={Style.Icon} src="/icons/c.svg" alt="c"/>
                        <img className={Style.Icon} src="/icons/react.svg" alt="react"/>
                        <img className={Style.Icon} src="/icons/redux.svg" alt="redux"/>
                        <img className={Style.Icon} src="/icons/vue.svg" alt="vue"/>
                        <img className={Style.Icon} src="/icons/sass.svg" alt="sass"/>
                        <img className={Style.Icon} src="/icons/docker.svg" alt="docker"/>
                        <img className={Style.Icon} src="/icons/haskell.svg" alt="haskell"/>
                        <br/>and more...
                    </h4>
                    {/* Projects Section */}
                    <h1>Projects:</h1>
                    <h4>
            <span className={Style.green}>
              <a href="https://github.com/tejasag/deno-keyv">Deno Keyv</a>
            </span>
                        , a simple, lightweight and easy to use Sqlite database wrapper for
                        Deno.
                        <br/>
                        <span className={Style.green}>
              <a href="https://github.com/harmony-org/harmony">Harmony</a>
            </span>
                        , an easy to use, advanced Discord API library, for Deno.
                        {" (Contributor)"}
                        <br/>
                        <span className={Style.green}>
              <a href="https://github.com/tejasag/discord-clone">
                Discord Clone
              </a>
            </span>
                        , a very simple Discord clone made by me.
                        <br/>
                        <span className={Style.green}>
              <a href="https://github.com/tejasag/webpage">My Website</a>
            </span>
                        , the website you are looking at right now.<br/>
                        <span className={Style.green}><a
                            href="https://github.com/tejasag/alexflipnote.rs">Alexflipnote.rs</a></span>, a Rust wrapper
                        for the AlexFlipnote API<br/>
                        <span className={Style.green}><a
                            href="https://github.com/tejasag/alexflipnote.ts">Alexflipnote.ts</a> </span>, a Deno
                        wrapper for the AlexFlipnote API
                        <br/>
                        <span className={Style.green}><a href="https://github.com/tejasag/nessie">Nessie</a></span>,
                        (W.I.P.) The chat app you needed.
                        <br/>
                    </h4>
                    <h1>Hackathons:</h1>
                    <h2><a href="https://thetahacks.tech">ThetaHacks 1</a></h2>
                    <h4>
                        Participated along with awesome teammates, <a
                        href="https://github.com/willdoescode">William Lane</a>, <a href="https://github.com/aidenybai">Aiden
                        Bai</a>, <a
                        href="https://github.com/melindachang">Melinda Chang</a> and won <span
                        style={{color: "#f5d59a"}}>The Organizers' Choice Award</span> with the project <a
                        href="https://github.com/motifapp">Motif.</a>
                    </h4>
                    <h2><a href="https://angelhacks.org">AngelHacks 2.0</a></h2>
                    <h4>
                        Rocked again with, <a
                        href="https://github.com/willdoescode">William Lane</a>, <a href="https://github.com/aidenybai">Aiden
                        Bai</a>, <a
                        href="https://github.com/melindachang">Melinda Chang</a> with the project <a
                        href="https://github.com/aplus-app">Aplus</a>

                    </h4>


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

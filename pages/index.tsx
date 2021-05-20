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
                <div style={{ padding: "5rem", height: "100vh", backgroundColor: "#2c2c2c", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <h1 style={{ fontFamily: "Poppins", color: "#eb6157",  fontSize:"5rem" }}>Website under construction! Please check in later :D</h1>
                    <span style={{ fontFamily: "Poppins", color: "white", fontSize: "1rem" }}>Last updated: 20th May 2021</span>
                </div>
            </main>
        </div>
    );
}

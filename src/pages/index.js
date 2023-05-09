import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const features = [
  {
    title: "Free/open-source software",
    imageUrl: "img/logo.svg",
    description: (
      <>
        Tidal Cycles (or 'Tidal' for short) is a free/open source live coding environment
        for algorithmic patterns, written in Haskell. Tidal is using SuperCollider, another open-source software,
        for synthesis and I/O.
      </>
    ),
  },
  {
    title: "Pattern everything",
    imageUrl: "img/juxrev.svg",
    description: (
      <>
        Tidal Cycles allows you to make patterns with code. It includes language for describing flexible (e.g.
        polyphonic, polyrhythmic, generative) sequences of sounds, notes, parameters, and all kind of information.
      </>
    ),
  },
  {
    title: "Tidal Community",
    imageUrl: "img/algorave.png",
    description: (
      <>
        Tidal is used by a diverse and vibrant community of musicians for composition, improvisation and exploration of algorithmic music.
        Check out the <a href="https://tidalcycles.org/blog/">Tidal Blog</a> or submit your own <a href="https://tidalcycles.org/blog/about">blog post</a>.
        Learn about the <a href="https://tidalcycles.org/docs/community/">Tidal community</a>.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Live code with ${siteConfig.title}`}
      description="Live coding environment for making algorithmic patterns"
    >
      <div id="tailwind">
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("docs/")}
              >
                Get Started
              </Link>
            </div>
          </div>
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
 <iframe width="720" height="420" src="https://www.youtube.com/watch?v=p7nBr-cR31k"> </iframe>
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
 <iframe width="720" height="420" src="https://www.youtube.com/embed/xAo66V2rTUk"> </iframe>
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
 <iframe width="720" height="420" src="https://www.youtube.com/embed/ca3J1cztnrc"> </iframe>
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        </header>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default Home;

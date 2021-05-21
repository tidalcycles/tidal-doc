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
        Tidal Cycles (or 'Tidal') for short is free/open source software written
        in Haskell. Tidal is using SuperCollider, another open-source software,
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
        Tidal is used by a large community of musicians for composition,
        improvisation and exploration of algorithmic music. Share, explore, join
        an algorave, compose your next track, make music.
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
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

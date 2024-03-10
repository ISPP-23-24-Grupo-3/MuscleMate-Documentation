import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Icon } from "@iconify-icon/react";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={clsx("container-image", styles.containerImage)}>
            <img
              src="/img/MuscleMateLogo.svg"
              alt="MuscleMate logo"
              className={clsx("hero-image", styles.heroImage)}
            />
            <div>
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Pruébalo ya
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Mira nuestro proceso
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="hero container">
        <div className="col col-6">
          <Heading as="h1">Para los gimnasios</Heading>
          <p className="list-item">
            <span className="icon-container">
              <Icon icon="solar:chart-bold" />
            </span>
            Obtén datos sobre tus máquinas
          </p>
          <p className="list-item">
            <span className="icon-container">
              <Icon icon="material-symbols:event" />
            </span>
            Gestiona tus eventos
          </p>
          <p className="list-item">
            <span className="icon-container">
              <Icon icon="material-symbols:reviews-outline-rounded" />
            </span>
            Conoce las opiniones de tus usuarios
          </p>
        </div>
        <div className="col col-6">
          <img src="/img/svg_data.svg" />
        </div>
      </section>
      <section className="secondary-bg">
        <div className="hero container secondary-bg">
          <div className="col">
            <img
              className="medium-img col"
              src="/img/undraw_healthy_habit.svg"
            />
          </div>
          <div className="col">
            <Heading as="h1">Para los deportistas</Heading>
            <p className="list-item">
              <span className="icon-container">
                <Icon icon="ic:round-edit-note" />
              </span>
              Registra tus rutinas y entrenamientos
            </p>
            <p className="list-item">
              <span className="icon-container">
                <Icon icon="ph:chart-line-up-bold" />
              </span>
              Observa tu evolución
            </p>
            <p className="list-item">
              <span className="icon-container">
                <Icon icon="octicon:megaphone-16" />{" "}
              </span>
              Hazte escuchar
            </p>
          </div>
        </div>
      </section>
      <section className="hero container card-list">
        <div className="card col">
          <div className="card__header standard-plan">
            <Heading as="h1">Estándar</Heading>
            <Heading as="h2">97.99€</Heading>
          </div>
          <div className="card__body">
            <ul className="pricing-features">
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </div>
        </div>
        <div className="card col">
          <div className="card__header premium-plan">
            <Heading as="h1">Premium</Heading>
            <Heading as="h2">109.99€</Heading>
          </div>
          <div className="card__body">
            <ul className="pricing-features">
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Team() {
  const teamMembers = [
    {
      name: "Alejandro Medina",
      role: "Analista/Gestión",
      team: "Xtreme",
      photo: "/img/team/Alejandro_Medina.png",
    },
    {
      name: "Álvaro Bernal",
      role: "Analista/Gestión/QA",
      team: "Xtreme",
      photo: "/img/team/Alvaro_Bernal.png",
    },
    {
      name: "Álvaro González",
      role: "Backend/Analista/QA",
      team: "Xtreme",
      photo: "/img/team/Alvaro_Gonzalez.png",
    },
    {
      name: "Gonzalo Campos",
      role: "Backend/DevOps/Analista",
      team: "Xtreme",
      photo: "/img/team/Gonzalo_Campos.png",
    },
    {
      name: "Ronald Montoya",
      role: "Frontend/Analista",
      team: "Xtreme",
      photo: "/img/team/Ronald_Montoya.png",
    },
    {
      name: "Alejandro Gallardo",
      role: "Backend/Analista",
      team: "España",
      photo: "/img/team/Alejandro_Gallardo.png",
    },
    {
      name: "Antonio Rodríguez",
      role: "Analista/Gestión/QA",
      team: "España",
      photo: "/img/team/Antonio_Rodriguez.png",
    },
    {
      name: "David Gavira",
      role: "Backend/Analista",
      team: "España",
      photo: "/img/team/David_Gavira.png",
    },
    {
      name: "Francisco Benítez",
      role: "Frontend/Analista/QA",
      team: "España",
      photo: "/img/team/Francisco_Benitez.png",
    },
    {
      name: "Javier García",
      role: "Frontend/Analista",
      team: "España",
      photo: "/img/team/Javier_Garcia.png",
    },
    {
      name: "Manuel García",
      role: "Frontend/Analista",
      team: "España",
      photo: "/img/team/Manuel_Garcia.png",
    },
    {
      name: "Nicolás Herrera",
      role: "Frontend/Analista",
      team: "España",
      photo: "/img/team/Nicolas_Herrera.png",
    },
    {
      name: "Alberto López",
      role: "Backend/Analista/QA",
      team: "Beti",
      photo: "/img/team/Alberto_Lopez.png",
    },
    {
      name: "Joaquín Martín",
      role: "Backend/DevOps",
      team: "Beti",
      photo: "/img/team/Joaquin_Martin.png",
    },
    {
      name: "José María García",
      role: "Backend/Analista/QA",
      team: "Beti",
      photo: "/img/team/Jose_Maria_Garcia.png",
    },
    {
      name: "José Míguel García",
      role: "Frontend/Analista",
      team: "Beti",
      photo: "/img/team/Jose_Miguel_Garcia.png",
    },
    {
      name: "Marco Chasco",
      role: "Analista/Gestión",
      team: "Beti",
      photo: "/img/team/Marco_Chasco.png",
    },
  ];
  return (
    <div id="teams" className={clsx("meet-us", styles.meetUs)}>
      <div className="container">
        <h2>Conoce al equipo</h2>
        <h4>Xtreme</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === "Xtreme")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card,
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>España</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === "España")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card,
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Beti</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === "Beti")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card,
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}

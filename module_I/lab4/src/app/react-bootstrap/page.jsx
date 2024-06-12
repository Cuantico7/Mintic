import styles from "./page.module.css";
import {Col, Container, Row} from "react-bootstrap";

export default function ReactBootstrap(props) {
  return (
    <Container className={styles.section}>
      <Row>
        <header className={styles.header}>
          <h1>Mi sitio de Películas</h1>
          <p>Este es nuestro sitio de peliculas con Microformatos</p>
        </header>
      </Row>
      <Row className={styles.content}>
        <Col>
          <article className={styles.article}>
            <h2>Inception</h2>
            <p>
              Director: <span>Christopher Nolan</span>
            </p>
            <span>Ciencia Ficción</span>
            <a href="#">Trailer de la Película</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem, repellendus doloribus
              maxime, amet dignissimos ab iste quas cum fugit corrupti praesentium iusto dolore nihil quis culpa
              molestias
              nam. Earum? </p>
          </article>
        </Col>
        <Col>
          <article className={styles.article}>
            <h2>Texto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </Col>
      </Row>
      <Row>
        <footer className={styles.footer}>
          <div className="col">
            <span>Creado en 2024 &copy;</span>
          </div>
        </footer>
      </Row>
    </Container>
  )
}
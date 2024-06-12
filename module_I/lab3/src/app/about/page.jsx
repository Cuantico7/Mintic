"use client";

import { useRouter } from "next/navigation";

export default function AboutPage(props) {

  const router = useRouter();

  const goToRoute = () => router.push("/contact");

  const title = <h2>Acerca de Nosotros</h2>;
  const mission = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam asperiores cum eaque esse eveniet facilis fugit omnis pariatur, provident quo repudiandae soluta tempora voluptatem voluptatibus? Amet eos facere rerum.</p>;
  const contact = <p>Nos puedes contactar <button onClick={goToRoute}>Click aqui</button></p>;

  return (
    <section>
      {title}
      {mission}
      {contact}
    </section>
  )
}
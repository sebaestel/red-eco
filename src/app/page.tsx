import Contacto from "@/components/Contacto";
import Concurso from "@/components/Concurso";
import Empresas from "@/components/Empresas";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import MesaClasificacion from "@/components/MesaClasificacion";
import Metodo from "@/components/Metodo";
import Nav from "@/components/Nav";
import Pie from "@/components/Pie";
import Programa from "@/components/Programa";
import Proposito from "@/components/Proposito";

export default function Pagina() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* EcoEscuela va primero: es el producto estrella. */}
        <Programa />
        <Concurso />
        <MesaClasificacion />
        <Metodo />
        <Proposito />
        <Empresas />
        <Faq />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}

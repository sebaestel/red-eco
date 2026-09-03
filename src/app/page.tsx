import Contacto from "@/components/Contacto";
import Diferencia from "@/components/Diferencia";
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
        <MesaClasificacion />
        <Programa />
        <Metodo />
        <Diferencia />
        <Proposito />
        <Empresas />
        <Faq />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}

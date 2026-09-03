/**
 * Iconos de trazo, 24×24, heredan color y grosor.
 * Son decorativos: el texto al lado siempre dice lo mismo.
 */

type Props = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconoEducacion({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <path d="M12 7.2C10.3 6 8.2 5.4 5.5 5.4v11c2.7 0 4.8.6 6.5 1.8 1.7-1.2 3.8-1.8 6.5-1.8v-11c-2.7 0-4.8.6-6.5 1.8Z" />
      <path d="M12 7.2v10.9" />
    </svg>
  );
}

export function IconoReciclaje({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <path d="M8.6 4.9 12 3l3.4 1.9" />
      <path d="M12 3v6" />
      <path d="M4.8 16.2 3.4 12.4l3.7-1.6" />
      <path d="M7.1 10.8 9.9 16" />
      <path d="M20.6 12.4l-1.4 3.8-3.9-.4" />
      <path d="M15.3 15.8 18 10.6" />
      <path d="M6 19.6h11.6" />
    </svg>
  );
}

export function IconoCompostaje({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <path d="M12 20v-8" />
      <path d="M12 14c-2.6 0-4.2-1.8-4.4-4.4 2.6-.2 4.2 1.6 4.4 4.4Z" />
      <path d="M12 12c.2-3 2-4.9 5-5.1-.2 3-2 4.9-5 5.1Z" />
      <path d="M4 20h16" />
    </svg>
  );
}

export function IconoInfraestructura({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <path d="M4 8h6l-.7 11.5H4.7L4 8Z" />
      <path d="M5.4 8V6.3h3.2V8" />
      <path d="M14 8h6l-.7 11.5h-4.6L14 8Z" />
      <path d="M15.4 8V6.3h3.2V8" />
      <path d="M6.6 11.4v4.8" />
      <path d="M16.6 11.4v4.8" />
    </svg>
  );
}

export function IconoCapacitacion({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <circle cx="8.6" cy="8.4" r="2.8" />
      <path d="M3.5 19.5c0-2.9 2.3-5 5.1-5s5.1 2.1 5.1 5" />
      <path d="M15.8 6.2a2.8 2.8 0 0 1 0 5.6" />
      <path d="M16.9 14.8c2.1.5 3.6 2.3 3.6 4.7" />
    </svg>
  );
}

export function IconoMedicion({ className }: Props) {
  return (
    <svg className={className} {...base}>
      <path d="M4 19.5h16" />
      <path d="M6.6 19.5v-5.8" />
      <path d="M11.4 19.5V8.6" />
      <path d="M16.2 19.5v-8.4" />
      <path d="M4.4 9.6 9.8 5l4 3.3L20 4" />
    </svg>
  );
}

export const iconosPrograma = [
  IconoEducacion,
  IconoReciclaje,
  IconoCompostaje,
  IconoInfraestructura,
  IconoCapacitacion,
  IconoMedicion,
];

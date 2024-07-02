import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-[#DADADA] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">AirShoes</h3>
          <p className="text-muted-foreground">
            Somos un emprendimiento personal dedicado a la reventa de zapatillas
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+54 (11) 2595-8816</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>juliocesargomezsena@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <Link href="#" prefetch={false}>
                @AirShoes
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Navegación</h3>
          <div className="flex flex-col gap-1">
            <Link href="#" prefetch={false}>
              Inicio
            </Link>
            <Link href="#" prefetch={false}>
              Zapatillas
            </Link>
            <Link href="#" prefetch={false}>
              Contacto
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Legal</h3>
          <div className="flex flex-col gap-1">
            <Link href="#" prefetch={false}>
              Política de privacidad
            </Link>
            <Link href="#" prefetch={false}>
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-muted-foreground text-sm">
        &copy; 2024 AirShoes. Todos los derechos reservados.
      </div>
    </footer>
  );
};

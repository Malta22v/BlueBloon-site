import "./globals.css";
import { Poppins } from "next/font/google";
// Importa a fonte Poppins do Google Fonts com os pesos 400, 600 e 700
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });


// Define os metadados da aplicação
export const metadata = {
  title: "BlueBloon - Cápsulas Naturais de Emagrecimento",
  description: "Transforme sua saúde com as cápsulas BlueBloon.",
};
// Componente de layout raiz que envolve toda a aplicação
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

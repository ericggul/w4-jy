import { Roboto_Condensed } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"], // Add the subsets you need
  weight: ["400", "700"], // You can customize the weights
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

"use client";
import Space from "@/components/space";
import { ThemeProvider } from "styled-components";
import { theme } from "@/constants/theme";
import { GenOneProvider } from "@/contexts/genOne.context";
import SectionGeneratioOne from "@/components/sectionGeneragionOne";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>

    <div >
      <main >
        <div style={{ height: '100vh'}}/>
        <GenOneProvider>
          <SectionGeneratioOne/>
        </GenOneProvider>
      </main>
        <Space/>
      <footer >

      </footer>
    </div>
    </ThemeProvider>
  );
}

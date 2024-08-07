"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/constants/theme";
import { GenOneProvider } from "@/contexts/genOne.context";
import SectionGeneratioOne from "@/components/sectionGeneragionOne";
import Introduction from "@/components/introduction";
import CustomHeader from "@/components/customHeader";
import './page.css'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>

    <div >
      <main className="main">
        <CustomHeader/>
        <Introduction/>
        <GenOneProvider>
          <SectionGeneratioOne/>
        </GenOneProvider>
        {/* <Conclusion/> */}
      </main>
      <footer >

      </footer>
    </div>
    </ThemeProvider>
  );
}

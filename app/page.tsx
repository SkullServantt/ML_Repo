import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickStrip } from "@/components/QuickStrip";
import { MotorcycleCatalog } from "@/components/MotorcycleCatalog";
import { HowItWorks } from "@/components/HowItWorks";
import { Simulator } from "@/components/Simulator";
import { AboutMiguel } from "@/components/AboutMiguel";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";
import { Reveal } from "@/components/Reveal";

export default function Home(){return <><CursorGlow/><Header/><main><Hero/><Reveal><QuickStrip/></Reveal><Reveal><MotorcycleCatalog/></Reveal><Reveal><HowItWorks/></Reveal><Reveal><Simulator/></Reveal><Reveal><AboutMiguel/></Reveal><Reveal><CTA/></Reveal></main><Footer/><WhatsAppButton/></>}

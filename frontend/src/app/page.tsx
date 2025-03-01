import Head from "next/head";
import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import TrendingJobs from "./components/TrendingJobs";
import CompanyLogos from "./components/CompanyLogos";
import CategorySection from "./components/CategorySection";
import CoolPlacesToWork from "./components/CoolPlacesToWork";
import PopularCourses from "./components/PopularCourses";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-orange-50">
      <Head>
        <title>CareerPathNow - Find the Job of Your Dreams</title>
        <meta name="description" content="Find the job you want and apply anywhere with CareerPathNow. Browse thousands of job listings." />
        <meta name="keywords" content="Jobs, Career, Web Designer, UI/UX, Frontend, Employer, Candidate" />
        <meta property="og:title" content="CareerPathNow - Find the Job of Your Dreams" />
        <meta property="og:description" content="Find thousands of job opportunities and get hired quickly with CareerPathNow." />
        <meta property="og:image" content="/images/hero-image.png" />
      </Head>
      <Header />
      <HeroSection />
      <TrendingJobs />
      <CompanyLogos/>
      <CategorySection/>
      <CoolPlacesToWork/>
      <PopularCourses/>
      <SubscribeSection/>
      <Footer/>
    </div>
  );
}

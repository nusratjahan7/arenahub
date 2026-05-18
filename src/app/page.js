import Banner from "@/Components/Homepage/Banner";
import CoachingSection from "@/Components/Homepage/CoachingSection";
import Featured from "@/Components/Homepage/Featured";
import Review from "@/Components/Homepage/Review";
import Steps from "@/Components/Homepage/Steps";

export default function Home() {
  return (
    <div>

      <Banner />
      <Featured />
      <Steps />
      <CoachingSection />
      <Review />


    </div>
  );
}

import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Companies />
            <Analysis />
            <Integration />
            <CTA />
        </Wrapper>
    )
};

export default HomePage

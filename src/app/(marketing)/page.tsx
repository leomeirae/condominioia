import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import AgentsSection from '@/components/marketing/AgentsSection'
import ServiceIntegration from '@/components/marketing/ServiceIntegration'

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <AgentsSection />
            <Companies />
            <Analysis />
            <Integration />
            <ServiceIntegration />
            <CTA />
        </Wrapper>
    )
};

export default HomePage


import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { useEffect } from "react";

const ServiceDynamic = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    return <ServicePageTemplate data={service} />;
};

export default ServiceDynamic;

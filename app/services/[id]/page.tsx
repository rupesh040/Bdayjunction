import { notFound } from "next/navigation";
import { services, pageBanners } from "@/data";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import PageBanner from "@/components/PageBanner";

interface ServiceDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return services.items.map((service) => ({
    id: service.slug,
  }));
}

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const resolvedParams = await params;

  const service = services.items.find(
    (item) => item.slug === resolvedParams.id,
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        bgText={service.title}
        image={pageBanners.services.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
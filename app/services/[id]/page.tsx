import { Suspense } from "react";
import { notFound } from "next/navigation";
import { services, pageBanners } from "@/data";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import PageBanner from "@/components/PageBanner";

export const instant = false;

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

async function ServiceDetailContent({ params }: ServiceDetailProps) {
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

export default function ServiceDetail({ params }: ServiceDetailProps) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
import { pageBanners } from "@/data";
import PageBanner from "@/components/PageBanner";
import GalleryClient from "@/components/GalleryClient";
import VideoGalleryClient from "@/components/VideoGalleryClient";
import contentData from "@/data/content.json";

export default function GalleryPage() {
  const galleryData = (contentData as any).Birthday.sections.Gallery.variants.BirthdayGallery1;
  const videoGalleryData = (contentData as any).Birthday.sections.VideoGallery.variants.BirthdayVideoGallery1;

  return (
    <>
      <PageBanner {...pageBanners.gallery} />
      <GalleryClient data={galleryData} />
      <VideoGalleryClient data={videoGalleryData} />
    </>
  );
}

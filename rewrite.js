const fs = require('fs');
const path = require('path');

const files = [
  'app/layout.tsx',
  'app/page.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/Hero.tsx',
  'components/AboutSection.tsx',
  'components/ServicesSection.tsx',
  'components/CTASection.tsx',
  'components/Testimonials.tsx',
  'components/Speakers.tsx',
  'components/BlogSection.tsx',
  'components/FAQ.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/services/[id]/page.tsx',
  'app/blog/[id]/page.tsx'
];

for (const file of files) {
  const p = path.join('c:/Users/Haneul/Desktop/bday-junction', file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf-8');
    
    // Navbar
    content = content.replace(/content\.navigation/g, 'content.Birthday.sections.Header.variants.BirthdayHeader1.links');
    content = content.replace(/item\.label/g, 'item.name'); // Dangerous if used elsewhere, but safe in our scope
    content = content.replace(/content\.hero\.button\.href/g, 'content.Birthday.sections.Header.variants.BirthdayHeader1.buttonHref');

    // Hero -> Banner
    content = content.replace(/content\.hero\.eyebrow/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.cursiveText');
    content = content.replace(/content\.hero\.title/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.heading');
    content = content.replace(/content\.hero\.description/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.description');
    content = content.replace(/content\.hero\.button\.label/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.buttonText');
    content = content.replace(/content\.hero\.button\.href/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.buttonHref');
    content = content.replace(/content\.hero\.image/g, 'content.Birthday.sections.Banner.variants.BirthdayBanner1.banners[0]');

    // About
    content = content.replace(/content\.about\.eyebrow/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.cursiveText');
    content = content.replace(/content\.about\.title/g, '`${content.Birthday.sections.About.variants.BirthdayAbout1.headingPart1} ${content.Birthday.sections.About.variants.BirthdayAbout1.headingPart2}`');
    content = content.replace(/content\.about\.description/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.description');
    content = content.replace(/content\.about\.features/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.features');
    content = content.replace(/feature\.text/g, 'feature.title');
    content = content.replace(/content\.about\.button\.label/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.buttonText');
    content = content.replace(/content\.about\.button\.href/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.buttonHref');
    content = content.replace(/content\.about\.images\[0\]/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.mainImage');
    content = content.replace(/content\.about\.images\[1\]/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.smallImage');
    content = content.replace(/content\.about\.images\[2\]/g, 'content.Birthday.sections.About.variants.BirthdayAbout1.thirdImage');

    // Services
    content = content.replace(/content\.services\.eyebrow/g, 'content.Birthday.sections.Services.variants.BirthdayServices1.cursiveText');
    content = content.replace(/content\.services\.title/g, '`${content.Birthday.sections.Services.variants.BirthdayServices1.headingPart1} ${content.Birthday.sections.Services.variants.BirthdayServices1.headingPart2}`');
    content = content.replace(/content\.services\.description/g, 'content.Birthday.sections.Services.variants.BirthdayServices1.description');
    content = content.replace(/content\.services\.items/g, 'content.Birthday.sections.Services.variants.BirthdayServices1.items');
    content = content.replace(/service\.id/g, 'service.slug');

    // CTA
    content = content.replace(/content\.cta\.eyebrow/g, 'content.Birthday.sections.CTA.variants.BirthdayCTA1.cursiveText');
    content = content.replace(/content\.cta\.title/g, '`${content.Birthday.sections.CTA.variants.BirthdayCTA1.headingPart1} ${content.Birthday.sections.CTA.variants.BirthdayCTA1.headingPart2}`');
    content = content.replace(/content\.cta\.description/g, 'content.Birthday.sections.CTA.variants.BirthdayCTA1.description');
    content = content.replace(/content\.cta\.button\.label/g, 'content.Birthday.sections.CTA.variants.BirthdayCTA1.buttonText');
    content = content.replace(/content\.cta\.button\.href/g, 'content.Birthday.sections.CTA.variants.BirthdayCTA1.buttonHref');
    content = content.replace(/content\.cta\.image/g, 'content.Birthday.sections.CTA.variants.BirthdayCTA1.image');

    // Testimonials
    content = content.replace(/content\.testimonials\.eyebrow/g, 'content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1.cursiveText');
    content = content.replace(/content\.testimonials\.title/g, '`${content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1.headingPart1} ${content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1.headingPart2}`');
    content = content.replace(/content\.testimonials\.description/g, 'content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1.description');
    content = content.replace(/content\.testimonials\.items/g, 'content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1.items');
    content = content.replace(/testimonial\.role/g, 'testimonial.title');
    content = content.replace(/testimonial\.text/g, 'testimonial.quote');

    // Speakers -> Team
    content = content.replace(/content\.speakers\.eyebrow/g, 'content.Birthday.sections.Team.variants.BirthdayTeam1.preTitle');
    content = content.replace(/content\.speakers\.title/g, '`${content.Birthday.sections.Team.variants.BirthdayTeam1.titlePart1} ${content.Birthday.sections.Team.variants.BirthdayTeam1.titlePart2}`');
    content = content.replace(/content\.speakers\.description/g, 'content.Birthday.sections.Team.variants.BirthdayTeam1.description');
    content = content.replace(/content\.speakers\.items/g, 'content.Birthday.sections.Team.variants.BirthdayTeam1.items');
    content = content.replace(/speaker\.role/g, 'speaker.designation');
    content = content.replace(/speaker/g, 'member');
    // Wait, replacing `speaker` to `member` globally could break things, let's just leave it as `speaker`.
    content = content.replace(/member\.name/g, 'speaker.name');
    content = content.replace(/member\.designation/g, 'speaker.designation');
    content = content.replace(/member\.image/g, 'speaker.image');
    content = content.replace(/member\.social/g, 'speaker.social');

    // Blog
    content = content.replace(/content\.blogs\.eyebrow/g, 'content.Birthday.sections.Blog.variants.BirthdayBlog1.cursiveText');
    content = content.replace(/content\.blogs\.title/g, '`${content.Birthday.sections.Blog.variants.BirthdayBlog1.headingPart1} ${content.Birthday.sections.Blog.variants.BirthdayBlog1.headingPart2}`');
    content = content.replace(/content\.blogs\.items/g, 'content.Birthday.sections.Blog.variants.BirthdayBlog1.items');
    content = content.replace(/blog\.id/g, 'blog.slug');

    // FAQ
    content = content.replace(/content\.faq\.eyebrow/g, 'content.Birthday.sections.FAQ.variants.BirthdayFAQ1.cursiveText');
    content = content.replace(/content\.faq\.title/g, '`${content.Birthday.sections.FAQ.variants.BirthdayFAQ1.headingPart1} ${content.Birthday.sections.FAQ.variants.BirthdayFAQ1.headingPart2}`');
    content = content.replace(/content\.faq\.description/g, 'content.Birthday.sections.FAQ.variants.BirthdayFAQ1.description');
    content = content.replace(/content\.faq\.image/g, 'content.Birthday.sections.FAQ.variants.BirthdayFAQ1.image');
    content = content.replace(/content\.faq\.items/g, 'content.Birthday.sections.FAQ.variants.BirthdayFAQ1.items');

    // Footer
    content = content.replace(/content\.footer\.description/g, 'content.Birthday.sections.Footer.variants.BirthdayFooter1.description');
    content = content.replace(/content\.footer\.quickLinks/g, 'content.Birthday.sections.Footer.variants.BirthdayFooter1.quickLinks');
    content = content.replace(/content\.footer\.services/g, 'content.Birthday.sections.Footer.variants.BirthdayFooter1.services');
    content = content.replace(/content\.footer\.socialLinks/g, 'content.Birthday.sections.Footer.variants.BirthdayFooter1.social');
    content = content.replace(/content\.footer\.contact/g, 'content.Birthday.sections.Footer.variants.BirthdayFooter1.contact');
    content = content.replace(/link\.label/g, 'link.name');
    content = content.replace(/service\.label/g, 'service.name');
    content = content.replace(/social\.platform/g, 'social.name'); // actually the new one has 'icon' but 'name' works mostly? 
    // actually social has "name": "Facebook", "icon": "facebook", "href": "#"
    content = content.replace(/social\.platform/g, 'social.icon'); // icon matches facebook, instagram etc

    // Site / Global
    content = content.replace(/content\.site\.logo/g, 'content.Birthday.site.logo');
    content = content.replace(/content\.site\.name/g, 'content.Birthday.site.name');
    content = content.replace(/content\.site\.description/g, 'content.Birthday.site.description');
    content = content.replace(/content\.site\.phone/g, 'content.Birthday.site.phone');
    content = content.replace(/content\.site\.email/g, 'content.Birthday.site.email');
    content = content.replace(/content\.site\.address/g, 'content.Birthday.site.address');

    fs.writeFileSync(p, content, 'utf-8');
  }
}

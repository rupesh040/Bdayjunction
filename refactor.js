const fs = require('fs');
const path = require('path');

function replaceFile(file, match, importStr, replaceStr) {
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes(match)) {
    text = text.replace(/import content from [\"']@\/data[\"'];/, `import { ${importStr} } from "@/data";`);
    text = text.replace(match, replaceStr);
    fs.writeFileSync(file, text);
    console.log(`Updated ${file}`);
  }
}

replaceFile('components/AboutSection.tsx', 'content.Birthday.sections.About.variants.BirthdayAbout1', 'about', 'about');
replaceFile('components/BlogSection.tsx', 'content.Birthday.sections.Blog.variants.BirthdayBlog1', 'blog', 'blog');
replaceFile('components/ContactSection.tsx', 'content.Birthday.sections.Contact.variants.BirthdayContact1', 'contact', 'contact');
replaceFile('components/CTASection.tsx', 'content.Birthday.sections.CTA.variants.BirthdayCTA1', 'cta', 'cta');
replaceFile('components/FAQ.tsx', 'content.Birthday.sections.FAQ.variants.BirthdayFAQ1', 'faq', 'faq');
replaceFile('components/Hero.tsx', 'content.Birthday.sections.Banner.variants.BirthdayBanner1', 'banner', 'banner');
replaceFile('components/ServicesSection.tsx', 'content.Birthday.sections.Services.variants.BirthdayServices1', 'services', 'services');
replaceFile('components/Speakers.tsx', 'content.Birthday.sections.Team.variants.BirthdayTeam1', 'team', 'team');
replaceFile('components/Testimonials.tsx', 'content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1', 'testimonial', 'testimonial');

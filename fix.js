const fs = require('fs');
const path = require('path');

const bdayBase = 'c:/Users/Haneul/Desktop/bday-junction';

function replaceInFile(filePath, search, replace) {
  const p = path.join(bdayBase, filePath);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(search, replace);
  fs.writeFileSync(p, content, 'utf-8');
}

// 1. CTASection.tsx
replaceInFile('components/CTASection.tsx',
  /const { eyebrow, title, description, button, image } = content\.cta;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, description, buttonText, buttonHref, image } = content.Birthday.sections.CTA.variants.BirthdayCTA1;
  const title = \`\${headingPart1} \${headingPart2}\`;
  const button = { label: buttonText, href: buttonHref };`
);

// 2. ServicesSection.tsx
replaceInFile('components/ServicesSection.tsx',
  /const { eyebrow, title, description, items } = content\.services;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, description, items } = content.Birthday.sections.Services.variants.BirthdayServices1;
  const title = \`\${headingPart1} \${headingPart2}\`;`
);

// 3. Speakers.tsx
replaceInFile('components/Speakers.tsx',
  /const { eyebrow, title, description, items } = content\.members;/,
  `const { preTitle: eyebrow, titlePart1, titlePart2, description, items } = content.Birthday.sections.Team.variants.BirthdayTeam1;
  const title = \`\${titlePart1} \${titlePart2}\`;`
);

// 4. Testimonials.tsx
replaceInFile('components/Testimonials.tsx',
  /const { eyebrow, title, description, items } = content\.testimonials;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, description, items } = content.Birthday.sections.Testimonial.variants.BirthdayTestimonial1;
  const title = \`\${headingPart1} \${headingPart2}\`;`
);

// 5. Hero.tsx
replaceInFile('components/Hero.tsx',
  /const { eyebrow, title, description, button, image } = content\.hero;/,
  `const { cursiveText: eyebrow, heading: title, description, buttonText, buttonHref, banners } = content.Birthday.sections.Banner.variants.BirthdayBanner1;
  const button = { label: buttonText, href: buttonHref };
  const image = banners[0];`
);

// 6. FAQ.tsx
replaceInFile('components/FAQ.tsx',
  /const { eyebrow, title, description, image, items } = content\.faq;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, description, image, items } = content.Birthday.sections.FAQ.variants.BirthdayFAQ1;
  const title = \`\${headingPart1} \${headingPart2}\`;`
);

// 7. AboutSection.tsx
replaceInFile('components/AboutSection.tsx',
  /const { eyebrow, title, description, button, features, images } = content\.about;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, description, buttonText, buttonHref, features, mainImage, smallImage, thirdImage } = content.Birthday.sections.About.variants.BirthdayAbout1;
  const title = \`\${headingPart1} \${headingPart2}\`;
  const button = { label: buttonText, href: buttonHref };
  const images = [mainImage, smallImage, thirdImage];`
);

// 8. BlogSection.tsx
replaceInFile('components/BlogSection.tsx',
  /const { eyebrow, title, items } = content\.blogs;/,
  `const { cursiveText: eyebrow, headingPart1, headingPart2, items } = content.Birthday.sections.Blog.variants.BirthdayBlog1;
  const title = \`\${headingPart1} \${headingPart2}\`;`
);

// Fix app/blog/[id]/page.tsx
replaceInFile('app/blog/[id]/page.tsx',
  /item\.id === params\.id/,
  `item.slug === params.id`
);

// Fix app/services/[id]/page.tsx
replaceInFile('app/services/[id]/page.tsx',
  /item\.id === params\.id/,
  `item.slug === params.id`
);

// Footer.tsx: fix social.platform
replaceInFile('components/Footer.tsx',
  /platform/g,
  `name`
);
// Actually, earlier the error was: components/Footer.tsx(33,36): error TS2339: Property 'platform' does not exist on type '{ name: string; icon: string; href: string; }'.
// It expects social.name or social.icon. I replaced social.platform with social.icon in rewrite.js, but let's check Footer.tsx
// wait, the error is: components/Footer.tsx(33,36): error TS2339: Property 'platform' does not exist...
// Let's rewrite Footer to use correct keys.

let footerContent = fs.readFileSync(path.join(bdayBase, 'components/Footer.tsx'), 'utf-8');
footerContent = footerContent.replace(/social\.platform/g, 'social.name');
fs.writeFileSync(path.join(bdayBase, 'components/Footer.tsx'), footerContent, 'utf-8');

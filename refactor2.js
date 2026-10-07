const fs = require('fs');

function update(file) {
  let text = fs.readFileSync(file, 'utf8');
  let original = text;
  
  // Replace import
  text = text.replace(/import content from [\"']@\/data[\"'];/, `import { site, footer, header, pageBanners, about, blog, services } from "@/data";`);

  text = text.replace(/content\.Birthday\.sections\.Footer\.variants\.BirthdayFooter1/g, 'footer');
  text = text.replace(/content\.Birthday\.sections\.Header\.variants\.BirthdayHeader1/g, 'header');
  text = text.replace(/content\.Birthday\.sections\.PageBanners/g, 'pageBanners');
  text = text.replace(/content\.Birthday\.sections\.About\.variants\.BirthdayAbout1/g, 'about');
  text = text.replace(/content\.Birthday\.sections\.Blog\.variants\.BirthdayBlog1/g, 'blog');
  text = text.replace(/content\.Birthday\.sections\.Services\.variants\.BirthdayServices1/g, 'services');
  text = text.replace(/content\.Birthday\.site/g, 'site');

  // Fix imports by removing unused ones (simple regex approach, or just let TS complain)
  // Actually, just inserting all of them is fine, but some might be unused. We'll fix lint errors if any.

  if (text !== original) {
    fs.writeFileSync(file, text);
    console.log(`Updated ${file}`);
  }
}

['components/Footer.tsx', 'components/Navbar.tsx', 'app/about/page.tsx', 'app/blog/page.tsx', 'app/blog/[id]/page.tsx', 'app/contact/page.tsx', 'app/gallery/page.tsx', 'app/layout.tsx', 'app/services/page.tsx', 'app/services/[id]/page.tsx'].forEach(update);

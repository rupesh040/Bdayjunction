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

// 1
replaceInFile('app/blog/[id]/page.tsx', /b\.id ===/g, 'b.slug ===');
// 2
replaceInFile('app/services/[id]/page.tsx', /\.id === resolvedParams\.id/g, '.slug === resolvedParams.id');
// 3
replaceInFile('components/BlogCard.tsx', /id: string;/g, 'slug: string;');
replaceInFile('components/BlogCard.tsx', /href=\{\`\/blog\/\$\{id\}\`\}/g, 'href={`/blog/${slug}`}');
replaceInFile('components/BlogCard.tsx', /\{ id,/g, '{ slug,');

// 4
replaceInFile('components/BlogSection.tsx', /key=\{item\.id\}/g, 'key={item.slug}');
replaceInFile('app/blog/page.tsx', /key=\{blog\.id\}/g, 'key={blog.slug}');

// 5
replaceInFile('components/ServiceCard.tsx', /id: string;/g, 'slug: string;');
replaceInFile('components/ServiceCard.tsx', /href=\{\`\/services\/\$\{id\}\`\}/g, 'href={`/services/${slug}`}');
replaceInFile('components/ServiceCard.tsx', /\{ id,/g, '{ slug,');

// 6
replaceInFile('components/ServicesSection.tsx', /key=\{item\.id\}/g, 'key={item.slug}');
replaceInFile('app/services/page.tsx', /key=\{service\.id\}/g, 'key={service.slug}');

// 7
replaceInFile('components/SpeakerCard.tsx', /role: string;/g, 'designation: string;');
replaceInFile('components/SpeakerCard.tsx', /role,/g, 'designation,');
replaceInFile('components/SpeakerCard.tsx', /<p className="text-primary font-medium mb-3">\{role\}<\/p>/g, '<p className="text-primary font-medium mb-3">{designation}</p>');

// 8
replaceInFile('components/TestimonialCard.tsx', /role: string;/g, 'title: string;');
replaceInFile('components/TestimonialCard.tsx', /text: string;/g, 'quote: string;');
replaceInFile('components/TestimonialCard.tsx', /role,/g, 'title,');
replaceInFile('components/TestimonialCard.tsx', /text,/g, 'quote,');
replaceInFile('components/TestimonialCard.tsx', /<p className="text-muted-foreground text-sm">\{role\}<\/p>/g, '<p className="text-muted-foreground text-sm">{title}</p>');
replaceInFile('components/TestimonialCard.tsx', /<p className="text-foreground leading-relaxed">"{text}"<\/p>/g, '<p className="text-foreground leading-relaxed">"{quote}"</p>');


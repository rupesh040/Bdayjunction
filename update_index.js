const fs = require('fs');
let file = fs.readFileSync('data/index.ts', 'utf8');
file = file.replace('} from "../types/content";', `  BirthdayTeam1Item as TeamItem,
  BirthdayServices1Item as ServiceItem,
  BirthdayTestimonial1Item as TestimonialItem,
  BirthdayBlog1Item as BlogItem,
  BirthdayFAQ1Item as FAQItem
} from "../types/content";`);

file = file.replace('ContactData,\n  Site\n};', `ContactData,
  Site,
  TeamItem,
  ServiceItem,
  TestimonialItem,
  BlogItem,
  FAQItem
};`);
fs.writeFileSync('data/index.ts', file);
console.log('Updated data/index.ts');

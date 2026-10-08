// To parse this data:
//
//   import { Convert, Content } from "./content";
//
//   const content = Convert.toContent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Content {
    Birthday: Birthday;
}

export interface Birthday {
    site:               Site;
    theme:              Theme;
    templateComponents: TemplateComponents;
    sections:           Sections;
}

export interface Sections {
    Topbar:      Topbar;
    Header:      Header;
    Banner:      Banner;
    About:       About;
    Services:    Services;
    CTA:         Cta;
    Testimonial: Testimonial;
    Team:        Team;
    Blog:        Blog;
    FAQ:         FAQ;
    Footer:      Footer;
    PageBanners: PageBanners;
    Contact:     Contact;
}

export interface About {
    variants: AboutVariants;
}

export interface AboutVariants {
    BirthdayAbout1: BirthdayAbout1;
}

export interface BirthdayAbout1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    description:  string;
    features:     Feature[];
    buttonText:   string;
    buttonHref:   string;
    mainImage:    string;
    smallImage:   string;
    thirdImage:   string;
}

export interface Feature {
    title: string;
    icon:  string;
}

export interface Banner {
    variants: BannerVariants;
}

export interface BannerVariants {
    BirthdayBanner1: BirthdayBanner1;
}

export interface BirthdayBanner1 {
    banners:         string[];
    backgroundImage: string;
    cursiveText:     string;
    heading:         string;
    description:     string;
    buttonText:      string;
    buttonHref:      string;
}

export interface Blog {
    variants: BlogVariants;
}

export interface BlogVariants {
    BirthdayBlog1: BirthdayBlog1;
}

export interface BirthdayBlog1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    items:        BirthdayBlog1Item[];
    buttonText:   string;
}

export interface BirthdayBlog1Item {
    slug:        string;
    image:       string;
    date:        string;
    title:       string;
    description: string;
    quickLinksTitle?: string;
    servicesTitle?: string;
    contactTitle?: string;
    copyrightText?: string;
    author:      string;
}

export interface Cta {
    variants: CTAVariants;
}

export interface CTAVariants {
    BirthdayCTA1: BirthdayCTA1;
}

export interface BirthdayCTA1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    description:  string;
    buttonText:   string;
    buttonHref:   string;
    image:        string;
}

export interface Contact {
    variants: ContactVariants;
}

export interface ContactVariants {
    BirthdayContact1: BirthdayContact1;
}

export interface BirthdayContact1 {
    eyebrow:            string;
    headingPart1:       string;
    headingPart2:       string;
    description:        string;
    image:              string;
    formEyebrow:        string;
    formTitlePart1:     string;
    formTitlePart2:     string;
    formDescription:    string;
    services:           string[];
    buttonText:         string;
    successTitle:       string;
    successDescription: string;
}

export interface FAQ {
    variants: FAQVariants;
}

export interface FAQVariants {
    BirthdayFAQ1: BirthdayFAQ1;
}

export interface BirthdayFAQ1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    description:  string;
    image:        string;
    items:        BirthdayFAQ1Item[];
}

export interface BirthdayFAQ1Item {
    question: string;
    answer:   string;
}

export interface Footer {
    variants: FooterVariants;
}

export interface FooterVariants {
    BirthdayFooter1: BirthdayFooter1;
}

export interface BirthdayFooter1 {
    description: string;
    quickLinks:  QuickLink[];
    services:    QuickLink[];
    social:      SocialElement[];
    contact:     ContactClass;
}

export interface ContactClass {
    email:   string;
    phone:   string[];
    address: string;
}

export interface QuickLink {
    name: string;
    href: string;
}

export interface SocialElement {
    name: string;
    icon: string;
    href: string;
}

export interface Header {
    variants: HeaderVariants;
}

export interface HeaderVariants {
    BirthdayHeader1: BirthdayHeader1;
}

export interface BirthdayHeader1 {
    logo:       string;
    links:      QuickLink[];
    button:     string;
    buttonHref: string;
}

export interface PageBanners {
    about:    AboutClass;
    contact:  AboutClass;
    services: AboutClass;
    gallery:  AboutClass;
    blog:     AboutClass;
    faq:      AboutClass;
}

export interface AboutClass {
    title:       string;
    bgText:      string;
    image:       string;
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
    label: string;
    href?: string;
}

export interface Services {
    variants: ServicesVariants;
}

export interface ServicesVariants {
    BirthdayServices1: BirthdayServices1;
}

export interface BirthdayServices1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    description:  string;
    items:        BirthdayServices1Item[];
}

export interface BirthdayServices1Item {
    slug:        string;
    icon:        string;
    image:       string;
    title:       string;
    description: string;
    href:        string;
}

export interface Team {
    variants: TeamVariants;
}

export interface TeamVariants {
    BirthdayTeam1: BirthdayTeam1;
}

export interface BirthdayTeam1 {
    preTitle:    string;
    titlePart1:  string;
    titlePart2:  string;
    description: string;
    items:       BirthdayTeam1Item[];
}

export interface BirthdayTeam1Item {
    name:        string;
    designation: string;
    image:       string;
    slug:        string;
    social:      ItemSocial;
}

export interface ItemSocial {
    facebook:  string;
    instagram: string;
    linkedin:  string;
    x:         string;
}

export interface Testimonial {
    variants: TestimonialVariants;
}

export interface TestimonialVariants {
    BirthdayTestimonial1: BirthdayTestimonial1;
}

export interface BirthdayTestimonial1 {
    cursiveText:  string;
    headingPart1: string;
    headingPart2: string;
    description:  string;
    items:        BirthdayTestimonial1Item[];
}

export interface BirthdayTestimonial1Item {
    image:  string;
    name:   string;
    title:  string;
    quote:  string;
    rating: number;
}

export interface Topbar {
    variants: TopbarVariants;
}

export interface TopbarVariants {
    BirthdayTopbar1: BirthdayTopbar1;
}

export interface BirthdayTopbar1 {
    phone:  string;
    email:  string;
    social: SocialElement[];
}

export interface Site {
    name:        string;
    logo:        string;
    description: string;
    phone:       string;
    email:       string;
    address:     string;
}

export interface TemplateComponents {
    "template-1": Template1;
}

export interface Template1 {
    shared: Shared;
    pages:  Pages;
}

export interface Pages {
    home:             AboutUs;
    "about-us":       AboutUs;
    services:         AboutUs;
    "service-detail": Detail;
    "our-team":       AboutUs;
    testimonials:     AboutUs;
    blog:             AboutUs;
    "blog-detail":    Detail;
    faq:              AboutUs;
}

export interface AboutUs {
    components: Component[];
}

export interface Component {
    key:       string;
    component: string;
}

export interface Detail {
    expand:     string;
    components: Component[];
}

export interface Shared {
    Topbar: string;
    Header: string;
    Footer: string;
}

export interface Theme {
    colors: Colors;
}

export interface Colors {
    primary:    string;
    secondary:  string;
    accent:     string;
    dark:       string;
    background: string;
    white:      string;
    text:       string;
    muted:      string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toContent(json: string): Content {
        return cast(JSON.parse(json), r("Content"));
    }

    public static contentToJson(value: Content): string {
        return JSON.stringify(uncast(value, r("Content")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Content": o([
        { json: "Birthday", js: "Birthday", typ: r("Birthday") },
    ], false),
    "Birthday": o([
        { json: "site", js: "site", typ: r("Site") },
        { json: "theme", js: "theme", typ: r("Theme") },
        { json: "templateComponents", js: "templateComponents", typ: r("TemplateComponents") },
        { json: "sections", js: "sections", typ: r("Sections") },
    ], false),
    "Sections": o([
        { json: "Topbar", js: "Topbar", typ: r("Topbar") },
        { json: "Header", js: "Header", typ: r("Header") },
        { json: "Banner", js: "Banner", typ: r("Banner") },
        { json: "About", js: "About", typ: r("About") },
        { json: "Services", js: "Services", typ: r("Services") },
        { json: "CTA", js: "CTA", typ: r("Cta") },
        { json: "Testimonial", js: "Testimonial", typ: r("Testimonial") },
        { json: "Team", js: "Team", typ: r("Team") },
        { json: "Blog", js: "Blog", typ: r("Blog") },
        { json: "FAQ", js: "FAQ", typ: r("FAQ") },
        { json: "Footer", js: "Footer", typ: r("Footer") },
        { json: "PageBanners", js: "PageBanners", typ: r("PageBanners") },
        { json: "Contact", js: "Contact", typ: r("Contact") },
    ], false),
    "About": o([
        { json: "variants", js: "variants", typ: r("AboutVariants") },
    ], false),
    "AboutVariants": o([
        { json: "BirthdayAbout1", js: "BirthdayAbout1", typ: r("BirthdayAbout1") },
    ], false),
    "BirthdayAbout1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "features", js: "features", typ: a(r("Feature")) },
        { json: "buttonText", js: "buttonText", typ: "" },
        { json: "buttonHref", js: "buttonHref", typ: "" },
        { json: "mainImage", js: "mainImage", typ: "" },
        { json: "smallImage", js: "smallImage", typ: "" },
        { json: "thirdImage", js: "thirdImage", typ: "" },
    ], false),
    "Feature": o([
        { json: "title", js: "title", typ: "" },
        { json: "icon", js: "icon", typ: "" },
    ], false),
    "Banner": o([
        { json: "variants", js: "variants", typ: r("BannerVariants") },
    ], false),
    "BannerVariants": o([
        { json: "BirthdayBanner1", js: "BirthdayBanner1", typ: r("BirthdayBanner1") },
    ], false),
    "BirthdayBanner1": o([
        { json: "banners", js: "banners", typ: a("") },
        { json: "backgroundImage", js: "backgroundImage", typ: "" },
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "heading", js: "heading", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "buttonText", js: "buttonText", typ: "" },
        { json: "buttonHref", js: "buttonHref", typ: "" },
    ], false),
    "Blog": o([
        { json: "variants", js: "variants", typ: r("BlogVariants") },
    ], false),
    "BlogVariants": o([
        { json: "BirthdayBlog1", js: "BirthdayBlog1", typ: r("BirthdayBlog1") },
    ], false),
    "BirthdayBlog1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "items", js: "items", typ: a(r("BirthdayBlog1Item")) },
        { json: "buttonText", js: "buttonText", typ: "" },
    ], false),
    "BirthdayBlog1Item": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "author", js: "author", typ: "" },
    ], false),
    "Cta": o([
        { json: "variants", js: "variants", typ: r("CTAVariants") },
    ], false),
    "CTAVariants": o([
        { json: "BirthdayCTA1", js: "BirthdayCTA1", typ: r("BirthdayCTA1") },
    ], false),
    "BirthdayCTA1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "buttonText", js: "buttonText", typ: "" },
        { json: "buttonHref", js: "buttonHref", typ: "" },
        { json: "image", js: "image", typ: "" },
    ], false),
    "Contact": o([
        { json: "variants", js: "variants", typ: r("ContactVariants") },
    ], false),
    "ContactVariants": o([
        { json: "BirthdayContact1", js: "BirthdayContact1", typ: r("BirthdayContact1") },
    ], false),
    "BirthdayContact1": o([
        { json: "eyebrow", js: "eyebrow", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "formEyebrow", js: "formEyebrow", typ: "" },
        { json: "formTitlePart1", js: "formTitlePart1", typ: "" },
        { json: "formTitlePart2", js: "formTitlePart2", typ: "" },
        { json: "formDescription", js: "formDescription", typ: "" },
        { json: "services", js: "services", typ: a("") },
        { json: "buttonText", js: "buttonText", typ: "" },
        { json: "successTitle", js: "successTitle", typ: "" },
        { json: "successDescription", js: "successDescription", typ: "" },
    ], false),
    "FAQ": o([
        { json: "variants", js: "variants", typ: r("FAQVariants") },
    ], false),
    "FAQVariants": o([
        { json: "BirthdayFAQ1", js: "BirthdayFAQ1", typ: r("BirthdayFAQ1") },
    ], false),
    "BirthdayFAQ1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "items", js: "items", typ: a(r("BirthdayFAQ1Item")) },
    ], false),
    "BirthdayFAQ1Item": o([
        { json: "question", js: "question", typ: "" },
        { json: "answer", js: "answer", typ: "" },
    ], false),
    "Footer": o([
        { json: "variants", js: "variants", typ: r("FooterVariants") },
    ], false),
    "FooterVariants": o([
        { json: "BirthdayFooter1", js: "BirthdayFooter1", typ: r("BirthdayFooter1") },
    ], false),
    "BirthdayFooter1": o([
        { json: "description", js: "description", typ: "" },
        { json: "quickLinks", js: "quickLinks", typ: a(r("QuickLink")) },
        { json: "services", js: "services", typ: a(r("QuickLink")) },
        { json: "social", js: "social", typ: a(r("SocialElement")) },
        { json: "contact", js: "contact", typ: r("ContactClass") },
    ], false),
    "ContactClass": o([
        { json: "email", js: "email", typ: "" },
        { json: "phone", js: "phone", typ: a("") },
        { json: "address", js: "address", typ: "" },
    ], false),
    "QuickLink": o([
        { json: "name", js: "name", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "SocialElement": o([
        { json: "name", js: "name", typ: "" },
        { json: "icon", js: "icon", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Header": o([
        { json: "variants", js: "variants", typ: r("HeaderVariants") },
    ], false),
    "HeaderVariants": o([
        { json: "BirthdayHeader1", js: "BirthdayHeader1", typ: r("BirthdayHeader1") },
    ], false),
    "BirthdayHeader1": o([
        { json: "logo", js: "logo", typ: "" },
        { json: "links", js: "links", typ: a(r("QuickLink")) },
        { json: "button", js: "button", typ: "" },
        { json: "buttonHref", js: "buttonHref", typ: "" },
    ], false),
    "PageBanners": o([
        { json: "about", js: "about", typ: r("AboutClass") },
        { json: "contact", js: "contact", typ: r("AboutClass") },
        { json: "services", js: "services", typ: r("AboutClass") },
        { json: "gallery", js: "gallery", typ: r("AboutClass") },
        { json: "blog", js: "blog", typ: r("AboutClass") },
    ], false),
    "AboutClass": o([
        { json: "title", js: "title", typ: "" },
        { json: "bgText", js: "bgText", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "breadcrumbs", js: "breadcrumbs", typ: a(r("Breadcrumb")) },
    ], false),
    "Breadcrumb": o([
        { json: "label", js: "label", typ: "" },
        { json: "href", js: "href", typ: u(undefined, "") },
    ], false),
    "Services": o([
        { json: "variants", js: "variants", typ: r("ServicesVariants") },
    ], false),
    "ServicesVariants": o([
        { json: "BirthdayServices1", js: "BirthdayServices1", typ: r("BirthdayServices1") },
    ], false),
    "BirthdayServices1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: a(r("BirthdayServices1Item")) },
    ], false),
    "BirthdayServices1Item": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "icon", js: "icon", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Team": o([
        { json: "variants", js: "variants", typ: r("TeamVariants") },
    ], false),
    "TeamVariants": o([
        { json: "BirthdayTeam1", js: "BirthdayTeam1", typ: r("BirthdayTeam1") },
    ], false),
    "BirthdayTeam1": o([
        { json: "preTitle", js: "preTitle", typ: "" },
        { json: "titlePart1", js: "titlePart1", typ: "" },
        { json: "titlePart2", js: "titlePart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: a(r("BirthdayTeam1Item")) },
    ], false),
    "BirthdayTeam1Item": o([
        { json: "name", js: "name", typ: "" },
        { json: "designation", js: "designation", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "slug", js: "slug", typ: "" },
        { json: "social", js: "social", typ: r("ItemSocial") },
    ], false),
    "ItemSocial": o([
        { json: "facebook", js: "facebook", typ: "" },
        { json: "instagram", js: "instagram", typ: "" },
        { json: "linkedin", js: "linkedin", typ: "" },
        { json: "x", js: "x", typ: "" },
    ], false),
    "Testimonial": o([
        { json: "variants", js: "variants", typ: r("TestimonialVariants") },
    ], false),
    "TestimonialVariants": o([
        { json: "BirthdayTestimonial1", js: "BirthdayTestimonial1", typ: r("BirthdayTestimonial1") },
    ], false),
    "BirthdayTestimonial1": o([
        { json: "cursiveText", js: "cursiveText", typ: "" },
        { json: "headingPart1", js: "headingPart1", typ: "" },
        { json: "headingPart2", js: "headingPart2", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: a(r("BirthdayTestimonial1Item")) },
    ], false),
    "BirthdayTestimonial1Item": o([
        { json: "image", js: "image", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "quote", js: "quote", typ: "" },
        { json: "rating", js: "rating", typ: 0 },
    ], false),
    "Topbar": o([
        { json: "variants", js: "variants", typ: r("TopbarVariants") },
    ], false),
    "TopbarVariants": o([
        { json: "BirthdayTopbar1", js: "BirthdayTopbar1", typ: r("BirthdayTopbar1") },
    ], false),
    "BirthdayTopbar1": o([
        { json: "phone", js: "phone", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "social", js: "social", typ: a(r("SocialElement")) },
    ], false),
    "Site": o([
        { json: "name", js: "name", typ: "" },
        { json: "logo", js: "logo", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "address", js: "address", typ: "" },
    ], false),
    "TemplateComponents": o([
        { json: "template-1", js: "template-1", typ: r("Template1") },
    ], false),
    "Template1": o([
        { json: "shared", js: "shared", typ: r("Shared") },
        { json: "pages", js: "pages", typ: r("Pages") },
    ], false),
    "Pages": o([
        { json: "home", js: "home", typ: r("AboutUs") },
        { json: "about-us", js: "about-us", typ: r("AboutUs") },
        { json: "services", js: "services", typ: r("AboutUs") },
        { json: "service-detail", js: "service-detail", typ: r("Detail") },
        { json: "our-team", js: "our-team", typ: r("AboutUs") },
        { json: "testimonials", js: "testimonials", typ: r("AboutUs") },
        { json: "blog", js: "blog", typ: r("AboutUs") },
        { json: "blog-detail", js: "blog-detail", typ: r("Detail") },
        { json: "faq", js: "faq", typ: r("AboutUs") },
    ], false),
    "AboutUs": o([
        { json: "components", js: "components", typ: a(r("Component")) },
    ], false),
    "Component": o([
        { json: "key", js: "key", typ: "" },
        { json: "component", js: "component", typ: "" },
    ], false),
    "Detail": o([
        { json: "expand", js: "expand", typ: "" },
        { json: "components", js: "components", typ: a(r("Component")) },
    ], false),
    "Shared": o([
        { json: "Topbar", js: "Topbar", typ: "" },
        { json: "Header", js: "Header", typ: "" },
        { json: "Footer", js: "Footer", typ: "" },
    ], false),
    "Theme": o([
        { json: "colors", js: "colors", typ: r("Colors") },
    ], false),
    "Colors": o([
        { json: "primary", js: "primary", typ: "" },
        { json: "secondary", js: "secondary", typ: "" },
        { json: "accent", js: "accent", typ: "" },
        { json: "dark", js: "dark", typ: "" },
        { json: "background", js: "background", typ: "" },
        { json: "white", js: "white", typ: "" },
        { json: "text", js: "text", typ: "" },
        { json: "muted", js: "muted", typ: "" },
    ], false),
};

<<<<<<< HEAD

=======
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
const s = (rows) =>
  rows.map((r) => {
    const [name, desc] = r.split("|");
    return { name, desc };
  });

<<<<<<< HEAD
export const stack = s([ 
  "React|Building reusable UI components.", 
  "React Native|Cross-platform Android and iOS apps.", 
  "TypeScript|Typed JavaScript for reliable applications.", 
  "JavaScript|Modern JavaScript and async programming.", 
  "Node.js|Server-side JavaScript development.", 
  "Express.js|Building backend APIs and services.", 
  "MongoDB|Flexible NoSQL document database.", 
  "Firebase|Authentication, Firestore and cloud services.", 
  "Tailwind CSS|Utility-first responsive styling.", 
  "Git|Version control and code management.", ]);

=======
export const stack = {
  Frontend: s([
    "HTML5|Semantic page structure and forms.",
    "CSS3|Flexbox, Grid and responsive layouts.",
    "Tailwind CSS|Utility-first styling for fast UI.",
    "JavaScript|ES6+, async code and the DOM.",
    "TypeScript|Typed JavaScript with fewer bugs.",
    "Bootstrap|Quick responsive grid and components.",
    "Material UI|Ready React components with theming.",
    "React.js|Components, props, state and hooks.",
    "React Native|One codebase for Android and iOS.",
    "Next.js|Routing, SSR/SSG/ISR and SEO.",
    "Redux|Global state with Redux Toolkit.",
    "Context API|Built-in way to share state.",
    "Flux|One-way data flow pattern behind Redux.",
    "Figma to UI|Pixel-perfect interfaces from designs.",
    "SEO|Meta tags, sitemaps and structured data.",
    "Core Web Vitals|LCP, INP and CLS for speed.",
  ]),

  Backend: s([
    "Node.js|JavaScript on the server.",
    "Express.js|REST APIs, middleware and auth.",
    "REST APIs|HTTP endpoints that return JSON.",
    "WebSockets|Real-time chat and live updates.",
    "Zod / Yup|Schema validation for forms and APIs.",
    "Postman|Testing and documenting APIs.",
    "Third-party services|Payments, email, maps and OAuth.",
  ]),

  Databases: s([
    "SQL / MySQL|Relational data, joins and indexes.",
    "MongoDB|Flexible document database.",
    "Firebase|Auth, Firestore, storage and hosting.",
  ]),

  Tools: s([
    "Git / GitHub|Version control and pull requests.",
    "SVN|Legacy version control, used in older projects.",
    "Mercurial|Distributed version control alternative.",
    "NPM|Packages and project scripts.",
    "Webpack|Bundling and code splitting.",
    "Babel|Compiles modern JS for all browsers.",
    "Make|Task automation with Makefiles.",
    "ESLint + Prettier|Consistent, error-free code.",
    "Docker|Same environment everywhere.",
    "CI/CD Pipelines|Auto test and deploy on every push.",
    "Vercel|Fast hosting for Next.js apps.",
    "Netlify|Static hosting with previews.",
  ]),

  Testing: s([
    "Jest|Unit tests for JavaScript.",
    "Cypress|End-to-end tests in a real browser.",
    "Playwright|Cross-browser end-to-end tests.",
  ]),

  "AI & Automation": s([
    "Google Stitch|Prompt to UI design.",
    "GitHub Copilot|Code suggestions in the editor.",
    "Cursor|AI-first code editor.",
    "ChatGPT|Debugging, learning and drafts.",
    "Claude|Code review and long-context help.",
    "Google Gemini|Research and multimodal help.",
    "n8n|Self-hosted workflow automation.",
    "Zapier|No-code app automations.",
    "Make (Integromat)|Visual automation scenarios.",
  ]),
};
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8

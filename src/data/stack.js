const s = (rows) =>
  rows.map((r) => {
    const [name, desc] = r.split("|");
    return { name, desc };
  });

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
  "Git|Version control and code management.",
]);
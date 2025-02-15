// Convert JSON to CSS string
export const generateCSS = (styles) => {
  return Object.entries(styles)
    .map(([className, rules]) => {
      const ruleSet = Object.entries(rules)
        .map(([prop, value]) => `${prop}: ${value};`)
        .join(" ");
      return `.${className} { ${ruleSet} }`;
    })
    .join("\n");
};


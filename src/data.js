import names from "starwars-names";

export const disabledNames = [
  "Ben Skywalker",
  "Cade Skywalker",
  "Luke Skywalker",
  "Shmi Skywalker"
];

export function checkIsDisabled(name) {
  return disabledNames.includes(name);
}

export const starWarsNames = names.all.map((name, index) => ({
  label: name,
  value: index,
  isDisabled: checkIsDisabled(name)
}));

export const groupedStarWarsNames = (names => {
  const groupedNames = [
    { label: "Sith", options: [] },
    { label: "Not Sith", options: [] }
  ];
  names.forEach(name => {
    if (/^Darth/.test(name.label)) {
      groupedNames[0].options.push(name);
    } else {
      groupedNames[1].options.push(name);
    }
  });

  return groupedNames;
})(starWarsNames);

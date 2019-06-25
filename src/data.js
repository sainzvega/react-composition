const sithNames = [
  { label: "Darth Bane", value: 0 },
  { label: "Darth Krat", value: 1 },
  { label: "Darth Maul", value: 2 },
  { label: "Darth Nihilus", value: 3 },
  { label: "Darth Vader", value: 4, isDisabled: true },
  { label: "Darth Sidious", value: 5 }
];

const jediNames = [
  { label: "Luke Skywalker", value: 6 },
  { label: "Yoda", value: 7 },
  { label: "Obi-Wan Kenobi", value: 8, isDisabled: true },
  { label: "Mace Windu", value: 9 },
  { label: "Qui-Gon Jinn", value: 10 }
];

const droidNames = [
  { label: "R2-D2", value: 11 },
  { label: "C-3PO", value: 12 },
  { label: "IG-88", value: 13, isDisabled: true }
];

export const names = sithNames
  .concat(jediNames)
  .concat(droidNames)
  .sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    } else if (a.label > b.label) {
      return 1;
    }
    return 0;
  });

export const groupedNames = [
  { label: "Droids", options: droidNames },
  { label: "Jedi", options: jediNames },
  { label: "Sith", options: sithNames }
];
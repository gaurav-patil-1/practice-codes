//Export List (Listed Export)

// Explicit export list
//here we exported values of name1 and name2 even before they were declared caused export is just a declaration
export { name1, name2 };

const name1 = "";
const name2 = "";
const name3 = "";
const name4 = "";
const name5 = "";

// Renaming exports
export { name3 as myName };

export { name4 as default };

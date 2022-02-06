import srcDefault from "./tokens/ligerswap-default.json";
import srcExtended from "./tokens/ligerswap-extended.json";
import srcTop10 from "./tokens/ligerswap-top-10.json";
import defaultList from "../lists/ligerswap-default.json";
import extendedtList from "../lists/ligerswap-extended.json";
import top10List from "../lists/ligerswap-top-10.json";

const lists = [
  {
    name: "ligerswap-default",
    src: srcDefault,
    actual: defaultList,
  },
  {
    name: "ligerswap-extended",
    src: srcExtended,
    actual: extendedtList,
  },
  {
    name: "ligerswap-top-10",
    src: srcTop10,
    actual: top10List,
  }
];

const compareLists = (listPair) => {
  const { name, src, actual } = listPair;
  if (src.length !== actual.tokens.length) {
    throw Error(
      `List ${name} seems to be not properly regenerated. Soure file has ${src.length} tokens but actual list has ${actual.tokens.length}. Did you forget to run yarn makelist?`
    );
  }
  src.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  actual.tokens.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  src.forEach((srcToken, index) => {
    if (JSON.stringify(srcToken) !== JSON.stringify(actual.tokens[index])) {
      throw Error(
        `List ${name} seems to be not properly regenerated. Tokens from src/tokens directory don't match up with the final list. Did you forget to run yarn makelist?`
      );
    }
  });
};

/**
 * Check in CI that author properly updated token list
 * i.e. not just changed token list in src/tokens but also regenerated lists with yarn makelist command.
 * Github Action runs only on change in src/tokens directory.
 */
const ciCheck = (): void => {
  lists.forEach((listPair) => {
    compareLists(listPair);
  });
};

export default ciCheck;

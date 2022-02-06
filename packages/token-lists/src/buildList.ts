import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as ligerswapDefaultVersion } from "../lists/ligerswap-default.json";
import { version as ligerswapExtendedVersion } from "../lists/ligerswap-extended.json";
import { version as ligerswapTop10Version } from "../lists/ligerswap-top-10.json";
import ligerswapDefault from "./tokens/ligerswap-default.json";
import ligerswapExtended from "./tokens/ligerswap-extended.json";
import ligerswapTop10 from "./tokens/ligerswap-top-10.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "ligerswap-default": {
    list: ligerswapDefault,
    name: "LigerSwap Default",
    keywords: ["xliger", "ligerswap", "default"],
    logoURI:
      "https://tokens.ligerswap.org/images/0x888888E8c80e2AeAeccF2e46Be905c20e125A1DB.png",
    sort: false,
    currentVersion: ligerswapDefaultVersion,
  },
  "ligerswap-extended": {
    list: ligerswapExtended,
    name: "LigerSwap Extended",
    keywords: ["xliger", "ligerswap", "extended"],
    logoURI:
      "https://tokens.ligerswap.org/images/0x888888E8c80e2AeAeccF2e46Be905c20e125A1DB.png",
    sort: true,
    currentVersion: ligerswapExtendedVersion,
  },
  "ligerswap-top-10": {
    list: ligerswapTop10,
    name: "LigerSwap Top 10",
    keywords: ["xliger", "ligerswap", "top 10"],
    logoURI:
      "https://tokens.ligerswap.org/images/0x888888E8c80e2AeAeccF2e46Be905c20e125A1DB.png",
    sort: true,
    currentVersion: ligerswapTop10Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          // XLIGER first in extended list
          if ((t1.symbol === "XLIGER") !== (t2.symbol === "XLIGER")) {
            return t1.symbol === "XLIGER" ? -1 : 1;
          }
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};

import { computed, unref } from "vue";

export const defaultNamespace = "mh";
const statePrefix = "is-";

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  //多个单词
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

export const useNamespace = (block: string) => {
  //   const globalConfig = useGlobalConfig("namespace");
  //   const namespace = computed(() => globalConfig.value || defaultNamespace);
  const namespace = defaultNamespace;
  const b = (blockSuffix = "") =>
    _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element?: string) =>
    element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier?: string) =>
    modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, "")
      : "";
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(unref(namespace), block, "", element, modifier)
      : "";
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, "", modifier)
      : "";
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : "";
  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : "";
  };

  // for css var
  // --el-xxx: value;
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace}-${key}`] = object[key];
      }
    }
    return styles;
  };
  // with block
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };

  const cssVarName = (name: string) => `--${namespace}-${name}`;
  const cssVarBlockName = (name: string) => `--${namespace}-${block}-${name}`;

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  };
};

// 'ep-table', // b()
// 'ep-table-body', // b('body')
// 'ep-table__content', // e('content')
// 'ep-table--active', // m('active')
// 'ep-table-content__active', // be('content', 'active')
// 'ep-table__content--active', // em('content', 'active')
// 'ep-table-body__content--active', // bem('body', 'content', 'active')
// 'is-focus', // is('focus')

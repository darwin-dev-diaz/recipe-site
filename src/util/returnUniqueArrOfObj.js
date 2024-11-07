const removeDuplicateObjs = (arr) => {
  const seen = new Set();
  const filteredArr = arr.filter((el) => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });
  return filteredArr;
};

export { removeDuplicateObjs };

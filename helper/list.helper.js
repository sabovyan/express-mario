const findListItemById = (list, id) => list.find((li) => li.id === id);

const setTodItemTextValueById = (list, id, text) =>
  list.map((li) => (li.id === id ? { ...li, textValue: text } : li));

const filterListById = (list, id) => list.filter((li) => li.id !== id);

module.exports = {
  findListItemById,
  setTodItemTextValueById,
  filterListById,
};

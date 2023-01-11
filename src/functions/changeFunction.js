
const updateData = (id,data) => {
  return data.map((item) => {
    item.id === id ? (item.isActive = true) : (item.isActive = false);
    return item;
  });
}

export default updateData

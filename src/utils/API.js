/* eslint-disable no-param-reassign */
export default class BlogAPI {
  static getItemById(id) {
    const items = JSON.parse(localStorage.getItem('blogapp-items') || '[]');

    return items.find((i) => i.id === id);
  }

  static getAllItems() {
    const items = JSON.parse(localStorage.getItem('blogapp-items') || '[]');

    return items.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveItem(itemToSave) {
    console.log('🚀 ~ BlogAPI ~ saveItem ~ itemToSave', itemToSave);
    const items = BlogAPI.getAllItems();
    const existing = items.find((item) => item.id === itemToSave.id);

    // Edit/Update
    if (existing) {
      existing.name = itemToSave.name;
      existing.imageUrl = itemToSave.imageUrl;
      existing.shortDescription = itemToSave.shortDescription;
      existing.content = itemToSave.content;
      existing.updated = new Date().toISOString();
    } else {
      itemToSave.id = Math.floor(Math.random() * 1000000);
      itemToSave.updated = new Date().toISOString();
      items.push(itemToSave);
    }

    localStorage.setItem('blogapp-items', JSON.stringify(items));
  }

  static deleteItem(id) {
    const items = BlogAPI.getAllItems();
    const newItems = items.filter((item) => item.id !== id);

    localStorage.setItem('blogapp-items', JSON.stringify(newItems));
  }
}

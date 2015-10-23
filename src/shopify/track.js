const Handlers = {
  product(hull, data) {
    if (data.product) {
      let price;
      if (data.product.price && data.product.price > 0) {
        price = data.product.price / 100;
      }
      return hull.track('Viewed Product', {
        id: '' + data.product.id,
        name: data.product.title,
        category: data.product.type,
        price: price,
      });
    }
  },

  collection(hull, data) {
    if (data.collection) {
      return hull.track('Viewed Product Category', {
        category: data.collection.title,
      });
    }
  },

  search(hull, data) {
    if (data.search) {
      const { search: { terms, results_count } } = data;
      if (terms) {
        return hull.track('Search', {
          terms,
          results_count,
        });
      }
    }
  },
};

export default function track(hull, data) {
  const handler = Handlers[/product/.test(data.template) ? 'product' : data.template];
  return handler && handler(hull, data);
}

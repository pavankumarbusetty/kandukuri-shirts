import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products, { categories, brands } from '../data/products';
function Products({ cart, addToCart }) {
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('All');
  const [sort, setSort] = useState('featured');
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get('category'))
    ? params.get('category')
    : 'All';
  const brand = brands.includes(params.get('brand')) ? params.get('brand') : 'All';
  const newOnly = params.get('new') === 'true';
  function changeParam(name, value) {
    const next = new URLSearchParams(params);
    value === 'All' ? next.delete(name) : next.set(name, value);
    setParams(next);
  }
  function reset() {
    setSearch('');
    setPrice('All');
    setSort('featured');
    setParams({});
  }
  const filtered = products
    .filter((p) => {
      const text = `${p.name} ${p.brand} ${p.code} ${p.category}`.toLowerCase();
      return (
        text.includes(search.trim().toLowerCase()) &&
        (category === 'All' || p.category === category) &&
        (brand === 'All' || p.brand === brand) &&
        (price === 'All' || p.price <= Number(price)) &&
        (!newOnly || p.isNew)
      );
    })
    .sort((a, b) =>
      sort === 'low'
        ? a.price - b.price
        : sort === 'high'
          ? b.price - a.price
          : sort === 'new'
            ? Number(b.isNew) - Number(a.isNew) || b.id - a.id
            : Number(b.featured) - Number(a.featured),
    );
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">KANDUKURI SHIRTS · THE COLLECTION</p>
        <h1>Find your everyday favourites.</h1>
        <p>Explore brands, choose your options, and ask us about availability.</p>
      </header>
      <section className="catalog-controls" aria-label="Product filters">
        <div className="search-field">
          <label className="sr-only" htmlFor="search">
            Search products
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search name, brand, or product code…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="category-filters" role="group" aria-label="Category">
          {['All', ...categories].map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={category === c}
              className={`filter-button ${category === c ? 'selected' : ''}`}
              onClick={() => changeParam('category', c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="filter-selects">
          <label>
            Brand
            <select value={brand} onChange={(e) => changeParam('brand', e.target.value)}>
              {['All', ...brands].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label>
            Price range
            <select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="All">All prices</option>
              <option value="1000">Up to ₹1,000</option>
              <option value="2000">Up to ₹2,000</option>
              <option value="3000">Up to ₹3,000</option>
            </select>
          </label>
          <label>
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured first</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="new">Newest in catalogue</option>
            </select>
          </label>
        </div>
      </section>
      <div className="results-bar">
        <p aria-live="polite">
          {filtered.length} products{newOnly ? ' · New to catalogue' : ''}
        </p>
        <button className="text-button" type="button" onClick={reset}>
          Clear filters
        </button>
      </div>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              quantity={cart
                .filter((i) => i.id === p.id)
                .reduce((sum, i) => sum + i.quantity, 0)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found.</h2>
          <p>Try a different search or clear the filters.</p>
          <button className="button" type="button" onClick={reset}>
            Show all products
          </button>
        </div>
      )}
    </div>
  );
}
export default Products;

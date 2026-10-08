import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { categories, products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "All";
  const initialSearch = params.get("search") || "";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);
  useEffect(() => {
  setCategory(params.get("category") || "All");
  setSearch(params.get("search") || "");
}, [params]);
  const [sort, setSort] = useState("featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === "price-low") result.sort((a,b) => a.price-b.price);
    if (sort === "price-high") result.sort((a,b) => b.price-a.price);
    if (sort === "rating") result.sort((a,b) => b.rating-a.rating);
    return result;
  }, [category, search, sort]);

  const applyCategory = (value) => {
    setCategory(value);
    setParams(value === "All" ? {} : { category: value });
  };

  return (
    <main className="page">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Products</span></div>
        <div className="catalog-head"><div><span className="eyebrow small">The collection</span><h1>Shop all products</h1><p>Explore our complete collection of useful, beautiful things.</p></div><button className="filter-mobile" onClick={() => setMobileFilter(!mobileFilter)}><SlidersHorizontal size={17}/> Filters</button></div>
        <div className="catalog-layout">
          <aside className={`filters ${mobileFilter ? "show" : ""}`}>
            <div className="filter-title"><strong>Filters</strong><button onClick={() => setMobileFilter(false)}><X size={18}/></button></div>
            <h4>Categories</h4>
            <div className="filter-list">{["All", ...categories.map(c=>c.name)].map((c) => <button className={category===c?"active":""} key={c} onClick={() => {applyCategory(c); setMobileFilter(false)}}>{c}<span>{c==="All"?products.length:products.filter(p=>p.category===c).length}</span></button>)}</div>
          </aside>
          <div className="catalog-content">
            <div className="catalog-toolbar"><div><strong>{filtered.length}</strong> products {search && <span>for “{search}”</span>}</div><label>Sort by <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select><ChevronDown size={15}/></label></div>
            <ProductGrid products={filtered}/>
          </div>
        </div>
      </div>
    </main>
  );
}
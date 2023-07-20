import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css"

const ProductGrid = ({ products, loading }) => {
  return (
    // [중요] 페이지가 로드되자 마자 intersect되는 현상을 방지하기 위해
    // height 크기 강제로 늘림
    // 추후 해결 필요
    <div className="product-grid" style={{minHeight: "2000px"}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;
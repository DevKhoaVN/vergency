import { createFileRoute, Link } from "@tanstack/react-router";
import ProductCard from "../../features/products/components/ProductCard";
import { Plus, Minus } from "lucide-react";
import type { IProduct } from "../../features/products/type";
import { useState } from "react";
import { useProductContext } from "../../features/products/context/ProductContext";

export const Route = createFileRoute("/collections/")({
  component: CategoryComponent,
});
const products = ["T-Shirt", "Hoodie", "Polo", "Gift", "Sweater", "Short"];
const data: IProduct = {
  name: "TYPO T-SHIRT/RED",
  slug: "TYPO T-SHIRT/RED",
  price: 120,
  end_price: 90,
  description:
    "This is a TYPO T-SHIRT/RED for testing the ProductCard component.",
  rating: 4.5,
  thumb:
    "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
};
export function CategoryComponent() {
  const { selectedCategory, setSelectedCategory } = useProductContext();
  const [isOpen, setIsOpen] = useState(true);
  const [sortValue, setSortValue] = useState("price_asc");
  console.log("set sort: ", selectedCategory);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
        {/* SIDEBAR */}
        <div className="col-span-1 h-max">
          <div className="flex justify-between shadow-md px-4 py-2">
            <h2 className="font-medium text-[18px]">Danh mục nhóm</h2>
            {isOpen ? (
              <Minus color="black" onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <Plus color="black" onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>

          {isOpen && (
            <ul className="px-4 py-2 shadow-md space-y-2 mt-2">
              {products.map((category) => (
                <Link
                  to={`/collections/${category.toLocaleLowerCase()}`}
                  className="block "
                >
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category.toUpperCase())}
                    className="text-[16px] text-[#5ec9ff] uppercase"
                  >
                    {category || "Tất cả sản phẩm"}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>

        {/* CONTENT (HEADER + PRODUCT LIST) */}
        <div className="col-span-3">
          {/* HEADER */}
          <div className="shadow-md px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedCategory}</h2>

              <div className="flex items-center gap-2">
                <h4 className="text-sm">Sắp xếp theo:</h4>
                <select
                  className="border px-2 py-1 rounded"
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                >
                  <option value="price_asc">Giá: Tăng dần</option>
                  <option value="price_desc">Giá: Giảm dần</option>
                  <option value="name_asc">Tên: A-Z</option>
                  <option value="name_desc">Tên: Z-A</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="newest">Mới nhất</option>
                  <option value="best_selling">Bán chạy nhất</option>
                </select>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4">
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

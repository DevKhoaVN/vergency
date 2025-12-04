// src/components/ProductCard.tsx
import type { IPorduct } from "../type";
import { Star, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";

interface ProductCardProps {
  data: IProduct;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const hasDiscount = data.end_price < data.price;
  const discountPercent = hasDiscount
    ? Math.round(((data.price - data.end_price) / data.price) * 100)
    : 0;

  return (
    <Link to="/collections/$slug" params={{ slug: data.slug }}>
      <div
        className="bg-white shadow-md rounded-lg p-4 w-76"
        onClick={() =>
          navigate({
            to: `/${data.category}/${data.name}`,
            params: { name: `$data.name` },
          })
        }
      >
        {/* Hình ảnh */}
        <div className="relative mb-3">
          <img
            src={data.thumb}
            alt={data.name}
            className="w-full object-cover rounded-md shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />

          {/* Badge giá */}
          <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            ${discountPercent?.toFixed(2)}
          </span>
        </div>

        {/* Tên sản phẩm */}
        <h3 className="text-lg font-semibold mb-1">{data.name}</h3>

        {/* Brand */}
        <p className="text-xs text-gray-500">Vergency</p>

        {/* Rating */}
        <p className="flex mb-2 mt-2">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </p>

        <hr className="w-full text-gray-200" />

        {/* Giá gốc */}
        <div className="flex justify-between mb-2">
          <span className=" text-red-500">${data.end_price.toFixed(2)}</span>
          <span className="line-through text-gray-400">
            ${data.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

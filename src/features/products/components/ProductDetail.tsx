import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  RefreshCw,
  Send,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetailComponent,
});

// Mock data - thay thế bằng API call thực tế
const getProductBySlug = (slug: string) => {
  return {
    name: "TYPO T-SHIRT/RED",
    slug: slug,
    price: 120000,
    end_price: 90000,
    description:
      "Áo thun TYPO với chất liệu cotton cao cấp, thoáng mát, thấm hút mồ hôi tốt. Thiết kế trẻ trung, năng động phù hợp cho mọi lứa tuổi.",
    rating: 4.5,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
    images: [
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Black", "White", "Blue"],
    stock: 50,
    category: "T-Shirt",
  };
};

// Related products data
const relatedProducts = [
  {
    id: 1,
    name: "BASIC T-SHIRT/BLACK",
    slug: "basic-t-shirt-black",
    price: 100,
    end_price: 80,
    rating: 4.3,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
  {
    id: 2,
    name: "POLO SHIRT/BLUE",
    slug: "polo-shirt-blue",
    price: 150,
    end_price: 120,
    rating: 4.7,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
  {
    id: 3,
    name: "HOODIE/GRAY",
    slug: "hoodie-gray",
    price: 200,
    end_price: 180,
    rating: 4.8,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
  {
    id: 4,
    name: "SWEATER/WHITE",
    slug: "sweater-white",
    price: 180,
    end_price: 150,
    rating: 4.6,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
  {
    id: 5,
    name: "GRAPHIC TEE/GREEN",
    slug: "graphic-tee-green",
    price: 110,
    end_price: 90,
    rating: 4.4,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
  {
    id: 6,
    name: "LONG SLEEVE/NAVY",
    slug: "long-sleeve-navy",
    price: 130,
    end_price: 110,
    rating: 4.5,
    thumb:
      "https://product.hstatic.net/200000305259/product/new_v66_fred_5-01_ff4877bccaec4273ae93c2d7c6dd987e_master.jpg",
  },
];

export function ProductDetailComponent() {
  const { slug } = Route.useParams();
  const product = getProductBySlug(slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [commentText, setCommentText] = useState("");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const maxSlide = Math.ceil(relatedProducts.length / itemsPerPage) - 1;
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Nguyễn Văn A",
      rating: 5,
      comment: "Sản phẩm rất tốt, chất lượng vượt mong đợi!",
      date: "2024-12-01",
    },
    {
      id: 2,
      user: "Trần Thị B",
      rating: 4,
      comment: "Áo đẹp, form chuẩn. Giao hàng nhanh.",
      date: "2024-11-28",
    },
    {
      id: 3,
      user: "Lê Văn C",
      rating: 5,
      comment: "Rất hài lòng với sản phẩm. Sẽ mua thêm!",
      date: "2024-11-25",
    },
  ]);

  const discount =
    product.price && product.end_price
      ? Math.round(((product.price - product.end_price) / product.price) * 100)
      : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn kích thước!");
      return;
    }
    if (!selectedColor) {
      alert("Vui lòng chọn màu sắc!");
      return;
    }
    console.log("Add to cart:", {
      product,
      selectedSize,
      selectedColor,
      quantity,
    });
    // Implement add to cart logic
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: "Khách hàng", // Replace with actual user name
      rating: 5,
      comment: commentText,
      date: new Date().toISOString().split("T")[0],
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      {/* Breadcumb */}
      <nav className="mt-3 mb-6">
        <div className="flex items-center  space-x-1 text-lg text-gray-500">
          <Link to="/" className="hover:text-gray-900 font-medium">
            Trang chủ
          </Link>
          <ChevronRight size={16} />
          <span className="font-medium hover:text-gray-900">Danh mục</span>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-900">{slug}</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* IMAGE GALLERY */}
        <div className="flex gap-4">
          {/* Thumbnail Images - Left Side */}
          <div className="flex flex-col gap-2 w-20">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedImage === index
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image - Right Side */}
          <div className="flex-1 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-sm md:text-3xl font-medium mb-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({product.rating} / 5.0)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-red-600">
                {product.end_price?.toLocaleString("vi-VN")}₫
              </span>
              {product.price && (
                <div className="ml-40">
                  <span className="text-xl text-gray-400 line-through">
                    {product.price.toLocaleString("vi-VN")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Kích thước:{" "}
              {selectedSize && (
                <span className="text-blue-600">{selectedSize}</span>
              )}
            </label>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Màu sắc:{" "}
              {selectedColor && (
                <span className="text-blue-600">{selectedColor}</span>
              )}
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded ${
                    selectedColor === color
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Số lượng:
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setQuantity(Math.min(Math.max(1, val), product.stock));
                }}
                className="px-1 py-1 border rounded text-center"
                min="1"
                max={product.stock}
              />
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
              <span className="text-sm text-gray-600">
                ({product.stock} sản phẩm có sẵn)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 uppercase bg-[#5EC9FF] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 uppercase bg-[#5EC9FF] text-white py-3 rounded-lg font-semibold  flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Mua ngay
            </button>
          </div>

          {/* Features */}
          <div className="border-t  border-gray-300 pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="text-[#5EC9FF] " size={25} />
              <span>Miễn phí vận chuyển cho đơn hàng trên 500.000₫</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RefreshCw className="text-[#5EC9FF] " size={25} />
              <span>Đổi trả trong vòng 7 ngày</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t  border-gray-300 mt-30 pt-6">
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
        >
          <h3 className="font-bold text-2xl">Mô tả sản phẩm</h3>
          {isDescriptionOpen ? (
            <Minus size={20} className="text-gray-600" />
          ) : (
            <Plus size={20} className="text-gray-600" />
          )}
        </div>
        {isDescriptionOpen && (
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        )}
      </div>
      {/* COMMENTS SECTION */}
      <div className="mt-12 border-t border-gray-300  pt-8">
        <div
          className="flex justify-between items-center cursor-pointer mb-6"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
        >
          <h2 className="text-2xl font-bold">
            Đánh giá sản phẩm ({comments.length})
          </h2>
          {isReviewsOpen ? (
            <Minus size={24} className="text-gray-600" />
          ) : (
            <Plus size={24} className="text-gray-600" />
          )}
        </div>

        {isReviewsOpen && (
          <>
            {/* Comment Form */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Viết đánh giá của bạn</h3>
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..."
                  className="w-full border rounded-lg p-3 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Send size={18} />
                    Gửi đánh giá
                  </button>
                </div>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border  px-4 py-2 bg-gray-100 rounded-lg border-gray-300 pb-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{comment.user}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < comment.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{comment.comment}</p>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {comments.length > 5 && (
              <div className="text-center mt-6">
                <button className="text-blue-600 font-semibold hover:underline">
                  Xem thêm đánh giá
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-12 border-t border-gray-300 pt-8">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm bạn có thể thích</h2>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({
                length: Math.ceil(relatedProducts.length / itemsPerPage),
              }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-4 gap-4"
                >
                  {relatedProducts
                    .slice(
                      slideIndex * itemsPerPage,
                      (slideIndex + 1) * itemsPerPage
                    )
                    .map((product) => {
                      const discount = Math.round(
                        ((product.price - product.end_price) / product.price) *
                          100
                      );
                      return (
                        <a
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="block group border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          {/* Image */}
                          <div className="relative overflow-hidden">
                            <img
                              src={product.thumb}
                              alt={product.name}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {discount > 0 && (
                              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                                -{discount}%
                              </span>
                            )}
                          </div>

                          {/* Info */}
                          <div className="p-4">
                            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-600">
                              {product.name}
                            </h3>

                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-red-600 font-bold">
                                {product.end_price.toLocaleString("vi-VN")}₫
                              </span>
                              {product.price !== product.end_price && (
                                <span className="text-gray-400 line-through text-sm">
                                  {product.price.toLocaleString("vi-VN")}₫
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Star
                                size={16}
                                className="fill-yellow-400 text-yellow-400"
                              />
                              <span>{product.rating}</span>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-2 hover:bg-gray-100 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

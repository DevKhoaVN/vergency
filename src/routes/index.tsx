import { createFileRoute, Link } from "@tanstack/react-router";
import { TruckElectric, RefreshCcw, HandCoins, PhoneCall } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../features/products/components/ProductCard";
import type { IProduct } from "../features/products/type";
import T_Shirt from "../assets/t-shirt.jpg";
import "swiper/css";
import banner_one from "../assets/banner1.jpg";
import banner_two from "../assets/banner2.jpg";
import brand_1 from "../assets/bradn1.png";
import brand_2 from "../assets/brand2.png";
import brand_3 from "../assets/velgog.png";

export const Route = createFileRoute("/")({
  component: Index,
});

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

function Index() {
  return (
    <div className="">
      {/* banner */}
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          className="banner"
        >
          <SwiperSlide>
            <img
              src={banner_one}
              alt="Banner 1"
              className="w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner_two}
              alt="Banner 2"
              className="w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* policy */}
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* shiping */}
        <div className="flex flex-col items-start space-y-2 p-4 border border-gray-200 rounded-lg shadow-sm">
          <TruckElectric className="w-8 h-8 text-[#5ec9ff]" />
          <h4 className="font-semibold text-lg">Giao hàng toàn quốc</h4>
          <p className="text-sm text-gray-600">
            Thời gian giao hàng linh động từ 3 - 4 - 5 ngày tùy khu vực, đôi khi
            sẽ nhanh hơn hoặc chậm hơn. Mong Quý Khách hàng thông cảm.
          </p>
        </div>

        {/* return */}
        <div className="flex mx-auto flex-col items-start space-y-2 p-4 border border-gray-200 rounded-lg shadow-sm">
          <RefreshCcw className="w-8 h-8 text-[#5ec9ff]" />
          <h4 className="font-semibold text-lg ">Chính sách đổi trả hàng</h4>
          <p className="text-sm text-gray-600 ">
            Sản phẩm được phép đổi hàng trong vòng 36h nếu phát sinh lỗi từ nhà
            sản xuất. Hình ảnh phần lỗi rõ nét, chi tiết và đầy đủ.
          </p>
        </div>

        {/* COD */}
        <div className="flex flex-col items-start space-y-2 p-4 border border-gray-200 rounded-lg shadow-sm">
          <HandCoins className="w-8 h-8 text-[#5ec9ff]" />
          <h4 className="font-semibold text-lg">
            Giao hàng nhận tiền và kiểm kê đơn hàng
          </h4>
          <p className="text-sm text-gray-600">
            Được phép kiểm hàng trước khi thanh toán. Quay video unbox nếu cần
            hỗ trợ.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start space-y-2 p-4 border border-gray-200 rounded-lg shadow-sm">
          <PhoneCall className="w-8 h-8 text-[#5ec9ff]" />
          <h4 className="font-semibold text-lg">
            Đặt hàng online và kiểm tra đơn hàng
          </h4>
          <p className="text-sm text-gray-600">Hotline: 037 335 7405</p>
        </div>
      </div>
      {/*love product */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-800 border-2" />
          <span className="text-gray-600 uppercase text-xl md:text-2xl font-bold text-center block">
            Vergency
          </span>
          <hr className="flex-grow border-2 border-gray-800" />
        </div>
        <p className="text-gray-500 text-center">Statisfy You - Happy You</p>
      </div>

      {/* danh sach san pham yeu thich */}
      <div className=" max-w-7xl mx-auto grid grid-cols-4  gap-4 grid-rows-2 mt-6">
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <div className="col-span-4 text-center mt-2">
          <button className="px-4 py-2 border mt-2 border-gray-400">
            Xem tất cả
          </button>
        </div>
      </div>

      {/* // danh muc yeu thich */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-800 border-2" />
          <span className="text-gray-600 uppercase text-xl md:text-2xl font-bold text-center block">
            Danh mục yêu thích
          </span>
          <hr className="flex-grow border-2 border-gray-800" />
        </div>
        <p className="text-gray-500 text-center">
          Danh mục được nhiều người yêu thích
        </p>
      </div>

      {/* danhmuc */}
      <div className=" max-w-7xl mx-auto  gap-6 grid grid-cols-3 mt-4">
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
        <Link to="">
          {" "}
          <img
            src={T_Shirt}
            alt=""
            className="shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </Link>
      </div>

      {/* best seller */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-800 border-2" />
          <span className="text-gray-600 uppercase text-xl md:text-2xl font-bold text-center block">
            Best Seller
          </span>
          <hr className="flex-grow border-2 border-gray-800" />
        </div>
        <p className="text-gray-500 text-center">
          Danh sách sản phẩm bán chạy nhất shop
        </p>
      </div>

      {/* danh sach san pham ban chay */}
      <div className=" max-w-7xl mx-auto grid grid-cols-4  gap-4 grid-rows-2 mt-6">
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <ProductCard data={data} />
        <div className="col-span-4 text-center mt-2">
          <button className="px-4 py-2 border mt-2 border-gray-400">
            Xem tất cả
          </button>
        </div>
      </div>

      {/* brand oustading*/}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-800 border-2" />
          <span className="text-gray-600 uppercase text-xl md:text-2xl font-bold text-center block">
            Thương hiệu nổi bật
          </span>
          <hr className="flex-grow border-2 border-gray-800" />
        </div>
        <p className="text-gray-500 text-center">
          Thương hiệu nổi bật của chúng tôi
        </p>
      </div>
      <div className=" max-w-7xl mx-auto flex items-center space-x-2.5 mt-4">
        <img src={brand_1} alt="" className="w-[135px] h-[65px]" />
        <img src={brand_2} alt="" className="w-[135px] h-[65px]" />
      </div>
    </div>
  );
}

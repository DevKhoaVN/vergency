import instagram from "../../assets/intagram.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Vergency</h3>
          <p className="text-sm text-gray-400">
            Chúng tôi cung cấp các sản phẩm thời trang chất lượng cao với giá
            hợp lý.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Chính sách hỗ trợ</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Tìm kiếm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chinh sách đổi trả
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chính sách bảo nật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Điều khoản dịch vụ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Mạng xã hội</h3>
          <div className="flex space-x-4">
            <img src={facebook} alt="" className="w-6 mt-4" />

            <img src={instagram} alt="" className="w-6 mt-4" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Theo dõi facebook chúng tôi để cập nhật xu hướng và khuyến mãi
          </h3>
          <span className="text-gray-400"> Liên hệ: 0966140378</span>
        </div>
      </div>

      <div className="border-t mt-4  border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Vergency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

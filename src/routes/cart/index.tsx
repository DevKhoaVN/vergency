import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart/")({
  component: CartComponent,
});

function CartComponent() {
  const cartItems = [
    {
      id: 1,
      name: "011 BlokeCore T-Shirt/White-Black",
      size: "L",
      price: 50000,
      quantity: 1,
      image:
        "https://product.hstatic.net/200000305259/product/vgc-raglan_line_wht-blk_1_5bbd3cc4f23e452fbcba36273c2755f9_1024x1024.jpg",
    },
    {
      id: 2,
      name: "Oversize Hoodie / Black",
      size: "M",
      price: 75000,
      quantity: 2,
      image:
        "https://product.hstatic.net/200000305259/product/vgc-raglan_line_wht-blk_1_5bbd3cc4f23e452fbcba36273c2755f9_1024x1024.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6  p-4 rounded-lg">
      <div className="flex space-x-1 ">
        <h2 className="text-2xl font-bold uppercase mb-4">Giỏ hàng</h2>
        <span className="text-red-500">(3 sản phẩm)</span>
      </div>

      <div className="flex space-x-8">
        <div className="space-y-4 w-[70%]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 gap-4  p-4 rounded-lg border-b border-gray-300 relative"
            >
              {/* Ảnh */}

              {/* Thông tin */}
              <div className="col-span-2 flex space-x-5">
                <img
                  src={item.image}
                  className="w-[100px] object-cover rounded-md"
                  alt=""
                />
                <div className="flex flex-col">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>

                  {/* Nút tăng giảm */}
                  <div className="flex items-center space-x-3 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Giá + nút xóa */}
              <div className="col-span-1 flex flex-col justify-between items-end">
                <button className="text-gray-600 font-medium text-sm">
                  xóa sản phẩm
                </button>
                <p className="text-xl= font-semibold">
                  {item.price * item.quantity}đ
                </p>
              </div>
            </div>
          ))}

          <button className="text-xl bg-black text-white uppercase mt-6 px-6 py-2">
            Tiếp tục mua sản phẩm khác
          </button>
        </div>

        <div className="col-span-2 text-center w-[30%]">
          <h2 className="text-start text-2xl font-bold">Đơn hàng</h2>
          <div className="bg-white border border-gray-300 px-4 py-4 mt-4 ">
            <div className="flex justify-between">
              <span className="font-bold text-xl">Tổng tiền</span>
              <span className="text-red-500 font-bold text-xl">69,000đ</span>
            </div>
            <button className="bg-red-500 w-full px-4 py-2 mt-4 text-white uppercase">
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

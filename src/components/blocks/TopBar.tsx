export default function TopBar() {
  return (
    <div className="bg-white border-b border-[#D9D9D9]">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#666]">Welcome to worldwide Megamart!</span>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <img
                src="./assets/icons/location.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
              <span className="text-[#666]">
                Deliver to <span className="font-semibold">423651</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                src="./assets/icons/delivery-truck.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
              <span className="text-[#666]">Track your order</span>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                src="./assets/icons/discount.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
              <span className="text-[#666]">All Offers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

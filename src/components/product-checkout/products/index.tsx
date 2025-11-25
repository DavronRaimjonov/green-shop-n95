import { useReduxSelector } from "../../../hooks/userRedux";
import CheckData from "./check-product";

const Prodcuts = () => {
  const { data, coupon } = useReduxSelector((state) => state.product_slice);
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const totalPrice = data.reduce(
    (acc, value) => (acc += value.userPrice as number),
    16
  );
  return (
    <div>
      {data.map((value) => (
        <CheckData key={value._id} {...value} />
      ))}
      <div className="mt-[20px] border-b-[1px] pb-[10px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">
            ${totalPrice?.toFixed(2)}
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">
            -$({coupon?.toFixed(2)})
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div className="flex justify-between mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <h1 className="text-[#46A358] text-[18px] font-bold">
          {coupon ? (
            <>
              <s>${totalPrice?.toFixed(2)}</s>
              <div>${(totalPrice - coupon).toFixed(2)}</div>
            </>
          ) : (
            <> ${totalPrice?.toFixed(2)}</>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Prodcuts;

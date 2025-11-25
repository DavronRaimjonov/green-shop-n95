import { Form, Input, Radio } from "antd";
import { cookieInfo } from "../../../generic/cookies";
import type { ChechkoutFromType, UserType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/userRedux";
import { useCheckooutMutation } from "../../../hooks/useQuery/useQueryActions";
import { LoadingOutlined } from "@ant-design/icons";

const ProductCheckoutInfo = () => {
  const radio_style: string =
    "!bordant-radio-wrapper !ant-radio-wrapper-checked !ant-radio-wrapper-in-form-item !border !border-[#46A358] !w-full !h-[40px] !flex !items-center !pl-[10px] rounded-lg css-k7429zer !mb-4";

  const { getCookie } = cookieInfo();
  const auth: UserType = getCookie("user");
  const { data } = useReduxSelector((state) => state.product_slice);
  const totalPrice = data.reduce(
    (acc, value) => (acc += value.userPrice as number),
    16
  );
  const { mutate, isPending } = useCheckooutMutation();
  const make_order = (e: ChechkoutFromType) => {
    mutate({
      shop_list: data,
      billing_address: {
        name: e.first_name,
        surname: e.last_name,
      },
      extra_shop_info: {
        total: totalPrice?.toFixed(2),
        method: e.payment_method,
      },
    });
  };

  return (
    <div>
      <Form
        onFinish={make_order}
        layout="vertical"
        fields={[
          { name: "first_name", value: auth?.name },
          { name: "last_name", value: auth?.surname },
          { name: ["country"], value: auth.billing_address.country },
          { name: ["town"], value: auth?.billing_address.town },
          {
            name: ["street_address"],
            value: auth?.billing_address.street_address,
          },
          {
            name: ["additional_street_address"],
            value: auth?.billing_address.additional_street_address,
          },
          { name: ["state"], value: auth?.billing_address.state },
          { name: ["zip"], value: auth?.billing_address.zip },
          { name: ["email"], value: auth?.email },
          { name: ["phone_number"], value: auth?.phone_number },
        ]}
      >
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"first_name"}
            label={"First name"}
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"last_name"}
            label={"Last name"}
            rules={[{ required: true, message: "Please enter your Last name" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"country"}
            label={"Country / Region"}
            rules={[{ required: true, message: "Please enter your country" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"town"}
            label={"Town / City"}
            rules={[{ required: true, message: "Please enter your town" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"street_address"}
            label={"Street / Adress"}
            rules={[{ required: true, message: "Please enter your adress" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="!mt-[30px]" name={"additional_street_address"}>
            <Input />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"state"}
            label={"State"}
            rules={[{ required: true, message: "Please enter your state" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"zip"}
            label={"Zip"}
            rules={[{ required: true, message: "Please enter your zip" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"email"}
            label={"Email"}
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name={"phone_number"}
            label={"Phone number"}
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input addonBefore={"+998"} />
          </Form.Item>
        </div>
        <Form.Item
          name="payment_method"
          label="Payment Method"
          rules={[
            {
              required: true,
              message: "Please enter Payment Method",
            },
          ]}
        >
          <Radio.Group className="flex flex-col gap-3">
            <Radio className={`${radio_style}`} value={"other-payment-methods"}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                alt=""
              />
            </Radio>
            <Radio className={`${radio_style}`} value={"dorect-bank-transfer"}>
              Dorect bank transfer
            </Radio>
            <Radio className={`${radio_style}`} value={"cash-on-delivery"}>
              Cash on delivery
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="order_notes" label="Order notes (optional)">
          <Input.TextArea
            rows={10}
            placeholder="Your order notes, thoughts, feedback, etc..."
          />
        </Form.Item>
        <button
          disabled={isPending}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]"
        >
          {isPending ? <LoadingOutlined /> : "Place Order"}
        </button>
      </Form>
    </div>
  );
};

export default ProductCheckoutInfo;

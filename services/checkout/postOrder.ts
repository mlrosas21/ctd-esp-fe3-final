import {
  CheckoutInput,
  Order,
} from "dh-marvel/interface/types";

interface Props {
  order: Order
}

export const postOrder = async ({ order }: Props) => {
  const { comic, buyer } = order;

  if(!comic || !buyer || !buyer.personalInfo || !buyer.deliveryInfo || !buyer.paymentInfo) return

  const body: CheckoutInput = {
    order: {
      image: `${comic.images[0].path}.${comic.images[0].extension}`,
      name: comic.title,
      price: comic.price,
    },
    customer: {
      name: buyer.personalInfo.name,
      lastname: buyer.personalInfo.lastname,
      email: buyer.personalInfo.email,
      address: {
        address1: buyer.deliveryInfo.address,
        address2: buyer.deliveryInfo.address2 || "",
        city: buyer.deliveryInfo.city,
        state: buyer.deliveryInfo.province,
        zipCode: buyer.deliveryInfo.zip,
      },
    },
    card: {
      number: buyer.paymentInfo.number,
      nameOnCard: buyer.paymentInfo.name,
      expDate: buyer.paymentInfo.expiry,
      cvc: buyer.paymentInfo.cvc
    }
  };

  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(
    "http://localhost:3000/api/checkout",
    requestOptions
  );
  

  return response;
};

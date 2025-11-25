import type { ReactNode } from "react";

export interface PropTypes {
  children: ReactNode;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  name: string;
  password: string;
  second_password: string;
  surname: string;
}

export interface ShowcaseCarouselType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface DiscountType {
  id: number;
  title: string;
  discoount_up_to: number;
  poster_image_url: string;
}

export interface ProductType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  _id: string;
  count?: number;
  userPrice?: number;
}

export interface PlantsType {
  id: number;
  title: string;
  path: string;
}

export interface UserType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    additional_street_address: string;
    zip: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}
export interface ChechkoutFromType {
  first_name: string;
  last_name: string;
  country: string;
  town: string;
  state: string;
  payment_method: string;
  phone_number: string;
  street_address: string;
  order_notes?: string;
  additional_street_address?: string;
  zip: string;
}

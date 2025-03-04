export type ImageType = {
  id: string;
  url: string;
};

export type MenuLinkType = {
  name: string;
  link: string;
  icon?: string;
  subMenu?: MenuLinkType[];
};

export type CategoryType = {
  id: string;
  name: string;
  icon: string;
  image: ImageType;
  createdAt: string;
};

export type GraphqlApiResponse = {
  data: {
    [key: string]: any;
  };
  errors?: {
    message: string;
    path: string[];
    extensions: {
      code: string;
      [key: string]: any;
    };
  }[];
};

export type Blog = {
  id: string;
  author: string;
  title: string;
  context: string;
  adImage: {
    id: string;
    url: string;
  };
  mainImage: {
    id: string;
    url: string;
  };
  createdAt: Date;
};

export type ContactFormPayloadType = {
  name: string;
  email: string;
  inquiryType: string;
  phone: number;
  message: string;
};

export type UserType = {
  fullName: string;
  email: string;
  avatar: string;
  clerkId?: string;
};

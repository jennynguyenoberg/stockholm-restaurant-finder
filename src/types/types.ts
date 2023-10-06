export interface Restaurant {
  location_id: string;
  name: string;
  rating: string;
  address_obj: {
    street1: string;
    city: string;
    country: string;
  };
  phone: string;
  website: string;
  photo: {
    images: {
      large: {
        url: string;
      };
    };
  };
  cuisine: {
    key: string;
    name: string;
  }[];
}

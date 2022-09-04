interface PropertyInterface {
  branch: any;
	id: number;
	address: string;
	bathroom_amount: number;
	publication_title: string;
	description: string;
	photos: {
		description: string;
		is_front_cover: boolean;
		thumb: string;
	}[];
	surface: string;
	total_surface: string;
	roofed_surface: string;
	unroofed_surface: string;
	surface_measurement: string;
	room_amount: number;
	suite_amount: number;
	floors_amount: number;
	location: {
		full_location: string;
	}
	geo_lat: string;
	geo_long: string;
	operations: {
		operation_type: string;
		prices: {
			currency: string;
			period: number;
			price: number;
		}[];
	}[];
	tags: {
		id: number;
		name: string;
		type: number;
	}[];
	custom_tags: {
		id: number;
		name: string;
		public_name: string;
	}[];
	type: {
		code: string;
		id: number;
		name: string;
	};
}

export default PropertyInterface;

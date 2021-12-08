# Hye
Frontend: [https://shopping-hye.github.io](https://shopping-hye.github.io).

Backend: [https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/hye](https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/hye).

### Key Points
1. Products and prices images are in `public` folder.
2. Products meta data are configured in `src/product_config.json`.
3. When user opens the page, they should see a randomized view based on the `product` and `price` match.
4. The user activity is tracked from the mouse **move in** and **move out** epoch timestamp in each UI section.
5. When checkout, the user should obtain a testing ID like `011220q3fx0s`, it is `version` and `session_id` combination.
6. The user should not allow to refresh the page, even if it is to do so, will also post the already filled data to API.

### Backend Data Structure
```json5
{
	"checkout_item": "20", // user checked out product & price combination, here means checked out product 2 and price 0.
	"version": "011220", // user view of product & price combination, here means product 0 - price 1, product 1 - price 2, product 2 - price 0.
	"product_cards_price_0_1": [], // product card price section with product 0 and price 1 combination.
	"product_details_image_1_2": [], // product details image section with product 1 and price 2 combination.
	"product_details_price_2_0": [ // product details price section with product 2 and price 0 combination.
		"1638931130104-in",
		"1638931130425-out"
	],
	"product_details_image_0_1": [],
	"product_details_image_2_0": [],
	"product_details_price_0_1": [],
	"product_details_tile_description_1_2": [], // product details title and description section with product 1 and price 2 combination.
	"product_details_tile_description_0_1": [],
	"product_details_tile_description_2_0": [
		"1638931130064-out"
	],
	"checkout_time": "12/7/2021, 9:38:51 PM", // user checkout time
	"session_id": "q3fx0s", // session id, unique testing session
	"sourceIp": "24.63.163.168", // user source IP address
	"product_details_price_1_2": [],
	"loading_time": "12/7/2021, 9:38:38 PM",
	"product_cards_whole_0_1": [], // product card whole section with product 0 and price 1 combination.
	"product_cards_price_1_2": [],
	"product_cards_price_2_0": [],
	"product_cards_whole_1_2": [],
	"product_cards_whole_2_0": [
		"1638931129167-in"
	]
}
```
# Hye

Frontend: https://shopping-hye.github.io/hye/
Backend: https://j3uvhhijq0.execute-api.us-east-1.amazonaws.com/api/hye

### Key Points
1. When user opens the page, they should see a randomized view based on the `product` and `price` match.
2. The user activity is tracked from the retention period in each UI section.
3. When checkout, the user should obtain a testing ID (it can be formed using the view version).

### Backend Data Structure
```shell
{
	"version": [
		"2-2", // product 2 and price 2 combination
		"1-0", // product 1 and price 0 combination
		"0-1" // product 0 and price 1 combination
	],
	"product_details_image_2_2": [], // product details page image section with product 2 and price 2 combination
	"product_details_image_1_0": [],
	"product_details_image_0_1": [],
	"product_details_price_1_0": [], // product details page price section with product 1 and price 0 combination
	"product_details_price_0_1": [],
	"product_details_tile_description_2_2": [], // product details page title & description section with product 2 and price 2 combination
	"product_details_tile_description_1_0": [],
	"product_details_tile_description_0_1": [],
	"checkout_time": "12/5/2021, 5:29:40 PM", // the checkout button cliked time
	"product_cards_2_2": [
		1.186 // product card with product 2 and price 2 combination
	],
	"user_id": "82d47aa7-4c66-41ad-8637-9e097891904d", // unique user id, may not be used
	"product_details_price_2_2": [],
	"loading_time": "12/5/2021, 5:29:29 PM", // the user when open the page
	"product_cards_1_0": [
		0.152,
		0.039,
		0.28,
		0.167
	],
	"product_cards_0_1": [
		0.079,
		0.177,
		0.081,
		0.889
	]
}
```
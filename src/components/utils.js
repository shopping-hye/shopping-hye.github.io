import product_img0 from '../../public/product_0.jpg'
import product_img1 from '../../public/product_1.jpg'
import product_img2 from '../../public/product_2.jpg'
import price_img0 from '../../public/price_0.png'
import price_img1 from '../../public/price_1.png'
import price_img2 from '../../public/price_2.png'

export function getProductImageUri(productId) {
	let productImageUri = product_img0
	switch (productId) {
		case 0:
			productImageUri = product_img0;
			break;
		case 1:
			productImageUri = product_img1;
			break;
		case 2:
			productImageUri = product_img2;
			break;
	}
	return productImageUri;
}

export function getPriceImageUri(priceId) {
	let priceImageUri = price_img0
	switch (priceId) {
		case 0:
			priceImageUri = price_img0;
			break;
		case 1:
			priceImageUri = price_img1;
			break;
		case 2:
			priceImageUri = price_img2;
			break;
	}
	return priceImageUri;
}
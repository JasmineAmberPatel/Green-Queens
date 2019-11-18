export default calculateCarbon;

function calculateCarbon(jeans, woolJumper, polyesterDress, cottonTShirt, cottonShirts, polyesterCoat, rubberShoes) {
	const jeansCarbon = 33.4;
	const woolJumperCarbon = 24;
	const polyesterDressCarbon = 2.3;
	const cottonTCarbon = 15;
	const cottonShirtCarbon = 15;
	const polyesterCoatCarbon = 18;
	const rubberShoesCarbon = 14;
	const sum =
		Number(jeans) * jeansCarbon +
		Number(woolJumper) * woolJumperCarbon +
		Number(polyesterDress) * polyesterDressCarbon +
		Number(cottonTShirt) * cottonTCarbon +
		Number(cottonShirts) * cottonShirtCarbon +
		Number(polyesterCoat) * polyesterCoatCarbon +
		Number(rubberShoes) * rubberShoesCarbon;
	return sum;
}

export default calculateWater;

function calculateWater(jeans, woolJumper, polyesterDress, cottonTShirt, cottonShirts, polyesterCoat, rubberShoes) {
	const jeansWater = 7600;
	const woolJumperWater = 460;
	const polyesterDressWater = 1900;
	const cottonTWater = 2700;
	const cottonShirtWater = 2700;
	const polyesterCoatWater = 1900;
	const rubberShoesWater = 2300;
	const sum =
		Number(jeans) * jeansWater +
		Number(woolJumper) * woolJumperWater +
		Number(polyesterDress) * polyesterDressWater +
		Number(cottonTShirt) * cottonTWater +
		Number(cottonShirts) * cottonShirtWater +
		Number(polyesterCoat) * polyesterCoatWater +
		Number(rubberShoes) * rubberShoesWater;
	return Math.round(sum);
}

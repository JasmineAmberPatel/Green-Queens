const schema = {
  title: "How many clothes did you buy this year? Enter the number below.",
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string", 
      title: "Name", 
      default: "", 
      id:"name"
    },
    jeans: {
      type: "number", 
      title: "Jeans", 
      minimum: 0, 
      id:"jeans"
    },
    woolJumper: {
      type: "number", 
      title: "Wool Jumpers", 
      minimum: 0, 
      id:"woolJumpers"
    },
    polyesterDress: {
      type: "number", 
      title: "Polyester Dresses", 
      minimum: 0, 
      id:"polyesterDress"
    },
    cottonTShirt: {
      type: "number", 
      title: "Cotton T-Shirt", 
      minimum: 0, 
      id:"cottonTShirt"
    },
    cottonShirts: {
      type: "number", 
      title: "Cotton Shirts", 
      minimum: 0, 
      id:"cottonShirts"
    },
    polyesterCoat: {
      type: "number", 
      title: "Polyester Coats", 
      minimum: 0, 
      id:"polyesterCoat"
    },
    rubberShoes: {
      type: "number", 
      title: "Rubber Soled Shoes", 
      minimum: 0, 
      id:"rubberShoes"
    },
  }
};

export default schema;


import React,  { useState } from "react";

const productList = [
  {
    Product_id:1,
    Product_name:"Bulb",
    Product_description: "some description",
    Product_price:30,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:10
  },
  {
    Product_id:2,
    Product_name:"Fan",
    Product_description: "red color ",
    Product_price:3000,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:15
  },
  {
    Product_id:3,
    Product_name:"SweatShirt",
    Product_description: "black in color pure cotton  ",
    Product_price:4500,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:80
  },
  {
    Product_id:4,
    Product_name:"Adidas shoes",
    Product_description: "These are white adidas shoes",
    Product_price:7800,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:15
  },
  {
    Product_id:5,
    Product_name:"Jacket",
    Product_description: "its brown color leather jacket",
    Product_price:10000,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:20
  },
  {
    Product_id:6,
    Product_name:"Vans shirt",
    Product_description: " white color shirt,pure cotton",
    Product_price:1200,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:68
  },
  {
    Product_id:7,
    Product_name:"Cropped-sho",
    Product_description: "black color shirt",
    Product_price:600,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:65
  },
  {
    Product_id:8,
    Product_name:"one plus",
    Product_description: "black color,128gb",
    Product_price:37000,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:15
  },
  {
    Product_id:9,
    Product_name:"Iphone",
    Product_description: "white color,128gb",
    Product_price:77000,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:15
  },
  {
    Product_id:10,
    Product_name:"Alexa Echo",
    Product_description: "red color",
    Product_price:4500,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:10
  },
  {
    Product_id:11,
    Product_name:"nike socks",
    Product_description: "brown color,cotton",
    Product_price:450,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:10
  },
  {
    Product_id:12,
    Product_name:"Google pixel",
    Product_description: "black color,256 gb", 
    Product_price:45000,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:10
  },
  {
    Product_id:13,
    Product_name:"Band-Aid",
    Product_description: "An adhesive bandage brand owned by Johnson & Johnson", 
    Product_price:50,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:10
  },
  {
    Product_id:14,
    Product_name:"Tupperware",
    Product_description: "These hard-plastic containers are a trademark of Tupperware Brands Corp", 
    Product_price:450,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:90
  },
  {
    Product_id:15,
    Product_name:"Swiss Army Knife",
    Product_description: "Owned by Victorinox and Wenger) synonomous with a multi-purpose knife", 
    Product_price:900,
    Product_image:"./img/bulb.jpg",
    Product_status:"In Stock",
    Product_quantity:85
  }
];

const SearchProducts = ()=> {
const [searchText, setSearchText] = useState("");
const [data, setData] = useState(productList);

// exclude column list from filter
const excludeColumns = ["id", "color"];

// handle change event of search input
const handleChange = value => {
  setSearchText(value);
  filterData(value);
};

// filter records by search text
const filterData = value => {
  const lowercasedValue = value.toLowerCase().trim();
  if (lowercasedValue === "") setData(productList);
  else {
    const filteredData = productList.filter(item => {
      return Object.keys(item).some(key =>
        excludeColumns.includes(key)
          ? false
          : item[key]
              .toString()
              .toLowerCase()
              .includes(lowercasedValue)
      );
    });
    setData(filteredData);
  }
};


return (
  <div className="App">
    <br />
    Search:{" "}
    <input
      style={{ marginLeft: 5 }}
      type="text"
      placeholder="Type to search..."
      value={searchText}
      onChange={e => handleChange(e.target.value)}
    />
    <br />
    <br />
    
    <div className="box-container">
      {data.map((d, i) => {
        return (
          <div key={i} className="box" style={{ backgroundColor: d.color }}>
            
            <img src={d.Product_image} alt={d.Product_name}/>
            <br />
            <b>Product Name: </b>
            {d.Product_name}
            <br />
            <b>Product Description: </b>
            {d.Product_description}
            <br />
            <b>Product Price: </b>
            {d.Product_price}
            <br />
            <button className = "button">Add To Cart</button>
          </div>
        );
      })}
      <div className="clearboth" />
      {data.length === 0 && <span>No records found to display!</span>}
    </div>
  </div>
);
}

export default SearchProducts;

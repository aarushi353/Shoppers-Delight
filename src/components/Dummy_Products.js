const Products = [
  {
    id: "1",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12422532/2020/9/15/652136c8-86c0-499c-a1e3-ea9461fb14811600168275068-WROGN-Men-Shirts-8301600168273193-1.jpg",
    title: "Navy Blue Shirt",
    sellingamount: 2299,
    actualprice: 1379,
    discount: 40,
    description: "Men Navy Blue Slim Fit Solid Casual Shirt By WROGN",
  },
  {
    id: "2",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10187087/2019/12/23/b729ed82-e140-4a16-932e-4c7ade1cacca1577100011583-WROGN-Men-Navy-Blue-Self-Design-Jacket-6271577100009656-1.jpg",
    title: "WROGN Jacket",
    sellingamount: 2999,
    actualprice: 4999,
    discount: 40,
    description: "Men Black Self Design Jacket",
  },
  {
    id: "3",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14504984/2021/7/22/84cbb774-e7ab-4eab-8309-585ebcc9982f1626949908034-ADIDAS-Men-Tshirts-5191626949907499-1.jpg",
    title: "ADIDAS",
    sellingamount: 1279,
    actualprice: 1599,
    discount: 20,
    description: "Men Charcoal Grey Brand Logo Detail PR T-shirt",
  },
  {
    id: "4",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824340/2017/8/3/11501764560431-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3291501764560241-2.jpg",
    title: "Roadster",
    sellingamount: 419,
    actualprice: 699,
    discount: 40,
    description: "Men Grey Melange Solid Longline T-shirt with Raw Edges",
  },
  {
    id: "5",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8240149/2019/3/7/b002f1f0-5798-4950-acd0-e5065d9d55c51551955451550-Tokyo-Talkies-Women-Green-Printed-Fit-and-Flare-Dress-454155-1.jpg",
    title: "Tokyo Talkies",
    sellingamount: 588,
    actualprice: 1549,
    discount: 62,
    description: "Women Green Printed Fit and Flare Dress",
  },
  {
    id: "6",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13944156/2021/4/3/ff6807b2-546a-4b74-aff3-a7be9046bc7c1617430594564BlazersMANGOWomenTopsMANGOWomenTopsMANGOWomenTopsMANGOWomenT1.jpg",
    title: "MANGO",
    sellingamount: 1432,
    actualprice: 1790,
    discount: 20,
    description: "Women Pink Solid Pure Cotton Round Neck Sustainable T-shirt",
  },
  {
    id: "7",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/5/15/d5adc9f2-38c6-424c-8735-079907a648c01557918496131-1.jpg",
    title: "FableStreet",
    sellingamount: 1196,
    actualprice: 1495,
    discount: 20,
    description: "Women Navy Blue Solid Top",
  },

  {
    id: "8",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13757388/2021/6/23/6eaa0bb9-2083-4e4c-a40b-23b74daee21d1624449627618-Roadster-Women-Shorts-2291624449627129-4.jpg",
    title: "Roadster",
    sellingamount: 604,
    actualprice: 1099,
    discount: 45,
    description: "Women Blue Distressed Loose Fit High-Rise Denim Shorts",
  },
  {
    id: "9",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9stjm80/headphone/e/o/f/rockerz-450-boat-original-imafrgfsan7mpvdf.jpeg?q=70",
    title: "boAt Rockerz",
    sellingamount: 1199,
    actualprice: 3990,
    discount: 69,
    description:
      "boAt Rockerz 450 Bluetooth Headset  (Luscious Black, On the Ear)",
  },
  {
    id: "10",
    image: "https://m.media-amazon.com/images/I/718R1ii+iBS._AC_SL1500_.jpg",
    title: "OnePlus Nord N10",
    sellingamount: 33085,
    actualamount: 36762,
    discount: 10,
    description:
      "5G Unlocked Smartphone, Midnight Ice​, 6GB RAM + 128GB storage, Model BE2026",
  },
  {
    id: "11",
    image:
      "https://rukminim1.flixcart.com/image/416/416/camera/y/x/b/sony-cyber-shot-dsc-w800-point-shoot-original-imadvgz7tgqw8gw8.jpeg?q=70",
    title: "SONY CyberShot",
    sellingamount: 6999,
    actualprice: 7790,
    discount: 10,
    description:
      "DSC-W800/BC IN5 (20.1 MP, 5 Optical Zoom, 13x Digital Zoom, Black)",
  },
  {
    id: "12",
    image: "https://m.media-amazon.com/images/I/61aDcYQ5QFL._AC_SL1200_.jpg",
    title: "Sony DSCWX350",
    sellingamount: 17783,
    actualamount: 22229,
    discount: 20,
    description:
      "8 MP Digital Camera (Black), 4K quality still image output via HDMI2",
  },
  {
    id: "13",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kp5sya80/ceiling-lamp/w/s/d/0-hl76-linear-brightlyt-original-imag3gkmgepmw5r7.jpeg?q=70",
    title: "Brightlyt Ceiling Lamp",
    sellingamount: 699,
    actualamount: 3600,
    discount: 80,
    description: "Brightlyt Single Head Vintage Black aluminum Hanging Light",
  },
  {
    id: "14",
    image:
      "https://rukminim1.flixcart.com/image/416/416/ki0loy80-0/rack-shelf/f/w/t/dop81-domestic-point-original-imafxvtggjybdbha.jpeg?q=70",
    title: "Wooden Wall Shelves",
    sellingamount: 1239,
    actualamount: 2999,
    discount: 58,
    description:
      "Home Decor, Decoration-Set of 6 MDF (Medium Density Fiber) Wall Shelf ",
  },
  {
    id: "15",
    image:
      "https://rukminim1.flixcart.com/image/416/416/koono280/wall-clock/k/v/5/printed-wall-clock-10-inches-round-shaped-designer-wall-clock-original-imag33gpsgfdt7tv.jpeg?q=70",
    title: "Wall Clock",
    sellingamount: 339,
    actualamount: 1499,
    discount: 77,
    description: "E Deals Analog 25 cm X 25 cm Wall Clock",
  },
  {
    id: "16",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k5vcya80/showpiece-figurine/d/m/c/monk-miniature-buddha-pinkcity-xpress-original-imafe33xngxaup5d.jpeg?q=70",
    title: "Decor India Hub Set of 4 Monk",
    sellingamount: 199,
    actualamount: 599,
    discount: 66,
    description:
      "Miniature Buddha Figurines Showpiece for Home, Office Decoration Decorative Showpiece",
  },
];

export default Products;

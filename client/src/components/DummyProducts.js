const DummyProducts = [
  {
    id: "1",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12422532/2020/9/15/652136c8-86c0-499c-a1e3-ea9461fb14811600168275068-WROGN-Men-Shirts-8301600168273193-1.jpg",
    title: "Shirt",
    category: "Men",
    sellingamount: 2299,
    actualprice: 1379,
    discount: 40,
    description: "Men Navy Blue Slim Fit Solid Casual Shirt",
  },
  {
    id: "2",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10187087/2019/12/23/b729ed82-e140-4a16-932e-4c7ade1cacca1577100011583-WROGN-Men-Navy-Blue-Self-Design-Jacket-6271577100009656-1.jpg",
    title: "Jacket",
    category: "Men",
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
    category: "Men",
    sellingamount: 1279,
    actualprice: 1599,
    discount: 20,
    description: "Charcoal Grey T-shirt for Men",
  },
  {
    id: "4",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824340/2017/8/3/11501764560431-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3291501764560241-2.jpg",
    title: "Roadster",
    category: "Men",
    sellingamount: 419,
    actualprice: 699,
    discount: 40,
    description: "Grey Melange T-shirt with Raw Edges",
  },
  {
    id: "5",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8240149/2019/3/7/b002f1f0-5798-4950-acd0-e5065d9d55c51551955451550-Tokyo-Talkies-Women-Green-Printed-Fit-and-Flare-Dress-454155-1.jpg",
    title: "Tokyo Talkies",
    category: "Women",
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
    category: "Women",
    sellingamount: 1432,
    actualprice: 1790,
    discount: 20,
    description: "Women Pink Pure Cotton Round Neck T-shirt",
  },
  {
    id: "7",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/5/15/d5adc9f2-38c6-424c-8735-079907a648c01557918496131-1.jpg",
    title: "FableStreet",
    category: "Women",
    sellingamount: 1196,
    actualprice: 1495,
    discount: 20,
    description: "Navy Blue Solid Top for Women",
  },

  {
    id: "8",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13757388/2021/6/23/6eaa0bb9-2083-4e4c-a40b-23b74daee21d1624449627618-Roadster-Women-Shorts-2291624449627129-4.jpg",
    title: "Roadster",
    category: "Women",
    sellingamount: 604,
    actualprice: 1099,
    discount: 45,
    description: "Blue Distressed Loose Fit High-Rise Denim Shorts",
  },
  {
    id: "9",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9stjm80/headphone/e/o/f/rockerz-450-boat-original-imafrgfsan7mpvdf.jpeg?q=70",
    title: "boAt Rockerz",
    category: "Electronics",
    sellingamount: 1199,
    actualprice: 3990,
    discount: 69,
    description: "boAt Rockerz 450 Bluetooth Headset",
  },
  {
    id: "10",
    image: "https://m.media-amazon.com/images/I/718R1ii+iBS._AC_SL1500_.jpg",
    title: "OnePlus",
    category: "Electronics",
    sellingamount: 33085,
    actualprice: 36762,
    discount: 10,
    description: "5G Smartphone, 6GB RAM + 128GB storage",
  },
  {
    id: "11",
    image:
      "https://rukminim1.flixcart.com/image/416/416/camera/y/x/b/sony-cyber-shot-dsc-w800-point-shoot-original-imadvgz7tgqw8gw8.jpeg?q=70",
    title: "CyberShot",
    category: "Electronics",
    sellingamount: 6999,
    actualprice: 7790,
    discount: 10,
    description: "20.1 MP, 5 Optical Zoom, 13x Digital Zoom, Black",
  },
  {
    id: "12",
    image: "https://m.media-amazon.com/images/I/61aDcYQ5QFL._AC_SL1200_.jpg",
    title: "Sony",
    category: "Electronics",
    sellingamount: 17783,
    actualprice: 22229,
    discount: 20,
    description: "8 MP Digital Camera (Black)",
  },
  {
    id: "13",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kp5sya80/ceiling-lamp/w/s/d/0-hl76-linear-brightlyt-original-imag3gkmgepmw5r7.jpeg?q=70",
    title: "Ceiling Lamp",
    category: "Home & Decor",
    sellingamount: 699,
    actualprice: 3600,
    discount: 80,
    description: "Brightlyt Vintage Black Hanging Light",
  },
  {
    id: "14",
    image:
      "https://rukminim1.flixcart.com/image/416/416/ki0loy80-0/rack-shelf/f/w/t/dop81-domestic-point-original-imafxvtggjybdbha.jpeg?q=70",
    title: "Wall Shelves",
    category: "Home & Decor",
    sellingamount: 1239,
    actualprice: 2999,
    discount: 58,
    description: "Home Decor, Decoration-Set of 6 MDF Wall Shelf ",
  },
  {
    id: "15",
    image:
      "https://rukminim1.flixcart.com/image/416/416/koono280/wall-clock/k/v/5/printed-wall-clock-10-inches-round-shaped-designer-wall-clock-original-imag33gpsgfdt7tv.jpeg?q=70",
    title: "Wall Clock",
    category: "Home & Decor",
    sellingamount: 339,
    actualprice: 1499,
    discount: 77,
    description: "E Deals Analog 25 cm X 25 cm Wall Clock",
  },
  {
    id: "16",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k5vcya80/showpiece-figurine/d/m/c/monk-miniature-buddha-pinkcity-xpress-original-imafe33xngxaup5d.jpeg?q=70",
    title: "Set of 4 Monk",
    category: "Home & Decor",
    sellingamount: 199,
    actualprice: 599,
    discount: 66,
    description: "Miniature Buddha Figurines Showpiece",
  },
  {
    id: "17",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kqttg280/necklace-chain/u/8/r/heartbeat-chain-brado-jewellery-original-imag4qwqp9zgp685.jpeg?q=50",
    title: "Pendant",
    category: "Accessories",
    sellingamount: 179,
    actualprice: 999,
    discount: 82,
    description: "Love Heart Beat Shape Necklace Golden Chain",
  },
  {
    id: "18",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kn97te80/watch/h/l/u/6198ql01-fastrack-original-imagfyzc4zdbygp7.jpeg?q=50",
    title: "AnalogWatch",
    category: "Accessories",
    sellingamount: 2956,
    actualprice: 3695,
    discount: 20,
    description: "NN6198QL01 Go Skate 3.0 Watch For Women",
  },
  {
    id: "19",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/k5zn9u80/bangle-bracelet-armlet/p/2/f/free-size-1-ssbr1076-silver-shoppee-original-imafzjtzn33jhhh7.jpeg?q=50",
    title: "Bracelet",
    category: "Accessories",
    sellingamount: 575,
    actualprice: 3999,
    discount: 85,
    description: "Sterling Silver Sterling Silver Bracelet",
  },
  {
    id: "21",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kjlrb0w0/computer/a/k/b/asus-original-imafz522ntfk9hwx.jpeg?q=70",
    title: "ASUS VivoBook",
    sellingamount: 50990,
    actualprice: 63990,
    discount: 20,
    description: "15 Core i5 10th Gen-(8 GB/1 TB HDD/15.6 inch) laptop",
  },
  {
    id: "22",
    image:
      "https://rukminim1.flixcart.com/image/416/416/camera/y/x/b/sony-cyber-shot-dsc-w800-point-shoot-original-imadvgz7tgqw8gw8.jpeg?q=70",
    title: "SONY CyberShot",
    sellingamount: 6999,
    actualprice: 7790,
    discount: 10,
    description: "DSC-W800/BC IN5 (20.1 MP, 5 Optical Zoom, 13x Digital Zoom)",
  },
  {
    id: "23",
    image:
      "https://rukminim1.flixcart.com/image/580/696/kingqkw0-0/watch/l/e/k/dk11421-7-daniel-klein-original-imafye2gaqdep7cd.jpeg?q=50",
    title: "Analog Watch",
    sellingamount: 6000,
    actualprice: 7500,
    discount: 20,
    description: "TOMMY HILFIGER,TH1791381W Analog Watch - For Men",
  },
  {
    id: "24",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kqttg280/t-shirt/3/x/d/m-meppcn012b-metronaut-original-imag4rcnzfqynhs6.jpeg?q=50",
    title: "Black T-Shirt",
    sellingamount: 975,
    actualprice: 1500,
    discount: 55,
    description: "METRONAUT, Graphic Print Men Round Neck Black T-Shirt",
  },
  {
    id: "25",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9stjm80/headphone/e/o/f/rockerz-450-boat-original-imafrgfsan7mpvdf.jpeg?q=70",
    title: "boAt Rockerz",
    sellingamount: 1199,
    actualprice: 3990,
    discount: 69,
    description: "boAt Rockerz 450 Bluetooth Headset (Luscious Black)",
  },
  {
    id: "26",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kqttg280/necklace-chain/u/8/r/heartbeat-chain-brado-jewellery-original-imag4qwqp9zgp685.jpeg?q=50",
    title: "Pendant",
    category: "Accessories",
    sellingamount: 179,
    actualprice: 999,
    discount: 82,
    description: "Love Heart Beat Shaped Pendant with Golden Chain",
  },
  {
    id: "27",
    image:
      "https://rukminim1.flixcart.com/image/580/696/knunf680/t-shirt/u/c/f/s-crp-nvr-viral-trend-original-imag2gy84dsejzax.jpeg?q=50",
    title: "H&M",
    sellingamount: 975,
    actualprice: 1500,
    discount: 55,
    description: "Printed Women Round Neck Green T-Shirt For Woman",
  },

  {
    id: "8",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kfoapow0-0/shirt/b/w/n/l-white-5-jai-textiles-original-imafw2gqhcpfgygn.jpeg?q=50",
    title: "Allen Solly",
    sellingamount: 825,
    actualprice: 1500,
    discount: 45,
    description: "Plain Dailywear White Shirt For Men by Allen Solly",
  },
];

export default DummyProducts;

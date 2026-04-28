import Types "types";
import PartsApi "mixins/parts-api";
import List "mo:core/List";

actor {
  let parts = List.fromArray<Types.BikePart>([
    // ── KTM ─────────────────────────────────────────────────────────────
    {
      id = "ktm-001";
      name = "KTM Duke 390 Front Brake Disc";
      brand = "KTM";
      category = "Brakes";
      price = 3850;
      stock = #InStock;
      distance = "1.2 km away";
      imageUrl = "https://www.ktm.com/blob/1337974/c7e7e1a5b5e5b5e5b5e5b5e5b5e5b5e5/duke-390-front-brake-disc.jpg";
      description = "Genuine KTM Duke 390 front brake disc rotor. High-carbon steel construction for fade-free braking performance. Fits 2013–2023 models.";
      sellerName = "Raj KTM Spares";
      sellerPhone = "+91-98765-11001";
      sellerAddress = "12, MG Road, Koramangala, Bengaluru – 560034";
    },
    {
      id = "ktm-002";
      name = "KTM RC 200 Rear Sprocket Kit";
      brand = "KTM";
      category = "Chain";
      price = 2100;
      stock = #Low;
      distance = "3.4 km away";
      imageUrl = "https://www.revzilla.com/product_images/0005/1500/ktm-rc200-sprocket.jpg";
      description = "OEM-spec rear sprocket and chain kit for KTM RC 200. Includes 42T sprocket + 520 O-ring chain. Recommended replacement every 25,000 km.";
      sellerName = "Raj KTM Spares";
      sellerPhone = "+91-98765-11001";
      sellerAddress = "12, MG Road, Koramangala, Bengaluru – 560034";
    },
    {
      id = "ktm-003";
      name = "KTM Duke 200 Engine Oil Filter";
      brand = "KTM";
      category = "Engine";
      price = 450;
      stock = #InStock;
      distance = "1.2 km away";
      imageUrl = "https://www.bikroy.com/static/img/ktm-duke-200-oil-filter.jpg";
      description = "Genuine KTM paper oil filter for Duke 200. Ensures clean oil circulation and protects engine internals. Fits all Duke 200 models.";
      sellerName = "Raj KTM Spares";
      sellerPhone = "+91-98765-11001";
      sellerAddress = "12, MG Road, Koramangala, Bengaluru – 560034";
    },
    {
      id = "ktm-004";
      name = "KTM Duke 390 MRF Nylogrip Tyre";
      brand = "KTM";
      category = "Tyres";
      price = 4800;
      stock = #InStock;
      distance = "2.7 km away";
      imageUrl = "https://www.mrftyres.com/images/nylogrip-zapper.jpg";
      description = "MRF Nylogrip Zapper S front tyre 110/70-17 for KTM Duke 390. Superior wet and dry grip with long tread life.";
      sellerName = "Metro Tyres & Spares";
      sellerPhone = "+91-80123-45678";
      sellerAddress = "77, Hosur Road, BTM Layout, Bengaluru – 560068";
    },
    // ── Honda ────────────────────────────────────────────────────────────
    {
      id = "honda-001";
      name = "Honda CB Shine Brake Shoe Set";
      brand = "Honda";
      category = "Brakes";
      price = 680;
      stock = #InStock;
      distance = "0.8 km away";
      imageUrl = "https://www.hondamotorcycle.co.in/var/storage/images/cb-shine-brake-shoe.jpg";
      description = "Genuine Honda CB Shine front and rear drum brake shoe set. Consistent braking in city and highway conditions. Easy DIY fitment.";
      sellerName = "Honda Genuine Parts Store";
      sellerPhone = "+91-90012-33445";
      sellerAddress = "34, Church Street, Sadashivanagar, Bengaluru – 560080";
    },
    {
      id = "honda-002";
      name = "Honda Activa 6G Engine Air Filter";
      brand = "Honda";
      category = "Engine";
      price = 320;
      stock = #InStock;
      distance = "0.8 km away";
      imageUrl = "https://www.hondamotorcycle.co.in/var/storage/images/activa-6g-air-filter.jpg";
      description = "OEM Honda Activa 6G air filter element. Prevents dust and debris entering the carburetor. Replace every 8,000 km or annually.";
      sellerName = "Honda Genuine Parts Store";
      sellerPhone = "+91-90012-33445";
      sellerAddress = "34, Church Street, Sadashivanagar, Bengaluru – 560080";
    },
    {
      id = "honda-003";
      name = "Honda CB Hornet 160R Drive Chain";
      brand = "Honda";
      category = "Chain";
      price = 1550;
      stock = #Low;
      distance = "2.1 km away";
      imageUrl = "https://www.sunstarindia.com/images/cb-hornet-chain.jpg";
      description = "Sunstar 428H heavy-duty drive chain for Honda CB Hornet 160R. 128 links, clip-type master link. Fits 2016–2022 models.";
      sellerName = "Sri Rama Auto Parts";
      sellerPhone = "+91-98441-20030";
      sellerAddress = "56, Old Airport Road, Domlur, Bengaluru – 560071";
    },
    {
      id = "honda-004";
      name = "Honda CB350 CEAT Zoom Rear Tyre";
      brand = "Honda";
      category = "Tyres";
      price = 5200;
      stock = #OutOfStock;
      distance = "4.5 km away";
      imageUrl = "https://www.ceat.com/images/products/zoom-d-plus.jpg";
      description = "CEAT Zoom D+ rear tyre 130/70-17 for Honda CB350 H'Ness. Excellent cornering stability and road grip for highway cruising.";
      sellerName = "Metro Tyres & Spares";
      sellerPhone = "+91-80123-45678";
      sellerAddress = "77, Hosur Road, BTM Layout, Bengaluru – 560068";
    },
    {
      id = "honda-005";
      name = "Honda Activa USB Charging Port Kit";
      brand = "Honda";
      category = "Accessories";
      price = 750;
      stock = #InStock;
      distance = "1.5 km away";
      imageUrl = "https://www.amazon.in/images/I/activa-usb-charger.jpg";
      description = "Plug-and-play USB charging port kit for Honda Activa scooters. 5V 2A output, waterproof cover, easy handlebar mount.";
      sellerName = "Accessory Hub";
      sellerPhone = "+91-70099-12345";
      sellerAddress = "23, Brigade Road, Commercial Street, Bengaluru – 560001";
    },
    // ── Bajaj ────────────────────────────────────────────────────────────
    {
      id = "bajaj-001";
      name = "Bajaj Pulsar 150 Front Disc Brake Pad";
      brand = "Bajaj";
      category = "Brakes";
      price = 560;
      stock = #InStock;
      distance = "1.8 km away";
      imageUrl = "https://www.bajajauto.com/images/spares/pulsar150-disc-pad.jpg";
      description = "Genuine Bajaj Pulsar 150 front semi-metallic brake pad set. High thermal tolerance with consistent stopping power. OEM fit.";
      sellerName = "Bajaj Authorized Spares";
      sellerPhone = "+91-97002-55566";
      sellerAddress = "88, Residency Road, Richmond Town, Bengaluru – 560025";
    },
    {
      id = "bajaj-002";
      name = "Bajaj Dominar 400 Engine Cylinder Gasket";
      brand = "Bajaj";
      category = "Engine";
      price = 1200;
      stock = #InStock;
      distance = "1.8 km away";
      imageUrl = "https://www.bajajauto.com/images/spares/dominar400-cylinder-gasket.jpg";
      description = "OEM cylinder head gasket for Bajaj Dominar 400. Multi-layer steel construction prevents compression leak. Fits all Dominar 400/400 UG models.";
      sellerName = "Bajaj Authorized Spares";
      sellerPhone = "+91-97002-55566";
      sellerAddress = "88, Residency Road, Richmond Town, Bengaluru – 560025";
    },
    {
      id = "bajaj-003";
      name = "Bajaj Pulsar NS200 Chain Sprocket Kit";
      brand = "Bajaj";
      category = "Chain";
      price = 1900;
      stock = #Low;
      distance = "3.0 km away";
      imageUrl = "https://www.sunstarindia.com/images/pulsar-ns200-sprocket-kit.jpg";
      description = "Sunstar premium chain and sprocket kit for Bajaj Pulsar NS200. Includes 43T rear sprocket, 15T front sprocket, and 520 O-ring chain.";
      sellerName = "Sri Rama Auto Parts";
      sellerPhone = "+91-98441-20030";
      sellerAddress = "56, Old Airport Road, Domlur, Bengaluru – 560071";
    },
    {
      id = "bajaj-004";
      name = "Bajaj Avenger 220 Saddlebag Set";
      brand = "Bajaj";
      category = "Accessories";
      price = 2800;
      stock = #InStock;
      distance = "2.3 km away";
      imageUrl = "https://www.bajajauto.com/images/spares/avenger220-saddlebag.jpg";
      description = "Genuine Bajaj Avenger 220 Cruise leather-finish saddlebag set. 20L capacity each side, quick-release buckles, weather-resistant lining.";
      sellerName = "Accessory Hub";
      sellerPhone = "+91-70099-12345";
      sellerAddress = "23, Brigade Road, Commercial Street, Bengaluru – 560001";
    },
    // ── Yamaha ───────────────────────────────────────────────────────────
    {
      id = "yamaha-001";
      name = "Yamaha R15 V4 Brembo Brake Caliper";
      brand = "Yamaha";
      category = "Brakes";
      price = 6500;
      stock = #InStock;
      distance = "2.5 km away";
      imageUrl = "https://www.yamaha-motor-india.com/images/spares/r15v4-front-caliper.jpg";
      description = "Genuine Yamaha R15 V4 front Brembo-sourced 2-pot brake caliper. Anodized aluminum body, direct bolt-on replacement. Fits R15 V4 2022+.";
      sellerName = "Yamaha Performance Parts";
      sellerPhone = "+91-96660-77788";
      sellerAddress = "101, Indiranagar 100ft Road, Bengaluru – 560038";
    },
    {
      id = "yamaha-002";
      name = "Yamaha MT-15 Engine Spark Plug (NGK)";
      brand = "Yamaha";
      category = "Engine";
      price = 390;
      stock = #InStock;
      distance = "2.5 km away";
      imageUrl = "https://www.ngksparkplugs.com/images/products/cr8e-yamaha-mt15.jpg";
      description = "NGK CR8E iridium spark plug for Yamaha MT-15 155cc engine. Extended electrode life up to 40,000 km, better cold start performance.";
      sellerName = "Yamaha Performance Parts";
      sellerPhone = "+91-96660-77788";
      sellerAddress = "101, Indiranagar 100ft Road, Bengaluru – 560038";
    },
    {
      id = "yamaha-003";
      name = "Yamaha FZ-S V3 Apollo Amazer Tyre";
      brand = "Yamaha";
      category = "Tyres";
      price = 3600;
      stock = #InStock;
      distance = "4.1 km away";
      imageUrl = "https://www.apollotyres.com/images/amazer4g-fzs.jpg";
      description = "Apollo Amazer 4G Life rear tyre 140/60-17 for Yamaha FZ-S V3. All-weather tread pattern, extended mileage up to 30,000 km.";
      sellerName = "Metro Tyres & Spares";
      sellerPhone = "+91-80123-45678";
      sellerAddress = "77, Hosur Road, BTM Layout, Bengaluru – 560068";
    },
    {
      id = "yamaha-004";
      name = "Yamaha R15 Windscreen Visor Extension";
      brand = "Yamaha";
      category = "Accessories";
      price = 1100;
      stock = #Low;
      distance = "3.8 km away";
      imageUrl = "https://www.yamaha-motor-india.com/images/accessories/r15-windscreen-visor.jpg";
      description = "OEM Yamaha R15 V3/V4 tinted windscreen visor extension. Reduces wind blast at highway speeds. UV-resistant polycarbonate, tool-free fitment.";
      sellerName = "Accessory Hub";
      sellerPhone = "+91-70099-12345";
      sellerAddress = "23, Brigade Road, Commercial Street, Bengaluru – 560001";
    },
  ]);

  include PartsApi(parts);
};

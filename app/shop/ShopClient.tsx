"use client";

import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ui/productcard";
import Button from "@/components/ui/Button";
import { useStore } from "@/lib/store";

const productsByCategory = {
  Keyboard: [
    { id: "1", name: "Razer DeathStalker V2 Pro Wireless", price: 12999, image: "/images/keyboard.jpg", category: "Keyboard" },
    { id: "2", name: "Logitech G915 TKL Lightspeed", price: 14500, image: "/images/keyboard2.jpg", category: "Keyboard" },
    { id: "3", name: "Keychron Q1 Custom Mechanical", price: 11000, image: "/images/keyboard3.jpg", category: "Keyboard" },
    { id: "4", name: "SteelSeries Apex Pro TKL", price: 15999, image: "/images/keyboard4.jpg", category: "Keyboard" },
    { id: "5", name: "ASUS ROG Azoth Wireless 75%", price: 18999, image: "/images/keyboard5.jpg", category: "Keyboard" },
    { id: "6", name: "Ducky One 3 Daybreak Edition", price: 9500, image: "/images/keyboard6.jpg", category: "Keyboard" },
    { id: "7", name: "Corsair K100 RGB Mechanical", price: 6999, image: "/images/keyboard7.jpg", category: "Keyboard" },
    { id: "8", name: "Wooting 60HE Analog Keyboard", price: 13500, image: "/images/keyboard8.jpg", category: "Keyboard" },
  ],

  Mouse: [
    { id: "9", name: "Logitech G Pro X Superlight 2", price: 13999, image: "/images/mouse.jpg", category: "Mouse" },
    { id: "10", name: "Razer DeathAdder V3 Pro", price: 12499, image: "/images/mouse2.jpg", category: "Mouse" },
    { id: "11", name: "Finalmouse UltralightX", price: 15500, image: "/images/mouse3.jpg", category: "Mouse" },
    { id: "12", name: "Zowie EC2-CW Wireless", price: 11000, image: "/images/mouse4.jpg", category: "Mouse" },
    { id: "13", name: "Logitech MX Master 3S", price: 9500, image: "/images/mouse5.jpg", category: "Mouse" },
    { id: "14", name: "Glorious Model O 2 Wireless", price: 7999, image: "/images/mouse6.jpg", category: "Mouse" },
    { id: "15", name: "SteelSeries Aerox 3 Lightweight", price: 5499, image: "/images/mouse7.jpg", category: "Mouse" },
    { id: "16", name: "Razer Viper V2 Pro", price: 11999, image: "/images/mouse8.jpg", category: "Mouse" },
  ],

  Headset: [
    { id: "17", name: "HyperX Cloud III Wireless", price: 12999, image: "/images/headset1.jpg", category: "Headset" },
    { id: "18", name: "Sony INZONE H9 Noise Canceling", price: 24999, image: "/images/headset2.jpg", category: "Headset" },
    { id: "19", name: "Beyerdynamic DT 900 Pro X", price: 21500, image: "/images/headset3.jpg", category: "Headset" },
    { id: "20", name: "EPOS Sennheiser GSP 670", price: 15999, image: "/images/headset4.jpg", category: "Headset" },
    { id: "21", name: "Astro A50 Gen 4 Wireless", price: 22000, image: "/images/headset5.jpg", category: "Headset" },
    { id: "22", name: "Corsair Virtuoso RGB SE", price: 16500, image: "/images/headset6.jpg", category: "Headset" },
    { id: "23", name: "Razer BlackShark V2 Pro", price: 14999, image: "/images/headset7.jpg", category: "Headset" },
    { id: "24", name: "Turtle Beach Stealth 700 Gen 2", price: 11000, image: "/images/headset8.jpg", category: "Headset" },
  ],

  Energy: [
    { id: "25", name: "Monster Energy Ultra Zero", price: 99, image: "/images/powerdrink.jpg", category: "Energy" },
    { id: "26", name: "Gamer fuel ", price: 290, image: "/images/drinks.jpg", category: "Energy" },
    { id: "27", name: "GFUEL ultra energy drink", price: 169, image: "/images/drinks1.jpg", category: "Energy" },
    { id: "28", name: "RED wine modulo", price: 299, image: "/images/drinks6.jpg", category: "Energy" },
    { id: "29", name: "C4 Performance Energy Drink", price: 209, image: "/images/drinks3.jpg", category: "Energy" },
    { id: "30", name: "SNEAK energy drink 200 ml", price: 139, image: "/images/drinks4.jpg", category: "Energy" },
    { id: "31", name: "Queens Energy Drink 250ml", price: 119, image: "/images/drinks5.jpg", category: "Energy" },
    { id: "32", name: "Red Bull Energy Drink 250ml", price: 109, image: "/images/redbull.jpg", category: "Energy" },
  ],

  Chair: [
    { id: "33", name: "Secretlab Titan EVO 2024 Series", price: 45999, image: "/images/chair.jpg", category: "Chair" },
    { id: "34", name: "Herman Miller x Logitech G Embody", price: 38000, image: "/images/chair1.jpg", category: "Chair" },
    { id: "35", name: "Noblechairs Hero TX Fabric", price: 140500, image: "/images/chair2.jpg", category: "Chair" },
    { id: "36", name: "Razer Iskur X Ergonomic Gaming Chair", price: 32999, image: "/images/chair4.jpg", category: "Chair" },
    { id: "37", name: "Corsair T3 Rush (Grey/White)", price: 28000, image: "/images/chair5.jpg", category: "Chair" },
    { id: "38", name: "DXRacer Prince Series P132", price: 19999, image: "/images/chair3.jpg", category: "Chair" },
    { id: "39", name: "AndaSeat Kaiser 3 XL (Yellow)", price: 4000, image: "/images/yellowchair.jpg", category: "Chair" },
    { id: "40", name: "Cougar Armor One Royal Gold", price: 15500, image: "/images/chair6.jpg", category: "Chair" },
  ],

  Snacks: [
    { id: "35", name: "Quest Nutrition Protein Bar", price: 399, image: "/images/snacks.jpg", category: "Snacks" },
    { id: "36", name: "Pasta-marble-surface", price: 199, image: "/images/snacks1.jpg", category: "Snacks" },
    { id: "37", name: "Chocolate cricpy cake", price: 899, image: "/images/snacks2.jpg", category: "Snacks" },
    { id: "38", name: "Crispy-crackers-bowl", price: 129, image: "/images/snacks3.jpg", category: "Snacks" },
    { id: "39", name: "Overhead-view-delicious-snacks", price: 99, image: "/images/snacks4.jpg", category: "Snacks" },
    { id: "40", name: "Raw-italian-pastas", price: 139, image: "/images/snacks5.jpg", category: "Snacks" },
    { id: "41", name: "Mixed choco cake", price: 1299, image: "/images/chocolate-cake.jpg", category: "Snacks" },
    { id: "42", name: "American-style-cookies", price: 199, image: "/images/snacks6.jpg", category: "Snacks" },
  ],

  Airbods: [
    { id: "43", name: "Apple AirPods Pro (2nd Gen)", price: 24900, image: "/images/airbod.jpg", category: "Airbods" },
    { id: "44", name: "boAt Airdopes 141 (Budget Edition)", price: 1499, image: "/images/airbod2.jpg", category: "Airbods" },
    { id: "45", name: "Sony WF-1000XM5 Noise Cancelling", price: 23990, image: "/images/airbod3.jpg", category: "Airbods" },
    { id: "46", name: "Nothing Ear (2) Hi-Res Audio", price: 9999, image: "/images/airbod4.jpg", category: "Airbods" },
    { id: "47", name: "Jabra Elite 10 Gen 2", price: 18500, image: "/images/airbod5.jpg", category: "Airbods" },
    { id: "48", name: "Sennheiser Momentum True Wireless 4", price: 25999, image: "/images/airbod6.jpg", category: "Airbods" },
    { id: "49", name: "Beats Fit Pro Sport Earbuds", price: 17200, image: "/images/airbod7.jpg", category: "Airbods" },
    { id: "50", name: "Samsung Galaxy Buds2 Pro", price: 15999, image: "/images/airbod8.jpg", category: "Airbods" },
  ],

  Joystick: [
    { id: "51", name: "Sony DualSense Wireless Controller", price: 5999, image: "/images/joystick.jpg", category: "Joystick" },
    { id: "52", name: "Xbox Elite Series 2 Wireless", price: 15999, image: "/images/joystick2.jpg", category: "Joystick" },
    { id: "53", name: "Nintendo Switch Pro Controller", price: 5499, image: "/images/joystick3.jpg", category: "Joystick" },
    { id: "54", name: "Razer Wolverine V2 Chroma", price: 12999, image: "/images/joystick4.jpg", category: "Joystick" },
    { id: "55", name: "Thrustmaster T.Flight Hotas One", price: 8500, image: "/images/joystick5.jpg", category: "Joystick" },
    { id: "56", name: "Logitech G X56 HOTAS RGB", price: 24999, image: "/images/joystick6.jpg", category: "Joystick" },
    { id: "57", name: "8BitDo Ultimate Bluetooth Controller", price: 4999, image: "/images/joystick7.jpg", category: "Joystick" },
    { id: "58", name: "Turtle Beach Stealth Ultra", price: 17500, image: "/images/joystick8.jpg", category: "Joystick" },
  ],
};

export default function ShopClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cartItemCount = useStore((state) => state.cart.length);
  const allProducts = Object.values(productsByCategory).flat();

  /* ✅ URL-driven state */
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const activeCategory = searchParams.get("category") || "all";

  /* ✅ Filter logic (single source of truth) */
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category.toLowerCase() === activeCategory;

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  const filters = [
    { id: "all", label: "All Gear & Fuel" },
    { id: "keyboard", label: "Keyboards" },
    { id: "mouse", label: "Mouse" },
    { id: "headset", label: "Headsets" },
    { id: "chair", label: "Chairs" },
    { id: "energy", label: "Energy Drinks" },
    { id: "snacks", label: "Snacks" },
    { id: "airbods", label: "Airbods" },
    { id: "joystick", label: "Joysticks" },
  ];

  /* ✅ Handle filter click (menu / buttons) */
  const handleFilterClick = (id: string) => {
    if (id === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${id}`);
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            COMPLETE YOUR SETUP
          </h1>

          {searchQuery && (
            <p className="text-lg text-neon-cyan mt-4">
              Showing results for:{" "}
              <span className="font-bold">{searchQuery}</span>
            </p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-14 justify-center bg-cyber-gray/50 backdrop-blur-xl rounded-3xl p-6 border border-cyber-gray/30">
          {filters.map((f) => (
            <Button
              key={f.id}
              variant={activeCategory === f.id ? "glow" : "ghost"}
              onClick={() => handleFilterClick(f.id)}
              className="px-8 py-3 capitalize"
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-xl text-gray-400">
            No products found 😢
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        {/* View Cart */}
        {cartItemCount > 0 && (
          <div className="text-center">
            <Button
              size="lg"
              className="px-16 shadow-2xl text-lg"
              onClick={() => router.push("/cart")}
            >
              View Cart ({cartItemCount} items)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

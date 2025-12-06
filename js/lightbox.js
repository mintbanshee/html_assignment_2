let currentIndex = null;

const products = [
  {name: "Chester Necklace", price: 250,
    description: `A multi-strand piece inspired by personal growth. 
The layers represent life’s heaviest moments, the fragility of love, the heart’s defenses, and the strength that holds us together. 

A wearable reminder of resilience.

Named in tribute to Chester Bennington, whose voice and music helped guide many through darkness and toward healing.`,
img: "assets/images/products/img1.png"},

  {name: "Slip-On Tassel Necklace", price: 125,
    description: 'A 35" long necklace with no clasp. Designed to be a subtle pop of personality, this necklace just slips on over your head!',
    img: "assets/images/products/img2.png"},

  {name: "Lariat Necklace", price: 150,
    description: "The necklace for those who struggle with decisions! This necklace features a little magnetic end so you can swap out the pendant to suit your mood or style! Designed with no clasp, just drape it around and slip the magnet end through the large ring.",
    img: "assets/images/products/img3.png"},

  {name: "Smoky Quartz Necklace", price: 85,
    description: "This beautiful asymmetrical necklace features one half of the chain in the Byzantine weave and the other in JPL. At the center is a lovely Smoky Quartz pendant.",
    img: "assets/images/products/img4.png"},

  {name: "Micro-Persephone Bracelet", price: 45,
    description: "A small but personality-filled bracelet made in the Persephone weave. This bracelet features a dangle-chain for adjustability finished with an elegant dragonfly charm.",
    img: "assets/images/products/img5.png"},
    
   {name: "Not-an-Azidahaka", price: 40,
    description: "Named after a funny situation in the chainmaille community, this bracelet is anything but funny! Pastel rings lay perfectly flat on your wrist while a subtle ring of black accents them. Perfectly drool-worthy, this bracelet is a fan favourite!",
    img: "assets/images/products/img6.png"},
    
  {name: "Micro-Byzee Bubbles Charm Bracelet", price: 50,
    description: "Inspired by the elegant side of steampunk, this bracelet features aged keys dangling from an intricately woven delicate bracelet.",
    img: "assets/images/products/img7.png"},
    
  {name: "GSG Bracelet", price: 35,
    description: "Celebrate the beauty of winter with this frosty bracelet.",
    img: "assets/images/products/img8.png"},
    
  {name: "Trinity Twist Earrings", price: 40,
    description: "These beautiful earrings may look delicate but they make a statement! Tiny rings spiral in long elegance, dancing as you move.",
    img: "assets/images/products/img9.png"},
    
  {name: "Enchanted Forest Moorish Rose Coaster", price: 85,
    description: "This coaster is forest beauty at its finest! Featuring a floral shape amidst the forest colour palette and electroplated hematite crescent moons at the corners.",
    img: "assets/images/products/img10.png"},
    
  {name: "Coffin Shaped Moorish Rose Coaster", price: 85,
    description: "Whether it be your home's decor or for a love of Halloween, this coaster's coffin shape is sure to fit right in!",
    img: "assets/images/products/img11.png"},    

  {name: "Green Anklet", price: 45,
    description: "A delicate anklet for the nature lover featuring a Byzantine focal and a beautiful dragonfly charm.",
    img: "assets/images/products/img12.png"}, 
]


function showBox(num) {
  const item = products[num - 1];
  currentIndex = num - 1;

  $('#lightbox').css('visibility', 'visible');
  $('#lightboxImage').attr('src', item.img);
  $('#productName').text(item.name);
  $('#productDescription').html(item.description.replace(/\n/g, "<br>"));
  $('#productPrice').text(`$${item.price}`);
  $('#addToCartBtn').attr('data-index', num - 1);
}

function hideBox() {
  $('#lightbox').css('visibility', 'hidden');
}

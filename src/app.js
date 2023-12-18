//Data stock barang yang tersedia
document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Creature 8.0", img: "creature.jpg", price: 980_000 },
      { id: 2, name: "Death Wish 8.25", img: "deadWish.jpg", price: 999_000 },
      { id: 3, name: "Death Wish 8.15", img: "deadwish2.jpg", price: 995_000 },
      { id: 4, name: "Death Wish 7.8", img: "deadwish3.jpg", price: 990_000 },
      { id: 5, name: "Death Wish 8.0", img: "deadwish4.jpg", price: 950_000 },
      { id: 6, name: "Motion 8.0", img: "motion.jpg", price: 669_000 },
      { id: 7, name: "Motion x Eka 8.15", img: "motion2.jpg", price: 769_000 },
      {
        id: 8,
        name: "Puppets The Crime 8.0",
        img: "pemula.jpg",
        price: 600_000,
      },
      { id: 9, name: "Primitive 8.0", img: "primitive.jpg", price: 820_000 },
      {
        id: 10,
        name: "Santa Cruz 8.25",
        img: "santacruz.jpg",
        price: 1_010_000,
      },
      { id: 11, name: "Santa Cruz 8.0", img: "santacruz2.jpg", price: 998_000 },
      { id: 12, name: "Thrasher ", img: "Trasher.jpg", price: 999_000 },
      { id: 13, name: "Toy Machine", img: "toymachine1.jpeg", price: 769_000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // mengecek apakah ada barang yang sama di dalama cart
      const carItem = this.items.find((item) => item.id === newItem.id);

      //   JIka belum cart masih kosong
      if (!carItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang sudah ada, cek apakah barang sama atau berbeda
        this.items = this.items.map((item) => {
          //jik brang belum ada
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // mengurangi item pada cart mengambil berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika barang tersisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Form Validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

//kirim pesan ketika tombol checkout diklik
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open("http://wa.me/6285374178001?text=" + encodeURIComponent(message));
  console.log(objData);
});

// Format pesan whatsapp
const formatMessage = (obj) => {
  return `
  Data Customer
      Nama: ${obj.name}
      Email: ${obj.email}
      NO HP: ${obj.phone}
  Data Pesanan
    ${JSON.parse(obj.items).map(
      (item) => `${item.name} (${item.quantity} x ${rp(item.total)}) \n`
    )}
    TOTAL: ${rp(obj.total)}
    TERIMA KASIH!!!.`;
};

// Konversi mata uang ke rupiah
const rp = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

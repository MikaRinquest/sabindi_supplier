import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        id: 1,
        name: "Joshua",
        embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
        image: "https://picsum.photos/200/300https://picsum.photos/200/300",
        price: "100.99",
        description: "",
      },
      {
        id: 2,
        name: "Enosh",
        embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
        image: "https://picsum.photos/200/300https://picsum.photos/200/300",
        price: "20.99",
        description: "",
      },
      {
        id: 3,
        name: "Shakoor",
        embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
        image: "https://picsum.photos/200/300https://picsum.photos/200/300",
        price: "90.99",
        description: "",
      },
      {
        id: 4,
        name: "Abdul",
        embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
        image: "https://picsum.photos/200/300https://picsum.photos/200/300",
        price: "1159.99",
        description: "",
      },
      {
        id: 5,
        name: "Cody",
        embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
        image: "https://picsum.photos/200/300https://picsum.photos/200/300",
        price: "319.99",
        description: "",
      },
    ],
    stores: null,
    store: null,
    // [
    //   {
    //     id: 1,
    //     name: "Buco",
    //     type: "Electrical",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Tokai",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    //   {
    //     id: 2,
    //     name: "Builders Warehouse",
    //     type: "Plumbing",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Landowne",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    //   {
    //     id: 3,
    //     name: "Jaffers Motors",
    //     type: "Fuel",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Lotus River",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    //   {
    //     id: 4,
    //     name: "Build It",
    //     type: "Construction",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Ottery",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    //   {
    //     id: 5,
    //     name: "Global",
    //     type: "Carpentry",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Ottery",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    //   {
    //     id: 6,
    //     name: "Nu-Lite Hardware",
    //     type: "Carpentry",
    //     embed:
    //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8243701424467!2d18.512390015081277!3d-34.048376035832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675774493570!5m2!1sen!2sza",
    //     image: "https://picsum.photos/200/300",
    //     location: "Grassy Park",
    //     contactName: "Contact Name",
    //     contactNumber: "Contact Number",
    //   },
    // ]
  },
  mutations: {
    setStores(state, stores) {
      state.stores = stores;
    },
    setStore(state, store) {
      state.store = store;
    },
  },
  actions: {
    getStores: async (context) => {
      fetch("https://suppliers-u40h.onrender.com/suppliers")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setStores", data);
        });
    },

    getStore: async (context, id) => {
      fetch("https://suppliers-u40h.onrender.com/suppliers/" + id)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setStore", data);
        });
    },

    addStore: async (context, supplier) => {
      fetch("https://suppliers-u40h.onrender.com/suppliers", {
        method: "POST",
        body: JSON.stringify(supplier),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => context.commit("setStores", data));
    },
  },
});

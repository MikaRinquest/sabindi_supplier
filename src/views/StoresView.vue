<template>
  <v-container>
    <div class="d-flex justify-center align-center">
      <div class="search">
        <input
          type="text"
          v-model="search"
          placeholder="Search for a store"
          class="search-field"
        />
        <v-icon icon=" mdi-magnify" class="icon" />
      </div>
      <select v-model="supplierType" class="select">
        <option value="All" selected>All</option>
        <option v-for="(type, i) in types" :value="type.name" :key="i">
          {{ type.name }}
        </option>
      </select>
      <div class="d-flex justify-center">
        <button @click="dialog = true" class="add">Add a store</button>
        <v-dialog v-model="dialog" persistent>
          <v-card>
            <v-row cols="12" class="justify-center">
              <v-col class="supplier1" cols="12">
                <div class="d-flex flex-column">
                  <h4 class="text-center">Store Details</h4>
                  <div class="d-flex justify-center">
                    <input
                      placeholder="Store Name*"
                      v-model="supplierName"
                      type="text"
                      required
                    />
                    <input
                      placeholder="Store Location*"
                      v-model="supplierLocation"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </v-col>
              <v-col class="supplier2" cols="12">
                <input
                  type="tel"
                  placeholder="Store Number*"
                  v-model="supplierNumber"
                  required
                />
                <select v-model="typeOfSupplier" required>
                  <option value="" selected disabled>
                    Select the type of supplier*
                  </option>
                  <option
                    v-for="(type, i) in types"
                    :value="type.name"
                    :key="i"
                  >
                    {{ type.name }}
                  </option>
                </select>
              </v-col>
              <v-col class="contact1" cols="12">
                <div class="d-flex flex-column">
                  <h4 class="text-center">Contact Point Details</h4>
                  <div class="d-flex justify-center">
                    <input
                      type="text"
                      placeholder="Contact's Name"
                      v-model="contactName"
                    />
                    <input
                      type="phone"
                      pattern=" [0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="Contact Number"
                      v-model="contactNumber"
                    />
                  </div>
                </div>
              </v-col>
              <v-col class="contact2" cols="12">
                <input
                  type="text"
                  placeholder="Contact's Email"
                  v-model="contactEmail"
                />
              </v-col>
            </v-row>
            <v-row cols="12" class="justify-center">
              <small>* indicates a required field</small>
              <v-card-actions cols="6">
                <v-btn color="primary" block @click="dialog = false"
                  >Cancel</v-btn
                >
              </v-card-actions>
              <v-card-actions cols="6">
                <v-btn color="primary" block @click="addStore">Add Store</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <div
        class="w-25"
        v-for="store in stores"
        :key="store.supplierID"
        @click="singleView(store)"
      >
        <v-card class="card mb-3">
          <v-img
            :src="store.supplierImage || placeholder"
            height="200"
            cover
          ></v-img>
          <v-card-title> {{ store.supplierName }}</v-card-title>
          <v-card-subtitle> {{ store.supplierLocation }} </v-card-subtitle>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
      search: "",
      dialog: false,
      supplierName: "",
      supplierLocation: "",
      typeOfSupplier: "",
      supplierType: "All",
      supplierNumber: "",
      contactName: "",
      contactNumber: "",
      contactEmail: "",
      placeholder: "https://via.placeholder.com/265x200?text=Placeholder",
      types: [
        {
          name: "Carpentry",
        },
        {
          name: "Construction",
        },
        {
          name: "Electrical",
        },
        {
          name: "Plumbing",
        },
      ],
      tests: [
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
        {
          name: "help",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getStores");
  },
  computed: {
    stores() {
      return this.$store.state.stores?.filter((store) => {
        let isMatch = true;
        if (
          !store.supplierName?.toLowerCase().includes(this.search.toLowerCase())
        )
          isMatch = false;
        if (
          this.supplierType !== "All" &&
          store.supplierType !== this.supplierType
        )
          isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    singleView(store) {
      const storeID = store.supplierID;
      console.log(storeID);
      this.$router.push({ name: "SingleStore", params: { id: storeID } });
    },
    addStore() {
      let supplier = {
        supplierName: this.supplierName,
        supplierType: this.typeOfSupplier,
        supplierLocation: this.supplierLocation,
        supplierNumber: this.supplierNumber,
        contactName: this.contactName,
        contactNumber: this.contactNumber,
        contactEmail: this.contactName,
      };
      this.dialog = false;
      return this.$store.dispatch("addStore", supplier);
    },
  },
};
</script>

<style scoped>
.search {
  border: 1px solid;
  border-radius: 5px;
  margin: 10px;
  outline-color: black;
}

.search:focus {
  outline-style: solid;
}

.select {
  height: 50%;
  align-self: center;
  border: 1px solid;
  border-radius: 5px;
  color: black;
  padding-left: 3px;
  margin: 10px;
}

.search-field {
  padding-left: 3px;
}

.search-field:focus {
  outline: none;
}

.icon {
  border-left: 1px solid;
  height: 100%;
}

.select {
  height: 50%;
  align-self: center;
}

.add {
  border: 1px solid black;
  padding-left: 3px;
  border-radius: 5px;
}

.v-dialog {
  width: 50% !important;
  height: 100% !important;
}

.v-col {
  display: flex;
  justify-content: center;
}

.card {
  width: 90%;
}
</style>

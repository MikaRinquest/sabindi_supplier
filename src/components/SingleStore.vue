<template>
  <div>
    <router-link to="/stores" class="router-link">
      <v-btn class="ma-2" color="orange-darken-2">
        <v-icon start icon="mdi-arrow-left"></v-icon>
        Back
      </v-btn>
    </router-link>
    <h2>Supplier Details</h2>
    <div
      v-for="store in store"
      :key="store.supplierID"
      class="d-flex justify-center w-100"
    >
      <div class="d-flex flex-column align-center w-50">
        <div class="SupplierDetails">
          <img :src="store.supplierImage || placeholder" />
          <h1 class="s-name">{{ store.supplierName }}</h1>
          <h2>Location:{{ store.supplierLocation }}</h2>
        </div>
        <div class="SupplierContactDetails">
          <p>{{ store.contactName }}</p>
          <p>{{ store.contactNumber }}</p>
          <p>{{ store.contactEmail }}</p>
        </div>
      </div>
      <div class="embed d-flex justify-center w-50">
        <iframe
          :src="store.mapEmbed || embed"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <v-container>
      <div class="container">
        <div class="holder">
          <span class="d-flex justify-space-between">
            <h3 class="align-self-start">Purchase History</h3>
            <v-icon
              icon="mdi-plus"
              class="align-self-end"
              @click="modal = true"
            ></v-icon>
          </span>
        </div>
        <div>
          <ul class="purchases">
            <li
              v-for="(test, i) in tests"
              :key="i"
              class="purchase"
              @click="viewReceipt(test)"
            >
              {{ test.name }}
            </li>
          </ul>
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-text>
                {{ receipt.name }}
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false"
                  >Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="modal" class="newReceipt">
            <v-card>
              <v-table fixed-header height="300px">
                <thead>
                  <tr>
                    <th class="text-left">Item</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in rows" :key="i">
                    <td>
                      <input
                        type="text"
                        placeholder="Item"
                        v-model="row.item"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Quantity"
                        min="0"
                        v-model.number="row.quantity"
                        @change="updateAmount(row)"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Price"
                        min="0"
                        v-model.number="row.price"
                        @change="updateAmount(row)"
                        steps="any"
                      />
                    </td>
                    <td>R{{ row.amount }}</td>
                  </tr>
                  <v-btn @click="addRow">Add New Row</v-btn>
                </tbody>
              </v-table>
              <v-checkbox
                label="VAT inclusive?"
                v-model="inclusive"
                @change="updateTotal"
              ></v-checkbox>
              <p v-if="inclusive">Subtotal:{{ subTotal }}</p>
              <p v-else>Subtotal:{{ totalAmount }}</p>
              <p>Value Added Tax(VAT): R{{ VAT || 0 }}</p>
              <p>Total Amount: R{{ totalAmount }}</p>
              <v-btn @click="submitReceipt">Submit</v-btn>
              <v-btn color="primary" @click="modal = false">Cancel </v-btn>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "SingleStore",
  data() {
    return {
      dialog: false,
      modal: false,
      receipt: null,
      item: null,
      quantity: 0,
      price: 0,
      subTotal: 0,
      totalAmount: 0,
      VAT: 0,
      inclusive: false,
      placeholder: "https://via.placeholder.com/400x400?text=Placeholder",
      embed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13223.296784366958!2d18.5145787!3d-34.0483805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1675860985295!5m2!1sen!2sza",
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
      rows: [],
    };
  },
  mounted() {
    return this.$store.dispatch("getStore", this.id);
  },
  computed: {
    store() {
      return this.$store.state.store;
    },
  },
  methods: {
    viewReceipt(test) {
      this.dialog = true;
      this.receipt = test;
    },
    addRow() {
      this.rows.push({
        item: this.item,
        amount: this.amount,
        price: this.price,
      });
      this.dialog = false;
    },

    updateAmount(row) {
      let calc = row.price * row.quantity;
      row.amount = parseFloat(calc).toFixed(2);

      this.updateTotal();
    },

    updateTotal() {
      this.subTotal = 0;
      this.VAT = 0;
      this.totalAmount = 0;
      if (this.inclusive === true) {
        this.rows.forEach((row) => {
          this.subTotal += row.amount.toFixed(2);
          this.VAT = parseFloat(this.subTotal * (15 / 100)).toFixed(2);
          this.totalAmount += parseFloat(this.subTotal * (115 / 100)).toFixed(
            2
          );
        });
      } else {
        this.rows.forEach((row) => {
          this.totalAmount += row.amount;
          console.log(typeof row.amount);
          console.log(row.amount);
        });
      }
    },

    submitReceipt() {
      console.log(this.rows);
      console.log(this.quantity);
      console.log(this.price);
    },
  },
};
</script>

<style scoped>
.newReceipt {
  width: 90%;
}

.container {
  width: 200px;
}

.router-link {
  text-decoration: none;
  color: black;
}

.SupplierDetails {
  margin-top: 20px;
}

.s-name {
  text-decoration: underline;
}

.holder {
  margin-bottom: 5px;
  border-bottom: 2px solid black;
}

.purchases {
  height: 100px;
  overflow-y: scroll;
}

.purchase {
  list-style: none;
}

.purchase:hover {
  background-color: lightgrey;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.embed {
  margin-top: 20px;
}
</style>

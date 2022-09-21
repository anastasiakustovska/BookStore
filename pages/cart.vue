<template>
  <div>
    <h1>
      Cart
    </h1>
    <div>
      <div class="row">
        <div class="col-8">
          <b-card v-for="item in cartItems" :key="item.isbn13" no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="item.image" :alt="item.title" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="item.title">
                  <b-card-text>
                    <div class="quantity">
                      <b>Quantity:</b>
                      <b-form-input :class="'quantity--input'" min="1" @input="(e) => {onQuantityChange(e, item)}" :value="item.quantity ?? 1" type="number"></b-form-input>
                    </div>
                    <p><b>Price:</b> {{ item.price}} </p>
                    <p><b>Subtotal:</b> ${{ getItemSubtotal(item) }}</p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="col-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {priceToNumber} from "@/utils/functions/price";

export default {
  name: "cart",
  layout: 'index',
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    }
  },
  methods: {
    onQuantityChange(quantity, item) {
      this.$store.commit('cart/changeProductQuantity', {isbn: item.isbn13, quantity});
    },

    getItemSubtotal({price, quantity}) {
      quantity = quantity ?? 1;

      return (priceToNumber(price) * quantity).toFixed(2);
    }
  }
}
</script>

<style scoped>
.quantity {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
}
.quantity--input {
  width: 70px !important;
}
</style>

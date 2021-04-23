<template>
  <card class="card" title="Create New Order">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Item Name"
              placeholder="Item Name"
              v-model="order.company"
            >
            </fg-input>
          </div>

          <div class="col-md-5">
            <fg-input
              type="text"
              label="Item Id"
              placeholder="Item Id"
              v-model="order.items[0].id"
            >
            </fg-input>
          </div>

          <div class="col-md-5">
            <fg-input
              type="text"
              label="Item Quantity"
              placeholder="Item Quantity"
              v-model="order.items[0].quantity"
            >
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="postData">
            New Order
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      order: {
        items: [{ id: 1, quantity: 9 }],
        id: 8,
        quantity:8
      }
    };
  },
  methods: {
    async postData() {
      const res = await fetch(
        "https://codechallenge.pikdrive.com/api/new-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest"
          },
          method: "post",
          credentials: "same-origin",
          body: JSON.stringify({
            items: [
              { id: this.order.items[0].id, quantity: this.order.items[0].quantity }
            ],
            quantity: this.order.items[0].quantity
          })
        }
      );
      const data = await res.json();
      alert("Your data: " + JSON.stringify(data));
      this.order.item = "";
      this.order.id = 8;
      this.order.quantity = 8;
    }
  }
};
</script>
<style></style>

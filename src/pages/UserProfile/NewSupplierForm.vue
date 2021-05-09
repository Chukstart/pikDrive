<template>
  <card class="card" title="Create New Supplier">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Supplier Name"
              placeholder="Supplier Name"
              v-model="supplier.name"
            >
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Items Count"
              placeholder="items Count"
              v-model="supplier.items[0].quantity"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Supplier Id"
              placeholder="Supplier Id"
              v-model="supplier.supplier_id"
            >
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="postData">
            New Supplier
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
      supplier: {
        items: [{ id: 1, quantity: 4 }],
        supplier_id: 2,
        name: ""
      }
    };
  },
  methods: {
    async postData() {
      const res = await fetch(
        "https://codechallenge.pikdrive.com/api/new-supplier",
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
            items: [{ id: this.supplier.items[0].id, quantity: 5 }],
            supplier_id: this.supplier.supplier_id,
            name: this.supplier.name
          })
        }
      );
      const data = await res.json();
      alert("Your data: " + JSON.stringify(data));
    }
  }
};
</script>
<style></style>

<template>
  <card class="card" title="Create New Product">
    <div>
      <form @submit.prevent>
        
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Product Name"
                      placeholder="Company Name"
                      v-model="product.name">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Product Quantity"
                      placeholder="Product Quantity"
                      v-model="product.quantity">
            </fg-input>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-10">
            <fg-input type="text"
                      label="Description"
                      placeholder="Description"
                      v-model="product.description">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="postData">
            New Product
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
      product: {
        name: "",
        quantity: 4,
        description: ""
      }
    };
  },
  methods: {
    async postData() {
      const res = await fetch('https://codechallenge.pikdrive.com/api/new-product', {
        method: 'POST',
        headers: {     
          "Content-Type": "application/json",     
          "Accept": "application/json, text-plain, */*",     
          "X-Requested-With": "XMLHttpRequest"
        },   
  		method: 'post',
  		credentials: "same-origin",
        body: JSON.stringify({name:this.product.name,description:this.product.description,quantity:this.product.quantity}),
      })
      const data = await res.json()
      alert("Your data: " + JSON.stringify(data));
      this.product.description = ''
      this.product.name = ''
      this.product.quantity = 0
    }
  }
};
</script>
<style>
</style>

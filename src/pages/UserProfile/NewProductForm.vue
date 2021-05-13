<template>
  <card class="card" title="Create New Product">
    <div>
      <form @submit.prevent>
        
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Product Name"
                      placeholder="Product Name"
                      v-model="name">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Product Quantity"
                      placeholder="Product Quantity"
                      v-model="quantity">
            </fg-input>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-10">
            <fg-input type="text"
                      label="Description"
                      placeholder="Description"
                      v-model="description">
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
        name: "",
        quantity: 4,
        description: ""
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
        body: JSON.stringify({name:this.name,description:this.description,quantity:this.quantity}),
      })
      const data = await res.json()
      alert("Your data: " + JSON.stringify(data));
      this.description = ''
      this.name = ''
      this.quantity = 0
    }
  }
};
</script>
<style>
</style>

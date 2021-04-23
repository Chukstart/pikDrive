<template>
    <div class="row">
      <div class="col-xl-8 col-lg-7 col-md-6">
        <new-product-form>

        </new-product-form>
      </div>
    </div>
</template>
<script>
import NewProductForm from "./UserProfile/NewProductForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    NewProductForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>

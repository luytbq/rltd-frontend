<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: String,
  routerLink: String
});

const router = useRouter();

const cardClick = (event) => {
  console.log(event);
  if (props.routerLink) {
    router.push(props.routerLink);
  }
};
</script>

<template>
  <div class="card" @click.prevent="cardClick">
    <h2 class="card-title">{{ title }}</h2>
    <p v-if="description" class="card-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  min-width: 16rem;
  min-height: 9rem;
  padding: 0.75rem;
  cursor: pointer;
  border-width: 1px;
  border-color: var(--color-border);
  border-style: solid;
}

</style>

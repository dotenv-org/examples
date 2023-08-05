<script setup lang="ts">
  const config = useRuntimeConfig()
</script>

<template>
  Hello {{config.public.HELLO}}.
</template>

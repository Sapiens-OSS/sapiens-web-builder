<template>
    <div class="p-2">
        <SchemaGroup :schema="mod.index._schema" :level="0" target="index" />

    </div>
</template>

<script setup>
const mod = useMod();
</script>
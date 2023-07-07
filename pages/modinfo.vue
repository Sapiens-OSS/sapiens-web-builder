<template>
    <div class="p-2 overflow-y-scroll">
        <SchemaGroup :schema="mod.index._schemaCache" :level="0" target="index" />
    </div>
</template>

<script setup>
const mod = useMod();
</script>
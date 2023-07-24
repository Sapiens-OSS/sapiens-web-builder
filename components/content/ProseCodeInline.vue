<template>
  <code id="inline-code"><slot /></code>
</template>

<style>
#inline-code::before {
  display: none;
}
#inline-code::after {
  display: none;
}
</style>
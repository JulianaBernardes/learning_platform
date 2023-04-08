<template>
    <div class="button_controls">
        <font-awesome-icon class="next" v-if="buttonType=='next'" :icon="['fas', 'arrow-right']" @click="$emit('onClick')"/>

        <font-awesome-icon v-if="buttonType=='return'" class="btn_return" :icon="['fas', 'arrow-right']" @click="$emit('onClick')"/>
    </div>
</template>

<style scoped lang="css" src="../styles/button_controls.css"></style>

<script>

export default {
    name: 'ButtonControls',
    props: {
        buttonType: String,
    },
    emits: ["onClick"],
};
</script>

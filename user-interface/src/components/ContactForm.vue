<template>
    <form>
        <div class="form-control">
            <label>Name</label>
            <input type="text" name="name" />
        </div>
        <div class="form-control">
            <label>Email</label>
            <input type="email" name="email" />
        </div>
        <div class="form-control">
            <textarea name="text"></textarea>
        </div>
        <input type="submit" value="Submit">
    </form>
</template>

<script>
export default {
    name:'ContactForm'
}
</script>
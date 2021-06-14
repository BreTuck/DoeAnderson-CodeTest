<template>
    <div id="form-container">
        <h3>Contact Me</h3>
        <form>
            <div class="form-control">
                <label>Name</label>
                <input class="inputs" type="text" name="name" />
            </div>
            <div class="form-control">
                <label>Email</label>
                <input class="inputs" type="email" name="email" />
            </div>
            <div class="form-control">
                <textarea class="inputs" name="text" placeholder="How Can I Help?"></textarea>
            </div>
            <input id="btn" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name:'ContactForm'
}
</script>

<style scoped>
    #form-container {
        border-top: solid black 5px;
        margin-bottom: 10%;
    }
    h3 { 
        margin-left: 20%;
        text-align: left; 
    }
    label { grid-area: labels; margin-right: 10%; }
    input { grid-area: inputs; border: none; border-bottom: solid black 2.5px; width: 50%; }
    textarea {
        border: solid black 2.5px;
        width: 75%;
        height: 100px;
    }
    #btn {
        border: solid black 3px;
        box-shadow: 5px 2.5px 0 black;
        font-size: 1rem;
        padding: 10px;
        background-color: white;
    }
    .form-control  {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 5% 10% 5% 10%;
    }
</style>
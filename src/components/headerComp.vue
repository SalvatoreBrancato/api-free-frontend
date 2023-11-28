<script>
export default {
    name: "headerComp"
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">
                        Home
                    </router-link>
                    <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                </div>
                <div class="navbar-nav">
                    <router-link :to="{name: 'create'}" class="nav-link active" aria-current="page">
                        Crea Post
                    </router-link>
                </div>
                <div class="navbar-nav">
                    <router-link :to="{name: 'update'}" class="nav-link active" aria-current="page">
                        Modfica Post
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-align-center" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/">Search</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/cars">Cars</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/contacts">Contacts</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/help">Help</nuxt-link>
          </li>
        </ul>

        <form class="d-flex">
          <button class="btn btn-primary" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Navbar"

}
</script>

<style scoped>

</style>

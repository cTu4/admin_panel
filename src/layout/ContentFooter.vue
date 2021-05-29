<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a
            href="https://brest.app"
            class="font-weight-bold ml-1"
            target="_blank"
            >Brest APP</a
          >
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end"
        >
          <li class="nav-item">
            <a
              href="https://brest.app"
              class="nav-link"
              target="_blank"
              >Brest APP</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://brest.app/about"
              class="nav-link"
              target="_blank"
              >About Us</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://brest.app/blog"
              class="nav-link"
              target="_blank"
              >Our Blog</a
            >
          </li>
<!--          <li class="nav-item">-->
<!--            <a-->
<!--              href="https://brest.app/license"-->
<!--              class="nav-link"-->
<!--              target="_blank"-->
<!--              >License</a-->
<!--            >-->
<!--          </li>-->
          <li class="nav-item">
            <a
                href="https://brest.app/documentation"
                class="nav-link"
                target="_blank"
            >Documentation</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>

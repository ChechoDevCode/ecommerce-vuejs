<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container border-bottom py-4">
        <a class="navbar-brand px-4" href="#">eCommerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-4">
            <li class="nav-item">
              <a class="nav-link" href="#">Collections</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Woman</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-4">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-cart"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign In</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
    export default {
      name: 'NavbarComponent',
    };
  </script>

  
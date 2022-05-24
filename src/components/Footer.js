import React from "react";

function Footer() {
  return (
    <nav className="footer">
      <span className="left-footer">Copyright © My Website 2021</span>
      <span className="right-footer">
        Follow
        <a href="https://twitter.com/rahulkrishna57" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/rahulkrish57" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </span>
    </nav>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer class="footer rounded-lg shadow dark:bg-gray-900">
      <div class="max-container mx-auto pb-4 md:pb-8">
        <hr class="hr-line border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8" />
        <span class="text-info">
          © 2023
          <a
            href="https://www.linkedin.com/in/mohamed-aziz-farhani-643583214/"
            class="link hover:underline"
          >
            Powred By MontassarThemri
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

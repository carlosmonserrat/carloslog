import * as React from 'react'
import { border,navLogoGroup,navLogo,navBar,navLinkGroup,navLinkText} from "./style.module.css";

const Navigation = () => {
  return (
    <>
      <div className={navLogoGroup}>
        <svg className={navLogo} width="300px" viewBox="0 0 516 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.05 30.324C8.366 30.324 5.558 29.268 3.626 27.156C1.694 25.032 0.728 21.552 0.728 16.716C0.728 11.964 1.712 8.496 3.68 6.312C5.648 4.128 8.528 3.036 12.32 3.036C14.132 3.036 15.884 3.27 17.576 3.738V6.222C15.992 5.742 14.27 5.502 12.41 5.502C10.466 5.502 8.858 5.862 7.586 6.582C6.314 7.29 5.348 8.46 4.688 10.092C4.04 11.724 3.716 13.908 3.716 16.644C3.716 19.44 4.046 21.66 4.706 23.304C5.366 24.948 6.314 26.118 7.55 26.814C8.798 27.51 10.364 27.858 12.248 27.858C13.148 27.858 14.018 27.786 14.858 27.642C15.71 27.486 16.616 27.246 17.576 26.922V29.424C15.836 30.024 13.994 30.324 12.05 30.324ZM25.7638 10.182C27.3838 10.182 28.7098 10.404 29.7418 10.848C30.7858 11.28 31.5658 12 32.0818 13.008C32.6098 14.016 32.8738 15.378 32.8738 17.094V30H30.5158L30.2998 27.858H30.1198C29.5318 28.662 28.7878 29.274 27.8878 29.694C26.9878 30.102 25.9918 30.306 24.8998 30.306C23.7598 30.306 22.7638 30.096 21.9118 29.676C21.0598 29.256 20.4058 28.65 19.9498 27.858C19.4938 27.066 19.2658 26.118 19.2658 25.014C19.2658 23.274 19.8118 21.93 20.9038 20.982C22.0078 20.022 23.7238 19.434 26.0518 19.218L30.1018 18.786V16.95C30.1018 15.798 29.9278 14.898 29.5798 14.25C29.2438 13.602 28.7338 13.146 28.0498 12.882C27.3778 12.618 26.4898 12.486 25.3858 12.486C24.6538 12.486 23.8558 12.558 22.9918 12.702C22.1278 12.834 21.2878 13.038 20.4718 13.314V10.992C21.2278 10.74 22.0798 10.542 23.0278 10.398C23.9878 10.254 24.8998 10.182 25.7638 10.182ZM25.6198 28.128C26.4598 28.128 27.2698 27.936 28.0498 27.552C28.8298 27.168 29.5138 26.55 30.1018 25.698V20.712L26.2318 21.108C24.8158 21.252 23.7778 21.624 23.1178 22.224C22.4578 22.812 22.1278 23.646 22.1278 24.726C22.1278 25.854 22.4218 26.706 23.0098 27.282C23.6098 27.846 24.4798 28.128 25.6198 28.128ZM37.7129 10.47H40.0709L40.2869 13.08H40.4849C41.0849 12.168 41.8469 11.478 42.7709 11.01C43.6949 10.53 44.6909 10.29 45.7589 10.29C46.2269 10.29 46.6589 10.32 47.0549 10.38V13.008C46.6469 12.948 46.1669 12.918 45.6149 12.918C44.6309 12.918 43.6649 13.17 42.7169 13.674C41.7809 14.166 41.0489 14.868 40.5209 15.78V30H37.7129V10.47ZM49.877 30V0.911999H52.685V30H49.877ZM64.5037 30.342C62.0317 30.342 60.1117 29.526 58.7437 27.894C57.3757 26.25 56.6917 23.706 56.6917 20.262C56.6917 16.794 57.3697 14.25 58.7257 12.63C60.0817 10.998 62.0077 10.182 64.5037 10.182C66.9877 10.182 68.9077 10.998 70.2637 12.63C71.6197 14.262 72.2977 16.8 72.2977 20.244C72.2977 23.688 71.6137 26.232 70.2457 27.876C68.8897 29.52 66.9757 30.342 64.5037 30.342ZM64.5037 28.056C65.5597 28.056 66.4477 27.816 67.1677 27.336C67.8997 26.844 68.4577 26.028 68.8417 24.888C69.2377 23.748 69.4357 22.218 69.4357 20.298C69.4357 18.342 69.2377 16.788 68.8417 15.636C68.4577 14.484 67.9057 13.668 67.1857 13.188C66.4657 12.708 65.5717 12.468 64.5037 12.468C63.4357 12.468 62.5417 12.708 61.8217 13.188C61.1017 13.668 60.5437 14.478 60.1477 15.618C59.7637 16.746 59.5717 18.27 59.5717 20.19C59.5717 22.146 59.7637 23.706 60.1477 24.87C60.5437 26.022 61.1017 26.844 61.8217 27.336C62.5417 27.816 63.4357 28.056 64.5037 28.056ZM80.5265 30.342C78.7265 30.342 77.0705 30.09 75.5585 29.586V27.3C77.2625 27.828 78.9125 28.092 80.5085 28.092C81.9965 28.092 83.1185 27.81 83.8745 27.246C84.6305 26.67 85.0085 25.848 85.0085 24.78C85.0085 23.88 84.7805 23.19 84.3245 22.71C83.8805 22.218 83.1665 21.846 82.1825 21.594L79.8965 21.072C78.2165 20.664 77.0045 20.034 76.2605 19.182C75.5285 18.318 75.1625 17.184 75.1625 15.78C75.1625 14.676 75.4385 13.704 75.9905 12.864C76.5425 12.024 77.3645 11.37 78.4565 10.902C79.5605 10.422 80.9045 10.182 82.4885 10.182C83.9765 10.182 85.3865 10.344 86.7185 10.668V12.954C85.3985 12.606 84.0125 12.432 82.5605 12.432C80.9525 12.432 79.7645 12.732 78.9965 13.332C78.2405 13.932 77.8625 14.718 77.8625 15.69C77.8625 16.518 78.0785 17.178 78.5105 17.67C78.9425 18.162 79.6385 18.528 80.5985 18.768L82.8845 19.272C84.6005 19.692 85.8305 20.334 86.5745 21.198C87.3185 22.05 87.6905 23.202 87.6905 24.654C87.6905 25.83 87.4085 26.844 86.8445 27.696C86.2925 28.548 85.4765 29.202 84.3965 29.658C83.3285 30.114 82.0385 30.342 80.5265 30.342ZM115.322 30L107.348 18.912C106.856 18.948 106.346 18.966 105.818 18.966C104.822 18.966 103.754 18.924 102.614 18.84V30H99.8065V3.72C102.05 3.3 104.252 3.09 106.412 3.09C109.76 3.09 112.256 3.738 113.9 5.034C115.544 6.33 116.366 8.298 116.366 10.938C116.378 12.954 115.856 14.598 114.8 15.87C113.756 17.13 112.208 18.012 110.156 18.516L118.49 30H115.322ZM105.8 16.68C108.524 16.68 110.51 16.224 111.758 15.312C113.006 14.388 113.63 12.942 113.63 10.974C113.63 9.042 113.072 7.626 111.956 6.726C110.84 5.826 109.046 5.376 106.574 5.376C105.194 5.376 103.874 5.484 102.614 5.7V16.536C103.898 16.632 104.96 16.68 105.8 16.68ZM127.574 30.342C125.102 30.342 123.182 29.526 121.814 27.894C120.446 26.25 119.762 23.706 119.762 20.262C119.762 16.794 120.44 14.25 121.796 12.63C123.152 10.998 125.078 10.182 127.574 10.182C130.058 10.182 131.978 10.998 133.334 12.63C134.69 14.262 135.368 16.8 135.368 20.244C135.368 23.688 134.684 26.232 133.316 27.876C131.96 29.52 130.046 30.342 127.574 30.342ZM127.574 28.056C128.63 28.056 129.518 27.816 130.238 27.336C130.97 26.844 131.528 26.028 131.912 24.888C132.308 23.748 132.506 22.218 132.506 20.298C132.506 18.342 132.308 16.788 131.912 15.636C131.528 14.484 130.976 13.668 130.256 13.188C129.536 12.708 128.642 12.468 127.574 12.468C126.506 12.468 125.612 12.708 124.892 13.188C124.172 13.668 123.614 14.478 123.218 15.618C122.834 16.746 122.642 18.27 122.642 20.19C122.642 22.146 122.834 23.706 123.218 24.87C123.614 26.022 124.172 26.844 124.892 27.336C125.612 27.816 126.506 28.056 127.574 28.056ZM136.343 37.092C137.447 35.484 138.227 33.918 138.683 32.394C139.151 30.87 139.385 29.058 139.385 26.958V10.47H142.193V26.76C142.193 28.344 142.055 29.772 141.779 31.044C141.515 32.328 141.095 33.552 140.519 34.716C139.955 35.88 139.193 37.092 138.233 38.352L136.343 37.092ZM140.771 6.168C140.135 6.168 139.643 6.012 139.295 5.7C138.959 5.388 138.791 4.95 138.791 4.386C138.791 3.822 138.959 3.384 139.295 3.072C139.643 2.748 140.135 2.586 140.771 2.586C141.395 2.586 141.875 2.748 142.211 3.072C142.559 3.384 142.733 3.822 142.733 4.386C142.733 4.95 142.559 5.388 142.211 5.7C141.875 6.012 141.395 6.168 140.771 6.168ZM152.608 10.182C154.228 10.182 155.554 10.404 156.586 10.848C157.63 11.28 158.41 12 158.926 13.008C159.454 14.016 159.718 15.378 159.718 17.094V30H157.36L157.144 27.858H156.964C156.376 28.662 155.632 29.274 154.732 29.694C153.832 30.102 152.836 30.306 151.744 30.306C150.604 30.306 149.608 30.096 148.756 29.676C147.904 29.256 147.25 28.65 146.794 27.858C146.338 27.066 146.11 26.118 146.11 25.014C146.11 23.274 146.656 21.93 147.748 20.982C148.852 20.022 150.568 19.434 152.896 19.218L156.946 18.786V16.95C156.946 15.798 156.772 14.898 156.424 14.25C156.088 13.602 155.578 13.146 154.894 12.882C154.222 12.618 153.334 12.486 152.23 12.486C151.498 12.486 150.7 12.558 149.836 12.702C148.972 12.834 148.132 13.038 147.316 13.314V10.992C148.072 10.74 148.924 10.542 149.872 10.398C150.832 10.254 151.744 10.182 152.608 10.182ZM152.464 28.128C153.304 28.128 154.114 27.936 154.894 27.552C155.674 27.168 156.358 26.55 156.946 25.698V20.712L153.076 21.108C151.66 21.252 150.622 21.624 149.962 22.224C149.302 22.812 148.972 23.646 148.972 24.726C148.972 25.854 149.266 26.706 149.854 27.282C150.454 27.846 151.324 28.128 152.464 28.128ZM168.769 30.342C166.969 30.342 165.313 30.09 163.801 29.586V27.3C165.505 27.828 167.155 28.092 168.751 28.092C170.239 28.092 171.361 27.81 172.117 27.246C172.873 26.67 173.251 25.848 173.251 24.78C173.251 23.88 173.023 23.19 172.567 22.71C172.123 22.218 171.409 21.846 170.425 21.594L168.139 21.072C166.459 20.664 165.247 20.034 164.503 19.182C163.771 18.318 163.405 17.184 163.405 15.78C163.405 14.676 163.681 13.704 164.233 12.864C164.785 12.024 165.607 11.37 166.699 10.902C167.803 10.422 169.147 10.182 170.731 10.182C172.219 10.182 173.629 10.344 174.961 10.668V12.954C173.641 12.606 172.255 12.432 170.803 12.432C169.195 12.432 168.007 12.732 167.239 13.332C166.483 13.932 166.105 14.718 166.105 15.69C166.105 16.518 166.321 17.178 166.753 17.67C167.185 18.162 167.881 18.528 168.841 18.768L171.127 19.272C172.843 19.692 174.073 20.334 174.817 21.198C175.561 22.05 175.933 23.202 175.933 24.654C175.933 25.83 175.651 26.844 175.087 27.696C174.535 28.548 173.719 29.202 172.639 29.658C171.571 30.114 170.281 30.342 168.769 30.342ZM189.147 30.216C188.535 30.216 188.043 30.042 187.671 29.694C187.299 29.346 187.113 28.872 187.113 28.272C187.113 27.672 187.299 27.192 187.671 26.832C188.043 26.472 188.535 26.292 189.147 26.292C189.759 26.292 190.251 26.472 190.623 26.832C190.995 27.192 191.181 27.672 191.181 28.272C191.181 28.86 190.995 29.334 190.623 29.694C190.251 30.042 189.759 30.216 189.147 30.216ZM189.147 14.16C188.535 14.16 188.043 13.986 187.671 13.638C187.299 13.29 187.113 12.816 187.113 12.216C187.113 11.616 187.299 11.136 187.671 10.776C188.043 10.416 188.535 10.236 189.147 10.236C189.759 10.236 190.251 10.416 190.623 10.776C190.995 11.136 191.181 11.616 191.181 12.216C191.181 12.804 190.995 13.278 190.623 13.638C190.251 13.986 189.759 14.16 189.147 14.16ZM195.547 13.926V11.64H209.515V13.926H195.547ZM195.547 21V18.714H209.515V21H195.547Z"
            fill="white"/>
          <path
            d="M228.699 30.216C226.863 30.216 224.973 30.102 223.029 29.874V3.72C225.297 3.3 227.421 3.09 229.401 3.09C233.589 3.09 236.727 4.2 238.815 6.42C240.903 8.64 241.947 12.06 241.947 16.68C241.947 19.836 241.455 22.41 240.471 24.402C239.487 26.394 238.017 27.864 236.061 28.812C234.117 29.748 231.663 30.216 228.699 30.216ZM229.257 27.768C231.465 27.768 233.283 27.396 234.711 26.652C236.139 25.908 237.207 24.72 237.915 23.088C238.635 21.456 238.995 19.32 238.995 16.68C238.995 14.064 238.653 11.934 237.969 10.29C237.285 8.646 236.247 7.44 234.855 6.672C233.463 5.904 231.681 5.52 229.509 5.52C228.477 5.52 227.265 5.622 225.873 5.826V27.588C226.833 27.708 227.961 27.768 229.257 27.768ZM259.672 21.18H248.062C248.098 22.884 248.338 24.234 248.782 25.23C249.238 26.226 249.904 26.946 250.78 27.39C251.668 27.822 252.82 28.038 254.236 28.038C255.544 28.038 257.044 27.792 258.736 27.3V29.622C257.092 30.102 255.484 30.342 253.912 30.342C251.956 30.342 250.336 30.006 249.052 29.334C247.78 28.65 246.82 27.564 246.172 26.076C245.524 24.588 245.2 22.638 245.2 20.226C245.2 16.818 245.854 14.292 247.162 12.648C248.47 11.004 250.294 10.182 252.634 10.182C254.914 10.182 256.654 10.998 257.854 12.63C259.066 14.262 259.672 16.818 259.672 20.298V21.18ZM252.616 12.234C251.2 12.234 250.096 12.768 249.304 13.836C248.524 14.904 248.11 16.704 248.062 19.236H256.954C256.93 17.496 256.738 16.11 256.378 15.078C256.03 14.046 255.544 13.314 254.92 12.882C254.296 12.45 253.528 12.234 252.616 12.234ZM275.585 10.47H278.447L271.571 30H267.935L261.059 10.47H264.047L269.807 27.426L275.585 10.47ZM294.511 21.18H282.901C282.937 22.884 283.177 24.234 283.621 25.23C284.077 26.226 284.743 26.946 285.619 27.39C286.507 27.822 287.659 28.038 289.075 28.038C290.383 28.038 291.883 27.792 293.575 27.3V29.622C291.931 30.102 290.323 30.342 288.751 30.342C286.795 30.342 285.175 30.006 283.891 29.334C282.619 28.65 281.659 27.564 281.011 26.076C280.363 24.588 280.039 22.638 280.039 20.226C280.039 16.818 280.693 14.292 282.001 12.648C283.309 11.004 285.133 10.182 287.473 10.182C289.753 10.182 291.493 10.998 292.693 12.63C293.905 14.262 294.511 16.818 294.511 20.298V21.18ZM287.455 12.234C286.039 12.234 284.935 12.768 284.143 13.836C283.363 14.904 282.949 16.704 282.901 19.236H291.793C291.769 17.496 291.577 16.11 291.217 15.078C290.869 14.046 290.383 13.314 289.759 12.882C289.135 12.45 288.367 12.234 287.455 12.234ZM298.326 30V0.911999H301.134V30H298.326ZM312.953 30.342C310.481 30.342 308.561 29.526 307.193 27.894C305.825 26.25 305.141 23.706 305.141 20.262C305.141 16.794 305.819 14.25 307.175 12.63C308.531 10.998 310.457 10.182 312.953 10.182C315.437 10.182 317.357 10.998 318.713 12.63C320.069 14.262 320.747 16.8 320.747 20.244C320.747 23.688 320.063 26.232 318.695 27.876C317.339 29.52 315.425 30.342 312.953 30.342ZM312.953 28.056C314.009 28.056 314.897 27.816 315.617 27.336C316.349 26.844 316.907 26.028 317.291 24.888C317.687 23.748 317.885 22.218 317.885 20.298C317.885 18.342 317.687 16.788 317.291 15.636C316.907 14.484 316.355 13.668 315.635 13.188C314.915 12.708 314.021 12.468 312.953 12.468C311.885 12.468 310.991 12.708 310.271 13.188C309.551 13.668 308.993 14.478 308.597 15.618C308.213 16.746 308.021 18.27 308.021 20.19C308.021 22.146 308.213 23.706 308.597 24.87C308.993 26.022 309.551 26.844 310.271 27.336C310.991 27.816 311.885 28.056 312.953 28.056ZM324.764 10.47H327.158L327.356 12.522H327.536C328.064 11.814 328.748 11.25 329.588 10.83C330.44 10.398 331.388 10.182 332.432 10.182C334.568 10.182 336.296 10.944 337.616 12.468C338.936 13.992 339.596 16.458 339.596 19.866C339.596 23.394 338.804 26.022 337.22 27.75C335.648 29.478 333.338 30.342 330.29 30.342C329.486 30.342 328.58 30.276 327.572 30.144V37.92H324.764V10.47ZM330.344 28.038C332.48 28.038 334.076 27.42 335.132 26.184C336.2 24.936 336.734 22.914 336.734 20.118C336.734 17.31 336.302 15.354 335.438 14.25C334.574 13.146 333.368 12.594 331.82 12.594C330.98 12.594 330.176 12.798 329.408 13.206C328.64 13.602 328.028 14.184 327.572 14.952V27.768C327.944 27.852 328.382 27.918 328.886 27.966C329.402 28.014 329.888 28.038 330.344 28.038ZM357.23 21.18H345.62C345.656 22.884 345.896 24.234 346.34 25.23C346.796 26.226 347.462 26.946 348.338 27.39C349.226 27.822 350.378 28.038 351.794 28.038C353.102 28.038 354.602 27.792 356.294 27.3V29.622C354.65 30.102 353.042 30.342 351.47 30.342C349.514 30.342 347.894 30.006 346.61 29.334C345.338 28.65 344.378 27.564 343.73 26.076C343.082 24.588 342.758 22.638 342.758 20.226C342.758 16.818 343.412 14.292 344.72 12.648C346.028 11.004 347.852 10.182 350.192 10.182C352.472 10.182 354.212 10.998 355.412 12.63C356.624 14.262 357.23 16.818 357.23 20.298V21.18ZM350.174 12.234C348.758 12.234 347.654 12.768 346.862 13.836C346.082 14.904 345.668 16.704 345.62 19.236H354.512C354.488 17.496 354.296 16.11 353.936 15.078C353.588 14.046 353.102 13.314 352.478 12.882C351.854 12.45 351.086 12.234 350.174 12.234ZM361.045 10.47H363.403L363.619 13.08H363.817C364.417 12.168 365.179 11.478 366.103 11.01C367.027 10.53 368.023 10.29 369.091 10.29C369.559 10.29 369.991 10.32 370.387 10.38V13.008C369.979 12.948 369.499 12.918 368.947 12.918C367.963 12.918 366.997 13.17 366.049 13.674C365.113 14.166 364.381 14.868 363.853 15.78V30H361.045V10.47ZM393.679 16.23C395.443 16.566 396.775 17.304 397.675 18.444C398.587 19.572 399.043 21.024 399.043 22.8C399.043 24.444 398.659 25.812 397.891 26.904C397.123 27.996 395.905 28.824 394.237 29.388C392.581 29.94 390.409 30.216 387.721 30.216C385.561 30.216 383.527 30.096 381.619 29.856V3.756C383.803 3.312 386.071 3.09 388.423 3.09C390.727 3.09 392.599 3.348 394.039 3.864C395.491 4.368 396.559 5.136 397.243 6.168C397.939 7.2 398.287 8.52 398.287 10.128C398.287 11.628 397.909 12.924 397.153 14.016C396.409 15.108 395.251 15.846 393.679 16.23ZM388.639 5.358C387.127 5.358 385.717 5.472 384.409 5.7V15.168H388.963C390.583 15.168 391.873 14.982 392.833 14.61C393.805 14.238 394.501 13.698 394.921 12.99C395.341 12.27 395.551 11.358 395.551 10.254C395.551 9.078 395.323 8.136 394.867 7.428C394.411 6.72 393.679 6.198 392.671 5.862C391.675 5.526 390.331 5.358 388.639 5.358ZM388.297 27.948C390.265 27.948 391.837 27.762 393.013 27.39C394.189 27.018 395.035 26.454 395.551 25.698C396.067 24.942 396.325 23.958 396.325 22.746C396.325 20.97 395.779 19.65 394.687 18.786C393.607 17.922 391.903 17.49 389.575 17.49H384.409V27.75C385.465 27.882 386.761 27.948 388.297 27.948ZM409.597 30.342C407.125 30.342 405.205 29.526 403.837 27.894C402.469 26.25 401.785 23.706 401.785 20.262C401.785 16.794 402.463 14.25 403.819 12.63C405.175 10.998 407.101 10.182 409.597 10.182C412.081 10.182 414.001 10.998 415.357 12.63C416.713 14.262 417.391 16.8 417.391 20.244C417.391 23.688 416.707 26.232 415.339 27.876C413.983 29.52 412.069 30.342 409.597 30.342ZM409.597 28.056C410.653 28.056 411.541 27.816 412.261 27.336C412.993 26.844 413.551 26.028 413.935 24.888C414.331 23.748 414.529 22.218 414.529 20.298C414.529 18.342 414.331 16.788 413.935 15.636C413.551 14.484 412.999 13.668 412.279 13.188C411.559 12.708 410.665 12.468 409.597 12.468C408.529 12.468 407.635 12.708 406.915 13.188C406.195 13.668 405.637 14.478 405.241 15.618C404.857 16.746 404.665 18.27 404.665 20.19C404.665 22.146 404.857 23.706 405.241 24.87C405.637 26.022 406.195 26.844 406.915 27.336C407.635 27.816 408.529 28.056 409.597 28.056ZM428.336 30.342C425.864 30.342 423.944 29.526 422.576 27.894C421.208 26.25 420.524 23.706 420.524 20.262C420.524 16.794 421.202 14.25 422.558 12.63C423.914 10.998 425.84 10.182 428.336 10.182C430.82 10.182 432.74 10.998 434.096 12.63C435.452 14.262 436.13 16.8 436.13 20.244C436.13 23.688 435.446 26.232 434.078 27.876C432.722 29.52 430.808 30.342 428.336 30.342ZM428.336 28.056C429.392 28.056 430.28 27.816 431 27.336C431.732 26.844 432.29 26.028 432.674 24.888C433.07 23.748 433.268 22.218 433.268 20.298C433.268 18.342 433.07 16.788 432.674 15.636C432.29 14.484 431.738 13.668 431.018 13.188C430.298 12.708 429.404 12.468 428.336 12.468C427.268 12.468 426.374 12.708 425.654 13.188C424.934 13.668 424.376 14.478 423.98 15.618C423.596 16.746 423.404 18.27 423.404 20.19C423.404 22.146 423.596 23.706 423.98 24.87C424.376 26.022 424.934 26.844 425.654 27.336C426.374 27.816 427.268 28.056 428.336 28.056ZM452.352 30L445.836 21.18H442.884V30H440.076V0.911999H442.884V18.822H445.818L451.83 10.47H454.926L448.158 19.956L455.538 30H452.352ZM466.099 30V3.36H468.943V27.516H481.147V30H466.099ZM490 30.342C487.528 30.342 485.608 29.526 484.24 27.894C482.872 26.25 482.188 23.706 482.188 20.262C482.188 16.794 482.866 14.25 484.222 12.63C485.578 10.998 487.504 10.182 490 10.182C492.484 10.182 494.404 10.998 495.76 12.63C497.116 14.262 497.794 16.8 497.794 20.244C497.794 23.688 497.11 26.232 495.742 27.876C494.386 29.52 492.472 30.342 490 30.342ZM490 28.056C491.056 28.056 491.944 27.816 492.664 27.336C493.396 26.844 493.954 26.028 494.338 24.888C494.734 23.748 494.932 22.218 494.932 20.298C494.932 18.342 494.734 16.788 494.338 15.636C493.954 14.484 493.402 13.668 492.682 13.188C491.962 12.708 491.068 12.468 490 12.468C488.932 12.468 488.038 12.708 487.318 13.188C486.598 13.668 486.04 14.478 485.644 15.618C485.26 16.746 485.068 18.27 485.068 20.19C485.068 22.146 485.26 23.706 485.644 24.87C486.04 26.022 486.598 26.844 487.318 27.336C488.038 27.816 488.932 28.056 490 28.056ZM507.424 38.28C506.548 38.28 505.636 38.208 504.688 38.064C503.752 37.932 502.9 37.734 502.132 37.47V35.094C503.932 35.67 505.642 35.958 507.262 35.958C508.582 35.958 509.656 35.766 510.484 35.382C511.312 35.01 511.93 34.398 512.338 33.546C512.758 32.694 512.968 31.56 512.968 30.144V28.056H512.806C512.254 28.716 511.558 29.25 510.718 29.658C509.878 30.054 508.936 30.252 507.892 30.252C506.572 30.252 505.39 29.934 504.346 29.298C503.314 28.662 502.486 27.63 501.862 26.202C501.238 24.762 500.926 22.902 500.926 20.622C500.926 17.118 501.718 14.502 503.302 12.774C504.886 11.046 507.22 10.182 510.304 10.182C511.228 10.182 512.182 10.254 513.166 10.398C514.162 10.542 515.032 10.74 515.776 10.992V29.73C515.776 32.73 515.086 34.902 513.706 36.246C512.338 37.602 510.244 38.28 507.424 38.28ZM508.72 27.84C509.56 27.84 510.364 27.648 511.132 27.264C511.9 26.88 512.512 26.328 512.968 25.608V12.81C512.032 12.582 511.078 12.468 510.106 12.468C508.018 12.468 506.446 13.092 505.39 14.34C504.334 15.588 503.806 17.598 503.806 20.37C503.806 22.278 504.01 23.784 504.418 24.888C504.838 25.98 505.408 26.748 506.128 27.192C506.848 27.624 507.712 27.84 508.72 27.84Z"
            fill="#058a64"/>
        </svg>
      </div>
      <nav className={navBar}>

          <div className={navLinkGroup}>
            <a href="#" className={navLinkText}>
              <div className={border}/>
              Home
            </a>
            <a href="#" className={navLinkText}>
              <div className={border}/>
              About Me
            </a>
            <a href="#" className={navLinkText}>
              <div className={border}/>
              Categories
            </a>
          </div>

      </nav>
    </>

  )
}

export default Navigation
let svgFish = `
        <svg width="126" height="109" viewBox="0 0 126 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.2708 67.4319C83.3197 65.7074 91.864 66.6027 94.5044 67.0172C97.1449 67.4318 102.425 68.7774 105.066 70.5378C108.586 72.2981 115.629 77.579 120.91 80.2196C111.228 83.7402 97.1453 80.2196 92.7445 77.579C95.385 81.9798 103.306 98.7027 100.666 107.504C98.9052 103.984 95.7382 98.1037 90.1037 95.1821C86.5002 93.3137 82.7297 89.7469 80.5002 86.3137C78.2708 82.8806 76.697 76.8679 77.1812 74.3236L88.0719 75.5125L81.2708 67.4319Z" fill="#E37566"/>
        <path d="M38.714 60.9761C37.931 61.6092 36.9538 68.017 36.9538 70.6575C36.9538 73.2979 38.7141 80.3391 43.1148 88.2605C40.0404 86.3137 34.061 81.8343 30.5404 78.3137C28.7801 76.5534 25.4206 72.4178 24.5404 70.6575C23.6603 68.8972 22.4205 66.4538 21.5404 63.8137C20.6602 62.053 20.729 60.4454 20.0402 56.8137C19.6147 54.57 19.4697 50.4454 19.4697 48.4454C19.4697 46.4454 20.0403 44.8137 20.0403 42.3137L29.8153 54.1819L38.714 60.9761Z" fill="#E37566"/>
        <path d="M59.809 42.82C60.5552 42.1439 67.0371 42.1665 69.646 42.5737C72.2549 42.9808 80.4537 45.746 88.3751 48.3865C84.5 45.8137 81.5 42.8137 78 38.8137C76.3607 36.9402 74 33.8137 71.5 30.8118C70.1425 29.1818 67.9728 27.0905 65.5 25.8137C63.8961 24.6726 61.5 23.8137 59.5 23.3137C57.2846 22.7597 54 22.5293 52 22.3136C50.5 22.3135 47 21.6533 45 21.5979L54.0491 34.304L59.809 42.82Z" fill="#E37566"/>
        <path d="M88.3431 75.8187C75.1411 74.0583 50.2433 72.366 29.3727 53.8145C13.5305 39.7326 9.12958 18.6089 16.171 8.92718C31.0001 5.31372 39.0002 11.3136 49.6164 25.7603C65.5002 52.3137 74.2606 58.2157 88.3431 75.8187Z" fill="#FAF6F6"/>
        <path d="M45.5582 48.1256C38.1746 52.7506 29.0339 43.253 24.3601 35.7915C21.0055 30.4362 20.65 23.5554 24.9824 20.8417C29.3149 18.1279 37.7332 23.2043 41.0877 28.5596C44.4423 33.9149 49.8906 45.4118 45.5582 48.1256Z" fill="#E2513D"/>
        <path d="M65.1859 63.4761C62.8188 64.3767 55.1486 63.3048 51.3768 59.9759C48.6696 57.5866 47.4182 54.2099 49.4355 51.9243C51.4528 49.6386 56.9621 50.97 59.6693 53.3593C62.3764 55.7487 68.0352 62.392 65.1859 63.4761Z" fill="#E2513D"/>
        <circle cx="16.1705" cy="17.7285" r="1.76031" fill="#070707"/>
        <circle cx="26.7325" cy="10.6873" r="1.76031" fill="#070707"/>
        </svg>
`;

let svgFishBlur = `
        <svg width="126" height="112" viewBox="0 0 126 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_69_689)">
        <path d="M81.2708 67.4319C83.3197 65.7074 91.864 66.6027 94.5044 67.0172C97.1449 67.4318 102.425 68.7774 105.066 70.5378C108.586 72.2981 115.629 77.579 120.91 80.2196C111.228 83.7402 97.1453 80.2196 92.7445 77.579C95.385 81.9798 103.306 98.7027 100.666 107.504C98.9052 103.984 95.7382 98.1037 90.1037 95.1821C86.5002 93.3137 82.7297 89.7469 80.5002 86.3137C78.2708 82.8806 76.697 76.8679 77.1812 74.3236L88.0719 75.5125L81.2708 67.4319Z" fill="#E37566"/>
        <path d="M38.714 60.9761C37.931 61.6092 36.9538 68.017 36.9538 70.6575C36.9538 73.2979 38.7141 80.3391 43.1148 88.2605C40.0404 86.3137 34.061 81.8343 30.5404 78.3137C28.7801 76.5534 25.4206 72.4178 24.5404 70.6575C23.6603 68.8972 22.4205 66.4538 21.5404 63.8137C20.6602 62.053 20.729 60.4454 20.0402 56.8137C19.6147 54.57 19.4697 50.4454 19.4697 48.4454C19.4697 46.4454 20.0403 44.8137 20.0403 42.3137L29.8153 54.1819L38.714 60.9761Z" fill="#E37566"/>
        <path d="M59.809 42.82C60.5552 42.1439 67.0371 42.1665 69.646 42.5737C72.2549 42.9808 80.4537 45.746 88.3751 48.3865C84.5 45.8137 81.5 42.8137 78 38.8137C76.3607 36.9402 74 33.8137 71.5 30.8118C70.1425 29.1818 67.9728 27.0905 65.5 25.8137C63.8961 24.6726 61.5 23.8137 59.5 23.3137C57.2846 22.7597 54 22.5293 52 22.3136C50.5 22.3135 47 21.6533 45 21.5979L54.0491 34.304L59.809 42.82Z" fill="#E37566"/>
        <path d="M88.3431 75.8187C75.1411 74.0583 50.2433 72.366 29.3727 53.8145C13.5305 39.7326 9.12958 18.6089 16.171 8.92718C31.0001 5.31372 39.0002 11.3136 49.6164 25.7603C65.5002 52.3137 74.2606 58.2157 88.3431 75.8187Z" fill="#FAF6F6"/>
        <path d="M45.5582 48.1256C38.1746 52.7506 29.0339 43.253 24.3601 35.7915C21.0055 30.4362 20.65 23.5554 24.9824 20.8417C29.3149 18.1279 37.7332 23.2043 41.0877 28.5596C44.4423 33.9149 49.8906 45.4118 45.5582 48.1256Z" fill="#E2513D"/>
        <path d="M65.1859 63.4761C62.8188 64.3767 55.1486 63.3048 51.3768 59.9759C48.6696 57.5866 47.4182 54.2099 49.4355 51.9243C51.4528 49.6386 56.9621 50.97 59.6693 53.3593C62.3764 55.7487 68.0352 62.392 65.1859 63.4761Z" fill="#E2513D"/>
        <circle cx="16.1705" cy="17.7285" r="1.76031" fill="#070707"/>
        <circle cx="26.7325" cy="10.6873" r="1.76031" fill="#070707"/>
        </g>
        <defs>
        <filter id="filter0_f_69_689" x="-4" y="-4" width="133.958" height="116.766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_69_689"/>
        </filter>
        </defs>
        </svg>
`;

let svgWater = `
    <svg width="1470" height="1402" viewBox="0 0 1470 1402" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i_133_1930)">
    <path d="M1469.98 783.452C1467.78 1309.85 1271.13 1402 733.642 1402C318.667 1402 25.5644 1257.18 1.37048 783.453C-25.5813 255.723 349.441 0.449707 733.642 0.449707C1172 0.449866 1472.7 134.029 1469.98 783.452Z" 
    fill="var(--lake)"/>
    </g>
    <defs>
    <filter id="filter0_i_133_1930" x="0" y="0.449707" width="1470" height="1411.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="15"/>
    <feGaussianBlur stdDeviation="5"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0980392 0 0 0 0 0.0862745 0 0 0 0.7 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_133_1930"/>
    </filter>
    </defs>
    </svg>
`;

let svgWaterHalfD = ``;



export const icons: Record<string, (active: boolean) => JSX.Element> = {
  dashboard: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.57143C0 1.15127 1.15127 0 2.57143 0H7.71429C9.13445 0 10.2857 1.15127 10.2857 2.57143V7.71429C10.2857 9.13445 9.13445 10.2857 7.71429 10.2857H2.57143C1.15127 10.2857 0 9.13445 0 7.71429V2.57143ZM13.7143 2.57143C13.7143 1.15127 14.8655 0 16.2857 0H21.4286C22.8487 0 24 1.15127 24 2.57143V7.71429C24 9.13445 22.8487 10.2857 21.4286 10.2857H16.2857C14.8655 10.2857 13.7143 9.13445 13.7143 7.71429V2.57143ZM2.57143 13.7143C1.15127 13.7143 0 14.8655 0 16.2857V21.4286C0 22.8487 1.15127 24 2.57143 24H7.71429C9.13445 24 10.2857 22.8487 10.2857 21.4286V16.2857C10.2857 14.8655 9.13445 13.7143 7.71429 13.7143H2.57143ZM13.7143 16.2857C13.7143 14.8655 14.8655 13.7143 16.2857 13.7143H21.4286C22.8487 13.7143 24 14.8655 24 16.2857V21.4286C24 22.8487 22.8487 24 21.4286 24H16.2857C14.8655 24 13.7143 22.8487 13.7143 21.4286V16.2857Z"
        className={iconClassName(active, "light")}
      />
    </svg>
  ),
  books: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.14206 0H0.856349C0.382963 0 -0.000793457 0.383757 -0.000793457 0.857143V23.1429C-0.000793457 23.6162 0.382963 24 0.856349 24H5.14206C5.61544 24 5.9992 23.6162 5.9992 23.1429V0.857143C5.9992 0.383757 5.61544 0 5.14206 0ZM12.8573 5.14286H8.57163C8.09824 5.14286 7.71448 5.52662 7.71448 6V23.1429C7.71448 23.6162 8.09824 24 8.57163 24H12.8573C13.3307 24 13.7145 23.6162 13.7145 23.1429V6C13.7145 5.52662 13.3307 5.14286 12.8573 5.14286ZM15.4469 5.6813L18.7729 4.84894C19.2322 4.73402 19.6976 5.01314 19.8124 5.47236L23.9742 22.1025C24.0892 22.5615 23.81 23.027 23.3509 23.142L20.0248 23.9743C19.5656 24.0893 19.1002 23.8101 18.9853 23.351L14.8235 6.72089C14.7085 6.26165 14.9877 5.79622 15.4469 5.6813Z"
        className={iconClassName(active, "light")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7144 16.0713H7.71439V18.2141H13.7144V16.0713ZM5.99911 16.9251H-0.00088501V19.0679H5.99911V16.9251ZM17.9189 18.1915L22.6965 16.9971L23.2167 19.0757L18.4385 20.2704C18.3662 20.2884 18.2937 20.2987 18.222 20.3016L17.7125 18.2659C17.7773 18.2347 17.8462 18.2097 17.9189 18.1915Z"
        className={iconClassName(active, "dark")}
      />
    </svg>
  ),
  bookOpen: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.56529 0.307575C7.07157 0.842213 11.037 2.61669 12 3.57969C12.963 2.61669 16.9284 0.842458 21.4347 0.307819C22.8449 0.1405 24 1.30264 24 2.7228V16.4371C24 17.8572 22.8394 18.989 21.4421 19.2427C18.2863 19.8156 15.6616 21.329 13.9872 22.5252C12.8316 23.3507 11.1672 23.3496 10.0116 22.5242C8.33712 21.3282 5.71294 19.8153 2.55794 19.2424C1.16062 18.9887 0 17.8571 0 16.4368V2.72255C0 1.30239 1.15502 0.140256 2.56529 0.307575Z"
        className={iconClassName(active, "light")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9286 22.9791V2.83301C11.4179 3.1071 11.7843 3.36353 12 3.57925C12.2157 3.36353 12.5821 3.10711 13.0714 2.83304V22.9794C12.3803 23.1982 11.6197 23.198 10.9286 22.9791Z"
        className={iconClassName(active, "dark")}
      />
      <defs></defs>
    </svg>
  ),
  monitorCode: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4663 17.397C10.1043 17.397 9.78126 17.6245 9.65928 17.9653L8.4822 21.2541H6.85716C6.14708 21.2541 5.57144 21.8298 5.57144 22.5398C5.57144 23.2499 6.14708 23.8255 6.85716 23.8255H17.1429C17.8529 23.8255 18.4286 23.2499 18.4286 22.5398C18.4286 21.8298 17.8529 21.2541 17.1429 21.2541H15.5181L14.341 17.9653C14.219 17.6245 13.896 17.397 13.534 17.397H10.4663Z"
        className={iconClassName(active, "dark")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.60304 1.39355C1.22379 1.39355 0.105682 2.51167 0.105682 3.89091V16.4201C0.105682 17.7994 1.22379 18.9175 2.60304 18.9175H21.3969C22.7762 18.9175 23.8942 17.7994 23.8942 16.4201V3.96499C23.8942 2.54482 22.7429 1.39355 21.3228 1.39355H2.60304Z"
        className={iconClassName(active, "light")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5055 6.8357C14.73 6.16207 14.366 5.43394 13.6923 5.20939C13.0187 4.98485 12.2905 5.34891 12.066 6.02254L9.49457 13.7368C9.27001 14.4105 9.63408 15.1386 10.3077 15.3632C10.9814 15.5877 11.7095 15.2236 11.934 14.55L14.5055 6.8357ZM8.69048 7.30668C9.1526 7.84581 9.09017 8.65749 8.55103 9.11961L6.70606 10.701L8.10883 11.87C8.65433 12.3246 8.72803 13.1353 8.27345 13.6808C7.81885 14.2263 7.00813 14.3 6.46263 13.8454L3.8912 11.7026C3.60048 11.4603 3.43124 11.1022 3.42862 10.7238C3.426 10.3453 3.59023 9.98494 3.87757 9.73865L6.87757 7.16722C7.4167 6.7051 8.22838 6.76755 8.69048 7.30668ZM15.7266 7.7489C16.1812 7.20339 16.9919 7.12968 17.5373 7.58427L20.1088 9.72713C20.3995 9.96941 20.5687 10.3275 20.5714 10.7059C20.574 11.0843 20.4098 11.4447 20.1225 11.691L17.1225 14.2625C16.5833 14.7246 15.7716 14.6621 15.3095 14.123C14.8474 13.5839 14.9099 12.7722 15.449 12.3101L17.2939 10.7287L15.8912 9.5597C15.3457 9.10512 15.272 8.29438 15.7266 7.7489Z"
        className={iconClassName(active, "dark")}
      />
    </svg>
  ),
  browserCode: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.00099 0.0791016C1.38728 0.0791016 0.0791016 1.38728 0.0791016 3.00099V20.9989C0.0791016 22.6127 1.38728 23.9209 3.00099 23.9209H20.999C22.6126 23.9209 23.9208 22.6127 23.9208 20.9989V3.00099C23.9208 1.38728 22.6126 0.0791016 20.999 0.0791016H3.00099Z"
        fill="#FFCE51"
      />
      <path
        d="M3.00099 0.0791016C1.38728 0.0791016 0.0791016 1.38728 0.0791016 3.00099V5.9999H23.9208V3.00099C23.9208 1.38728 22.6126 0.0791016 20.999 0.0791016H3.00099Z"
        fill="#E38414"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.4 11.8264C14.6246 11.1528 14.2605 10.4247 13.5869 10.2001C12.9132 9.97557 12.1851 10.3396 11.9606 11.0133L9.60011 18.0946C9.37557 18.7683 9.73964 19.4963 10.4133 19.7209C11.0869 19.9455 11.815 19.5814 12.0396 18.9078L14.4 11.8264ZM15.6796 12.0843C16.1817 11.5822 16.9957 11.5822 17.4979 12.0843L19.8583 14.4447C20.3604 14.9468 20.3604 15.7609 19.8583 16.263L17.4979 18.6234C16.9957 19.1255 16.1817 19.1255 15.6796 18.6234C15.1775 18.1213 15.1775 17.3072 15.6796 16.8052L17.1309 15.3538L15.6796 13.9025C15.1775 13.4004 15.1775 12.5864 15.6796 12.0843ZM8.32098 12.0844C8.82309 12.5865 8.82309 13.4005 8.32098 13.9027L6.86968 15.3539L8.32098 16.8053C8.82309 17.3074 8.82309 18.1215 8.32098 18.6236C7.81888 19.1257 7.00482 19.1257 6.50271 18.6236L4.14227 16.2631C3.64016 15.761 3.64016 14.9469 4.14227 14.4448L6.50271 12.0844C7.00482 11.5823 7.81888 11.5823 8.32098 12.0844Z"
        fill="#E38414"
      />
      <defs></defs>
    </svg>
  ),
  code: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.9587 4.95958C17.3119 4.26822 16.227 4.23214 15.5356 4.87899C14.8443 5.52584 14.8082 6.61066 15.4551 7.30201L19.8504 11.9998L15.4551 16.6976C14.8082 17.3889 14.8443 18.4737 15.5356 19.1207C16.227 19.7675 17.3119 19.7315 17.9587 19.0401L23.4499 13.171C24.0665 12.512 24.0665 11.4877 23.4499 10.8286L17.9587 4.95958ZM8.54518 7.30206C9.19203 6.61071 9.15595 5.52589 8.46459 4.87904C7.77324 4.23219 6.68842 4.26828 6.04157 4.95963L0.55037 10.8287C-0.0662692 11.4877 -0.0662692 12.512 0.55037 13.1711L6.04157 19.0401C6.68842 19.7315 7.77324 19.7675 8.46459 19.1207C9.15595 18.4739 9.19203 17.3891 8.54518 16.6977L4.14981 11.9999L8.54518 7.30206Z"
        className={iconClassName(active, "light")}
      />
    </svg>
  ),
  plusThick: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6429 0C10.9609 0 10.3068 0.270917 9.82458 0.753154C9.34235 1.23539 9.07143 1.88943 9.07143 2.57143V8.57143H3.07143C2.38943 8.57143 1.73539 8.84235 1.25315 9.32458C0.770917 9.80681 0.5 10.4609 0.5 11.1429V12.8571C0.5 13.5391 0.770917 14.1932 1.25315 14.6754C1.73539 15.1576 2.38943 15.4286 3.07143 15.4286H9.07143V21.4286C9.07143 22.1105 9.34235 22.7647 9.82458 23.2469C10.3068 23.7291 10.9609 24 11.6429 24H13.3571C14.0391 24 14.6932 23.7291 15.1754 23.2469C15.6576 22.7647 15.9286 22.1105 15.9286 21.4286V15.4286H21.9286C22.6105 15.4286 23.2647 15.1576 23.7469 14.6754C24.2291 14.1932 24.5 13.5391 24.5 12.8571V11.1429C24.5 10.4609 24.2291 9.80681 23.7469 9.32458C23.2647 8.84235 22.6105 8.57143 21.9286 8.57143H15.9286V2.57143C15.9286 1.88943 15.6576 1.23539 15.1754 0.753154C14.6932 0.270917 14.0391 0 13.3571 0H11.6429Z"
        className={iconClassName(active, "light")}
      />
    </svg>
  ),
  plusThin: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7143 1.71429C13.7143 0.767511 12.9468 0 12 0C11.0532 0 10.2857 0.767511 10.2857 1.71429V10.2857H1.71429C0.767511 10.2857 0 11.0532 0 12C0 12.9468 0.767511 13.7143 1.71429 13.7143H10.2857V22.2857C10.2857 23.2325 11.0532 24 12 24C12.9468 24 13.7143 23.2325 13.7143 22.2857V13.7143H22.2857C23.2325 13.7143 24 12.9468 24 12C24 11.0532 23.2325 10.2857 22.2857 10.2857H13.7143V1.71429Z"
        className={iconClassName(active, "light")}
      />
      <defs></defs>
    </svg>
  ),
  list: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.71429 5.99937C2.66105 5.99937 3.42857 5.23187 3.42857 4.28509C3.42857 3.33832 2.66105 2.5708 1.71429 2.5708C0.767511 2.5708 0 3.33832 0 4.28509C0 5.23187 0.767511 5.99937 1.71429 5.99937ZM3.42857 12.0002C3.42857 12.947 2.66105 13.7145 1.71429 13.7145C0.767511 13.7145 0 12.947 0 12.0002C0 11.0534 0.767511 10.2859 1.71429 10.2859C2.66105 10.2859 3.42857 11.0534 3.42857 12.0002ZM3.42857 19.7154C3.42857 20.6622 2.66105 21.4296 1.71429 21.4296C0.767511 21.4296 0 20.6622 0 19.7154C0 18.7686 0.767511 18.0011 1.71429 18.0011C2.66105 18.0011 3.42857 18.7686 3.42857 19.7154Z"
        className={iconClassName(active, "dark")}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.85715 4.28571C6.85715 3.57564 7.43279 3 8.14286 3H22.7143C23.4243 3 24 3.57564 24 4.28571C24 4.99579 23.4243 5.57143 22.7143 5.57143H8.14286C7.43279 5.57143 6.85715 4.99579 6.85715 4.28571ZM6.85715 12C6.85715 11.2899 7.43279 10.7143 8.14286 10.7143H22.7143C23.4243 10.7143 24 11.2899 24 12C24 12.7101 23.4243 13.2857 22.7143 13.2857H8.14286C7.43279 13.2857 6.85715 12.7101 6.85715 12ZM8.14286 18.4286C7.43279 18.4286 6.85715 19.0042 6.85715 19.7143C6.85715 20.4243 7.43279 21 8.14286 21H22.7143C23.4243 21 24 20.4243 24 19.7143C24 19.0042 23.4243 18.4286 22.7143 18.4286H8.14286Z"
        className={iconClassName(active, "light")}
      />
    </svg>
  ),
  cog: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.52616 1.18154L8.73231 3.23078L6 4.78154L3.82153 4.44922C3.45881 4.39999 3.08962 4.45971 2.76089 4.62079C2.43217 4.78186 2.15874 5.03702 1.97538 5.35385L1.23692 6.64615C1.0477 6.96802 0.960512 7.33971 0.98688 7.71216C1.01325 8.08461 1.15193 8.4403 1.38462 8.73231L2.76924 10.4492V13.5508L1.42154 15.2677C1.18885 15.5597 1.05017 15.9154 1.0238 16.2878C0.997434 16.6603 1.08462 17.032 1.27385 17.3539L2.01231 18.6461C2.19567 18.9629 2.4691 19.2182 2.79781 19.3791C3.12653 19.5403 3.49572 19.5999 3.85846 19.5507L6.03692 19.2185L8.73231 20.7693L9.52616 22.8185C9.66003 23.1655 9.89557 23.4639 10.2019 23.6746C10.5083 23.8855 10.8712 23.999 11.2431 24H12.7938C13.1657 23.999 13.5286 23.8855 13.835 23.6746C14.1413 23.4639 14.3769 23.1655 14.5108 22.8185L15.3046 20.7693L18 19.2185L20.1785 19.5507C20.5413 19.5999 20.9104 19.5403 21.2392 19.3791C21.5678 19.2182 21.8412 18.9629 22.0246 18.6461L22.7632 17.3539C22.9522 17.032 23.0395 16.6603 23.0131 16.2878C22.9867 15.9154 22.848 15.5597 22.6154 15.2677L21.2308 13.5508V10.4492L22.5785 8.73231C22.8112 8.4403 22.9498 8.08461 22.9762 7.71216C23.0026 7.33971 22.9154 6.96802 22.7261 6.64615L21.9876 5.35385C21.8044 5.03702 21.5309 4.78186 21.2021 4.62079C20.8735 4.45971 20.5042 4.39999 20.1415 4.44922L17.9632 4.78154L15.2677 3.23078L14.4738 1.18154C14.34 0.834579 14.1044 0.536143 13.7981 0.325315C13.4917 0.114487 13.1288 0.00109857 12.7569 0H11.2431C10.8712 0.00109857 10.5083 0.114487 10.2019 0.325315C9.89557 0.536143 9.66003 0.834579 9.52616 1.18154ZM12 15.8571C14.1303 15.8571 15.8572 14.1302 15.8572 12C15.8572 9.86976 14.1303 8.14286 12 8.14286C9.86977 8.14286 8.14287 9.86976 8.14287 12C8.14287 14.1302 9.86977 15.8571 12 15.8571Z"
        className={iconClassName(active, "light")}
      />
      <defs></defs>
    </svg>
  ),
  moon: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8045 1.30604C11.9811 1.01872 11.9728 0.654516 11.7833 0.375526C11.5938 0.0965375 11.2583 -0.045377 10.9261 0.012941C7.96863 0.532133 5.31036 2.13365 3.46909 4.5055C1.62782 6.87737 0.735409 9.84972 0.965703 12.8435C1.196 15.8374 2.53251 18.6382 4.71486 20.7007C6.89724 22.763 9.76918 23.9391 12.7712 23.9998L12.7864 24C14.8423 24.0053 16.8647 23.4792 18.6574 22.4727C20.4502 21.4665 21.9525 20.0138 23.0186 18.2559C23.1922 17.9697 23.1833 17.6086 22.9958 17.3313C22.8081 17.0539 22.4764 16.9112 22.146 16.9658C21.624 17.0521 21.0964 17.0998 20.5673 17.1086C18.7312 17.0957 16.9313 16.5955 15.3516 15.6592C13.7693 14.7213 12.4648 13.3794 11.5721 11.7711C10.6793 10.1629 10.2303 8.34609 10.2712 6.5071C10.312 4.66812 10.8412 2.87309 11.8045 1.30604Z"
        fill="#8bc1fa"
      />
    </svg>
  ),
  sun: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3371 17.5716C15.4141 17.5716 17.9085 15.0772 17.9085 12.0001C17.9085 8.92312 15.4141 6.42871 12.3371 6.42871C9.2601 6.42871 6.76569 8.92312 6.76569 12.0001C6.76569 15.0772 9.2601 17.5716 12.3371 17.5716Z"
        fill="#facc15"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6228 1.28571C13.6228 0.575633 13.0472 0 12.3371 0C11.6271 0 11.0514 0.575633 11.0514 1.28571V3C11.0514 3.71007 11.6271 4.28571 12.3371 4.28571C13.0472 4.28571 13.6228 3.71007 13.6228 3V1.28571ZM13.6228 21C13.6228 20.2899 13.0472 19.7143 12.3371 19.7143C11.6271 19.7143 11.0514 20.2899 11.0514 21V22.7143C11.0514 23.4243 11.6271 24 12.3371 24C13.0472 24 13.6228 23.4243 13.6228 22.7143V21ZM20.0514 12C20.0514 11.2899 20.6271 10.7143 21.3371 10.7143H23.0514C23.7615 10.7143 24.3371 11.2899 24.3371 12C24.3371 12.7101 23.7615 13.2857 23.0514 13.2857H21.3371C20.6271 13.2857 20.0514 12.7101 20.0514 12ZM1.62284 10.7143C0.912761 10.7143 0.337128 11.2899 0.337128 12C0.337128 12.7101 0.912761 13.2857 1.62284 13.2857H3.33713C4.0472 13.2857 4.62284 12.7101 4.62284 12C4.62284 11.2899 4.0472 10.7143 3.33713 10.7143H1.62284ZM3.85182 3.5147C4.35392 3.01258 5.16798 3.01258 5.6701 3.5147L7.14552 4.99011C7.64761 5.49221 7.64761 6.30627 7.14552 6.80839C6.6434 7.31049 5.82934 7.31049 5.32724 6.80839L3.85182 5.33297C3.34971 4.83086 3.34971 4.01679 3.85182 3.5147ZM19.347 17.1914C18.8449 16.6892 18.0308 16.6892 17.5287 17.1914C17.0266 17.6935 17.0266 18.5074 17.5287 19.0095L19.0042 20.485C19.5063 20.9871 20.3204 20.9871 20.8225 20.485C21.3246 19.9829 21.3246 19.1688 20.8225 18.6667L19.347 17.1914ZM20.8225 3.5147C21.3246 4.01679 21.3246 4.83086 20.8225 5.33297L19.347 6.80839C18.8449 7.31049 18.0308 7.31049 17.5287 6.80839C17.0266 6.30627 17.0266 5.49221 17.5287 4.99011L19.0042 3.5147C19.5063 3.01258 20.3204 3.01258 20.8225 3.5147ZM7.14552 19.0095C7.64761 18.5074 7.64761 17.6935 7.14552 17.1914C6.6434 16.6892 5.82934 16.6892 5.32724 17.1914L3.85182 18.6667C3.34971 19.1688 3.34971 19.9829 3.85182 20.485C4.35392 20.9871 5.16798 20.9871 5.6701 20.485L7.14552 19.0095Z"
        fill="#fef08a"
      />
    </svg>
  ),
  expandArrow: (active: boolean) => (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.2857 5.14307C23.2325 5.14307 24 5.91059 24 6.85735L24 17.1431C24 18.0899 23.2325 18.8574 22.2857 18.8574C21.3389 18.8574 20.5714 18.0899 20.5714 17.1431L20.5714 6.85735C20.5714 5.91059 21.3389 5.14307 22.2857 5.14307Z"
        fill="#434A55"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.891 11.3939C17.2257 11.7287 17.2257 12.2714 16.891 12.6061L11.7481 17.749C11.503 17.9942 11.1343 18.0674 10.814 17.9349C10.4937 17.8022 10.2849 17.4895 10.2849 17.1429L10.2849 13.7143L1.71515 13.7143C0.768346 13.7143 0.000860013 12.9468 0.000860054 12C0.000860096 11.0533 0.768346 10.2857 1.71515 10.2857L10.2849 10.2857L10.2849 6.85717C10.2849 6.51049 10.4937 6.19795 10.814 6.06527C11.1343 5.9326 11.503 6.00594 11.7481 6.25108L16.891 11.3939Z"
        fill="#B7BCBD"
      />
    </svg>
  ),
};

const iconClassName = (active: boolean, shade: "dark" | "light") =>
  `fill-nav-${active ? "active" : "inactive"}-${shade}${
    active ? "-color" : ""
  } group-hover:fill-nav-active-${shade}${active ? "-color" : ""} transition`;

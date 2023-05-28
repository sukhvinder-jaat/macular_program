import React from "react";

export const BackTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <div className="position-fixed bottom-0 end-0 me-5 z-20 pb-5 ">
      <button
        className="border-0 bg-transparent back_top_btn "
        onClick={moveToTop}
      >
        <svg
          className=""
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17.9247" cy="17.6415" r="17.6415" fill="#27BBA2" />
          <path
            d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>
    </div>
  );
};

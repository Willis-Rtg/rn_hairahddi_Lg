import * as React from "react";

function SvgComponent(props) {
  return (
    <svg height={512} viewBox="0 0 512 512" width={512} {...props}>
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={256}
        x2={256}
        y1={512}
        y2={0}
      >
        <stop offset={0} stopColor="#ffbef9" />
        <stop offset={1} stopColor="#fff1ff" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={256}
        x2={256}
        y1={407}
        y2={105}
      >
        <stop offset={0} stopColor="#ff81ff" />
        <stop offset={1} stopColor="#a93aff" />
      </linearGradient>
      <circle cx={256} cy={256} fill="url(#prefix__a)" r={256} />
      <path
        d="M300.375 105h-88.75a8.873 8.873 0 00-8.875 8.882 8.873 8.873 0 008.875 8.882h26.625v35.53h-8.875a8.873 8.873 0 00-8.875 8.882v8.882h53.25v-8.882a8.873 8.873 0 00-8.875-8.882H256v-35.53h44.375c4.897 0 8.875 3.981 8.875 8.882 0 4.91 3.969 8.882 8.875 8.882s8.875-3.973 8.875-8.882C327 116.953 315.057 105 300.375 105zM238.25 335.941h71v-71.059h-71zm62.125-142.118h-106.5a8.873 8.873 0 00-8.875 8.882v195.412a8.873 8.873 0 008.875 8.882h106.5a8.873 8.873 0 008.875-8.882v-44.412h-79.875a8.873 8.873 0 01-8.875-8.882V256a8.873 8.873 0 018.875-8.882h79.875v-44.412c0-4.91-3.969-8.883-8.875-8.883z"
        fill="url(#prefix__b)"
      />
    </svg>
  );
}

export default SvgComponent;

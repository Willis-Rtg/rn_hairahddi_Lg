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
        <stop offset={0} stopColor="#a93aff" />
        <stop offset={1} stopColor="#ff81ff" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={271}
        x2={271}
        y1={421}
        y2={90}
      >
        <stop offset={0} stopColor="#ffbef9" />
        <stop offset={1} stopColor="#fff1ff" />
      </linearGradient>
      <path
        d="M331 0H181c-8.291 0-15 6.709-15 15s6.709 15 15 15h45v75c0 8.291 6.709 15 15 15s15-6.709 15-15V30h75c8.262 0 15 6.724 15 15 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814-20.186-45-45-45zM151 150c-8.401 0-15 6.599-15 15v332c0 8.399 6.599 15 15 15h180c8.401 0 15-6.601 15-15v-76c0-16.5-13.499-30-30-30h-90V271h90c16.501 0 30-13.5 30-30v-76c0-8.401-6.599-15-15-15h-45l-45-30-45 30z"
        fill="url(#prefix__a)"
      />
      <path
        d="M211 241c-8.284 0-15 6.716-15 15v150c0 8.284 6.716 15 15 15h135V241zm75-136c0-8.401-6.599-15-15-15h-60c-8.401 0-15 6.599-15 15v45h90z"
        fill="url(#prefix__b)"
      />
    </svg>
  );
}

export default SvgComponent;

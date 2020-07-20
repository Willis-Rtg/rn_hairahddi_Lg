import * as React from "react";

function SvgComponent(props) {
  return (
    <svg height={512} viewBox="0 0 512 512" width={512} {...props}>
      <path
        d="M376 248h64v144a32 32 0 01-32 32 32 32 0 01-32-32z"
        fill="#eaeae8"
      />
      <rect fill="#cbcbcb" height={64} rx={16} width={32} x={376} y={296} />
      <path
        d="M248 120h208a32 32 0 0132 32v64a32 32 0 01-32 32H248V120z"
        fill="#eaeae8"
      />
      <path d="M248 120l-40 16h-32v96h32l40 16z" fill="#cbcbcb" />
      <path
        d="M176 160h24a8 8 0 010 16h-24zM176 192h24a8 8 0 010 16h-24z"
        fill="#eaeae8"
      />
      <circle cx={392} cy={312} fill="#fbb540" r={16} />
      <circle cx={336} cy={184} fill="#6ee7f5" r={8} />
      <circle cx={367.796} cy={184} fill="#6ee7f5" r={10} />
      <circle cx={400.592} cy={184} fill="#6ee7f5" r={8} />
      <path
        d="M144 160H72a40 40 0 1134.644-60.006 8 8 0 01-13.85 8.012A24 24 0 1072 144h72a8 8 0 010 16zM72 288a40 40 0 010-80h72a8 8 0 010 16H72a24 24 0 1020.794 35.994 8 8 0 0113.85 8.012A40.145 40.145 0 0172 288zM72 192H32a8 8 0 010-16h40a8 8 0 010 16zM128 192h-24a8 8 0 010-16h24a8 8 0 010 16z"
        fill="#fbb540"
      />
      <g fill="#cbcbcb">
        <path d="M488 152v8h-24a8 8 0 010-16h22.99a32 32 0 011.01 8zM488 176v16h-24a8 8 0 010-16zM488 208v8a32 32 0 01-1.01 8H464a8 8 0 010-16zM376 248h64v8h-64z" />
      </g>
    </svg>
  );
}

export default SvgComponent;

import e, { forwardRef as Y, createElement as A, useState as E, useEffect as $, useRef as _, createContext as J, useContext as q } from "react";
import { createPortal as j } from "react-dom";
const B = ({
  children: a,
  variant: t = "primary",
  size: s = "md",
  className: r = "",
  onClick: l,
  ...n
}) => {
  const o = {
    sm: { fontSize: "0.8rem", padding: "0.4rem 0.8rem" },
    md: { fontSize: "0.95rem", padding: "0.6rem 1.2rem" },
    lg: { fontSize: "1.1rem", padding: "0.8rem 1.6rem" }
  };
  return /* @__PURE__ */ e.createElement(
    "button",
    {
      className: `glass-btn ${t} ${r}`,
      style: {
        ...o[s],
        ...n.style
      },
      onClick: l,
      ...n
    },
    a
  );
}, Re = ({ children: a, className: t = "", hoverEffect: s = !1, ...r }) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: `${s ? "glass-interactive" : "glass"} ${t}`,
    style: { padding: "1.5rem", position: "relative", overflow: "hidden" },
    ...r
  },
  /* @__PURE__ */ e.createElement("div", { style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"
  } }),
  a
);
const K = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, r) => r ? r.toUpperCase() : s.toLowerCase()
), R = (a) => {
  const t = P(a);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, H = (...a) => a.filter((t, s, r) => !!t && t.trim() !== "" && r.indexOf(t) === s).join(" ").trim(), Q = (a) => {
  for (const t in a)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const te = Y(
  ({
    color: a = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: n,
    iconNode: o,
    ...i
  }, c) => A(
    "svg",
    {
      ref: c,
      ...ee,
      width: t,
      height: t,
      stroke: a,
      strokeWidth: r ? Number(s) * 24 / Number(t) : s,
      className: H("lucide", l),
      ...!n && !Q(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...o.map(([m, g]) => A(m, g)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
const h = (a, t) => {
  const s = Y(
    ({ className: r, ...l }, n) => A(te, {
      ref: n,
      iconNode: t,
      className: H(
        `lucide-${K(R(a))}`,
        `lucide-${a}`,
        r
      ),
      ...l
    })
  );
  return s.displayName = R(a), s;
};
const ae = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], se = h("check", ae);
const ne = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], V = h("chevron-down", ne);
const re = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], L = h("chevron-left", re);
const le = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], M = h("chevron-right", le);
const oe = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], ce = h("chevrons-left", oe);
const ie = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], de = h("chevrons-right", ie);
const me = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ge = h("circle-alert", me);
const ue = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], pe = h("circle-check-big", ue);
const ye = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], he = h("circle-x", ye);
const fe = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ve = h("file-text", fe);
const Ee = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], be = h("info", Ee);
const ke = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], xe = h("star", ke);
const Ne = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], we = h("triangle-alert", Ne);
const Ce = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], $e = h("upload", Ce);
const ze = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], S = h("x", ze), Me = ({ isOpen: a, onClose: t, title: s, children: r }) => {
  const [l, n] = E(!1);
  return $(() => {
    if (n(!0), a) {
      const o = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${o}px`, document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset", document.body.style.paddingRight = "0px";
    };
  }, [a]), !l || !a ? null : j(
    /* @__PURE__ */ e.createElement("div", { className: "glass-overlay" }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "glass glass-animate-enter",
        style: {
          width: "90%",
          maxWidth: "500px",
          padding: "1.5rem",
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }
      },
      /* @__PURE__ */ e.createElement("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid rgba(0,0,0,0.05)"
      } }, /* @__PURE__ */ e.createElement("h3", { style: { fontSize: "1.25rem", fontWeight: 700 } }, s), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: t,
          className: "glass-close-btn"
        },
        /* @__PURE__ */ e.createElement(S, { size: 20 })
      )),
      /* @__PURE__ */ e.createElement("div", { style: { color: "var(--color-text-dim)", lineHeight: 1.6 } }, r)
    )),
    document.body
  );
}, We = ({ label: a, error: t, ...s }) => /* @__PURE__ */ e.createElement("div", { style: { marginBottom: "1rem" } }, a && /* @__PURE__ */ e.createElement("label", { style: {
  display: "block",
  marginBottom: "0.4rem",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "var(--color-text)"
} }, a), /* @__PURE__ */ e.createElement("input", { className: "glass-input", ...s }), t && /* @__PURE__ */ e.createElement("span", { style: { fontSize: "0.8rem", color: "var(--color-accent)", marginTop: "0.2rem", display: "block" } }, t)), Ye = ({ options: a, value: t, onChange: s, placeholder: r = "Select..." }) => {
  const [l, n] = E(!1), [o, i] = E(!1), c = _(null);
  $(() => {
    l && i(!0);
  }, [l]);
  const m = () => {
    l || i(!1);
  };
  $(() => {
    const d = (p) => {
      c.current && !c.current.contains(p.target) && n(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []);
  const g = a.find((d) => d.value === t)?.label || r;
  return /* @__PURE__ */ e.createElement("div", { ref: c, style: { position: "relative", minWidth: "150px" } }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "glass-input",
      onClick: () => n(!l),
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        background: l ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"
      }
    },
    /* @__PURE__ */ e.createElement("span", null, g),
    /* @__PURE__ */ e.createElement(
      V,
      {
        size: 16,
        style: {
          transform: l ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.2s"
        }
      }
    )
  ), o && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass ${l ? "glass-dropdown-enter" : "glass-dropdown-exit"}`,
      onAnimationEnd: m,
      style: {
        position: "absolute",
        top: "110%",
        left: 0,
        right: 0,
        background: "rgba(255, 255, 255, 0.95)",
        padding: "0.5rem",
        zIndex: 50,
        maxHeight: "200px",
        overflowY: "auto"
      }
    },
    a.map((d) => /* @__PURE__ */ e.createElement(
      "div",
      {
        key: d.value,
        onClick: () => {
          s(d.value), n(!1);
        },
        style: {
          padding: "0.6rem 0.8rem",
          borderRadius: "8px",
          cursor: "pointer",
          color: t === d.value ? "var(--color-primary)" : "var(--color-text)",
          background: t === d.value ? "rgba(59, 130, 246, 0.1)" : "transparent",
          fontSize: "0.9rem",
          transition: "background 0.2s",
          marginBottom: "4px"
        },
        onMouseEnter: (p) => {
          t !== d.value && (p.currentTarget.style.background = "rgba(0,0,0,0.03)");
        },
        onMouseLeave: (p) => {
          t !== d.value && (p.currentTarget.style.background = "transparent");
        }
      },
      d.label
    ))
  ));
}, qe = ({ label: a, error: t, containerStyle: s, ...r }) => /* @__PURE__ */ e.createElement("div", { style: { marginBottom: "1rem", width: "100%", ...s } }, a && /* @__PURE__ */ e.createElement("label", { style: {
  display: "block",
  marginBottom: "0.4rem",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "var(--color-text)"
} }, a), /* @__PURE__ */ e.createElement("textarea", { className: "glass-textarea", ...r }), t && /* @__PURE__ */ e.createElement("span", { style: { fontSize: "0.8rem", color: "var(--color-accent)", marginTop: "0.2rem", display: "block" } }, t)), je = ({ checked: a, onChange: t, label: s }) => /* @__PURE__ */ e.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ e.createElement("label", { className: "glass-switch-label" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    className: "glass-switch-input",
    checked: a,
    onChange: (r) => t && t(r.target.checked)
  }
), /* @__PURE__ */ e.createElement("span", { className: "glass-switch-slider" })), s && /* @__PURE__ */ e.createElement("span", { style: { fontSize: "0.95rem", color: "var(--color-text)" } }, s)), He = ({ checked: a, onChange: t, label: s, ...r }) => /* @__PURE__ */ e.createElement("label", { className: "glass-checkbox-container", style: r.style }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    className: "glass-checkbox-input",
    checked: a,
    onChange: (l) => t && t(l.target.checked),
    ...r
  }
), /* @__PURE__ */ e.createElement("span", { className: "glass-checkbox-checkmark" }, a && /* @__PURE__ */ e.createElement(se, { size: 14, strokeWidth: 3 })), s), Ve = ({ checked: a, onChange: t, label: s, name: r, value: l, ...n }) => /* @__PURE__ */ e.createElement("label", { className: "glass-radio-container", style: n.style }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "radio",
    className: "glass-radio-input",
    name: r,
    value: l,
    checked: a,
    onChange: (o) => t && t(o.target.value),
    ...n
  }
), /* @__PURE__ */ e.createElement("span", { className: "glass-radio-circle" }), s), Oe = ({ value: a, min: t = 0, max: s = 100, onChange: r, ...l }) => /* @__PURE__ */ e.createElement("div", { className: "glass-slider-container", style: l.style }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "range",
    min: t,
    max: s,
    value: a,
    onChange: (n) => r && r(Number(n.target.value)),
    className: "glass-slider",
    ...l
  }
)), Ue = ({ value: a, max: t = 100, height: s = "12px", color: r, ...l }) => {
  const n = Math.min(100, Math.max(0, a / t * 100));
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "glass-progress-container",
      style: { height: s, ...l.style }
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "glass-progress-bar",
        style: {
          width: `${n}%`,
          backgroundColor: r || void 0
        }
      }
    )
  );
}, Xe = ({ children: a, variant: t = "default", className: s = "", ...r }) => {
  const l = {
    default: { background: "rgba(255, 255, 255, 0.5)", color: "var(--color-text)" },
    primary: { background: "rgba(59, 130, 246, 0.2)", color: "#1d4ed8", border: "1px solid rgba(59, 130, 246, 0.3)" },
    success: { background: "rgba(16, 185, 129, 0.2)", color: "#047857", border: "1px solid rgba(16, 185, 129, 0.3)" },
    warning: { background: "rgba(245, 158, 11, 0.2)", color: "#b45309", border: "1px solid rgba(245, 158, 11, 0.3)" },
    error: { background: "rgba(239, 68, 68, 0.2)", color: "#b91c1c", border: "1px solid rgba(239, 68, 68, 0.3)" }
  }, n = {
    ...l[t] || l.default
  };
  return /* @__PURE__ */ e.createElement("span", { className: `glass-badge ${s}`, style: { ...n, ...r.style }, ...r }, a);
}, F = J({}), Ze = ({ defaultValue: a, value: t, onValueChange: s, children: r, className: l = "", ...n }) => {
  const [o, i] = E(a), c = t !== void 0, m = c ? t : o, g = (d) => {
    c || i(d), s && s(d);
  };
  return /* @__PURE__ */ e.createElement(F.Provider, { value: { activeTab: m, setActiveTab: g } }, /* @__PURE__ */ e.createElement("div", { className: `glass-tabs ${l}`, ...n, style: { width: "100%", ...n.style } }, r));
}, Je = ({ children: a, className: t = "", ...s }) => /* @__PURE__ */ e.createElement("div", { className: `glass-tabs-list ${t}`, ...s }, a), Ke = ({ value: a, children: t, className: s = "", onClick: r, ...l }) => {
  const { activeTab: n, setActiveTab: o } = q(F), i = n === a, c = (m) => {
    o(a), r && r(m);
  };
  return /* @__PURE__ */ e.createElement(
    "button",
    {
      className: `glass-tab-trigger ${s}`,
      "data-state": i ? "active" : "inactive",
      onClick: c,
      ...l
    },
    t
  );
}, Pe = ({ value: a, children: t, className: s = "", ...r }) => {
  const { activeTab: l } = q(F);
  return l !== a ? null : /* @__PURE__ */ e.createElement("div", { className: `glass-tab-content glass-animate-enter ${s}`, ...r, style: { paddingTop: "1rem", ...r.style } }, t);
}, Qe = ({ columns: a, data: t, className: s = "", ...r }) => /* @__PURE__ */ e.createElement("div", { className: `glass-table-container ${s}`, ...r }, /* @__PURE__ */ e.createElement("table", { className: "glass-table" }, /* @__PURE__ */ e.createElement("thead", null, /* @__PURE__ */ e.createElement("tr", null, a.map((l, n) => /* @__PURE__ */ e.createElement("th", { key: n, style: { width: l.width } }, l.title)))), /* @__PURE__ */ e.createElement("tbody", null, t.map((l, n) => /* @__PURE__ */ e.createElement("tr", { key: n }, a.map((o, i) => /* @__PURE__ */ e.createElement("td", { key: `${n}-${i}` }, o.render ? o.render(l[o.key], l) : l[o.key]))))))), et = ({ src: a, alt: t, fallback: s, size: r = "md", className: l = "", ...n }) => {
  const o = {
    sm: { width: "32px", height: "32px", fontSize: "12px" },
    md: { width: "40px", height: "40px", fontSize: "14px" },
    lg: { width: "56px", height: "56px", fontSize: "18px" },
    xl: { width: "80px", height: "80px", fontSize: "24px" }
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-avatar ${l}`,
      style: { ...o[r], ...n.style },
      ...n
    },
    a ? /* @__PURE__ */ e.createElement("img", { src: a, alt: t, onError: (i) => {
      i.currentTarget.style.display = "none", i.currentTarget.nextSibling.style.display = "flex";
    } }) : null,
    /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "glass-avatar-fallback",
        style: { display: a ? "none" : "flex" }
      },
      s || t?.charAt(0).toUpperCase() || "?"
    )
  );
}, tt = ({ content: a, children: t, className: s = "", ...r }) => /* @__PURE__ */ e.createElement("div", { className: `glass-tooltip-trigger ${s}`, ...r }, t, /* @__PURE__ */ e.createElement("div", { className: "glass-tooltip-content" }, a)), at = ({ type: a = "info", title: t, children: s, className: r = "", ...l }) => {
  const n = {
    info: {
      background: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.2)",
      color: "#1d4ed8",
      icon: /* @__PURE__ */ e.createElement(be, { size: 20 })
    },
    success: {
      background: "rgba(16, 185, 129, 0.1)",
      borderColor: "rgba(16, 185, 129, 0.2)",
      color: "#047857",
      icon: /* @__PURE__ */ e.createElement(pe, { size: 20 })
    },
    warning: {
      background: "rgba(245, 158, 11, 0.1)",
      borderColor: "rgba(245, 158, 11, 0.2)",
      color: "#b45309",
      icon: /* @__PURE__ */ e.createElement(ge, { size: 20 })
    },
    error: {
      background: "rgba(239, 68, 68, 0.1)",
      borderColor: "rgba(239, 68, 68, 0.2)",
      color: "#b91c1c",
      icon: /* @__PURE__ */ e.createElement(he, { size: 20 })
    }
  }, o = n[a] || n.info;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-alert ${r}`,
      style: {
        background: o.background,
        borderColor: o.borderColor,
        color: o.color,
        ...l.style
      },
      ...l
    },
    /* @__PURE__ */ e.createElement("div", { style: { flexShrink: 0, marginTop: "2px" } }, o.icon),
    /* @__PURE__ */ e.createElement("div", null, t && /* @__PURE__ */ e.createElement("h5", { className: "glass-alert-title" }, t), /* @__PURE__ */ e.createElement("div", { className: "glass-alert-desc" }, s))
  );
}, st = ({ width: a, height: t, borderRadius: s, className: r = "", ...l }) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: `glass-skeleton ${r}`,
    style: {
      width: a,
      height: t,
      borderRadius: s || "8px",
      ...l.style
    },
    ...l
  }
), nt = ({
  accept: a,
  multiple: t,
  onUpload: s,
  title: r = "点击或拖拽文件上传",
  hint: l = "支持 JPG, PNG, PDF (最大 10MB)",
  showList: n = !0,
  className: o = "",
  ...i
}) => {
  const c = _(null), [m, g] = E([]), [d, p] = E(!1), y = (f) => {
    const v = Array.from(f.target.files);
    g((u) => t ? [...u, ...v] : v), s && s(v);
  }, x = (f) => {
    f.preventDefault(), p(!1);
    const v = Array.from(f.dataTransfer.files);
    g((u) => t ? [...u, ...v] : v), s && s(v);
  }, w = (f) => {
    g(m.filter((v, u) => u !== f));
  };
  return /* @__PURE__ */ e.createElement("div", { className: `glass-upload-container ${o}`, ...i }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-upload-zone ${d ? "active" : ""}`,
      onClick: () => c.current?.click(),
      onDragOver: (f) => {
        f.preventDefault(), p(!0);
      },
      onDragLeave: () => p(!1),
      onDrop: x,
      style: i.style
    },
    /* @__PURE__ */ e.createElement($e, { size: 32, strokeWidth: 1.5 }),
    /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { style: { fontWeight: 500, marginBottom: "0.2rem" } }, r), /* @__PURE__ */ e.createElement("p", { style: { fontSize: "0.8rem", opacity: 0.7 } }, l)),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "file",
        ref: c,
        style: { display: "none" },
        accept: a,
        multiple: t,
        onChange: y
      }
    )
  ), n && m.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "glass-upload-file-list" }, m.map((f, v) => /* @__PURE__ */ e.createElement("div", { key: v, className: "glass-upload-file-item" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", overflow: "hidden" } }, /* @__PURE__ */ e.createElement(ve, { size: 16 }), /* @__PURE__ */ e.createElement("span", { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, f.name)), /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => w(v),
      style: { color: "var(--color-text-dim)", cursor: "pointer", display: "flex" }
    },
    /* @__PURE__ */ e.createElement(S, { size: 16 })
  )))));
}, rt = ({ date: a, onDateSelect: t, className: s = "", ...r }) => {
  const l = /* @__PURE__ */ new Date(), [n, o] = E(a || l), [i, c] = E(a || null), m = (u) => {
    const k = u.getFullYear(), N = u.getMonth();
    return new Date(k, N + 1, 0).getDate();
  }, g = (u) => {
    const k = u.getFullYear(), N = u.getMonth();
    return new Date(k, N, 1).getDay();
  }, d = () => {
    o(new Date(n.getFullYear(), n.getMonth() - 1, 1));
  }, p = () => {
    o(new Date(n.getFullYear(), n.getMonth() + 1, 1));
  }, y = () => {
    o(new Date(n.getFullYear() - 1, n.getMonth(), 1));
  }, x = () => {
    o(new Date(n.getFullYear() + 1, n.getMonth(), 1));
  }, w = (u) => {
    const k = new Date(n.getFullYear(), n.getMonth(), u);
    c(k), t && t(k);
  }, f = () => {
    const u = m(n), k = g(n), N = [];
    for (let b = 0; b < k; b++)
      N.push(/* @__PURE__ */ e.createElement("div", { key: `empty-${b}`, className: "glass-calendar-day empty" }));
    for (let b = 1; b <= u; b++) {
      const X = b === l.getDate() && n.getMonth() === l.getMonth() && n.getFullYear() === l.getFullYear(), Z = i && b === i.getDate() && n.getMonth() === i.getMonth() && n.getFullYear() === i.getFullYear();
      N.push(
        /* @__PURE__ */ e.createElement(
          "div",
          {
            key: b,
            className: `glass-calendar-day ${X ? "today" : ""} ${Z ? "selected" : ""}`,
            onClick: () => w(b)
          },
          b
        )
      );
    }
    return N;
  }, v = ["日", "一", "二", "三", "四", "五", "六"];
  return /* @__PURE__ */ e.createElement("div", { className: `glass-calendar ${s}`, ...r, style: r.style }, /* @__PURE__ */ e.createElement("div", { className: "glass-calendar-header" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", gap: "4px" } }, /* @__PURE__ */ e.createElement("button", { onClick: y, title: "上一年", className: "glass-calendar-nav" }, /* @__PURE__ */ e.createElement(ce, { size: 18, color: "var(--color-text)" })), /* @__PURE__ */ e.createElement("button", { onClick: d, title: "上个月", className: "glass-calendar-nav" }, /* @__PURE__ */ e.createElement(L, { size: 18, color: "var(--color-text)" }))), /* @__PURE__ */ e.createElement("span", { className: "glass-calendar-title" }, n.getFullYear(), "年 ", n.getMonth() + 1, "月"), /* @__PURE__ */ e.createElement("div", { style: { display: "flex", gap: "4px" } }, /* @__PURE__ */ e.createElement("button", { onClick: p, title: "下个月", className: "glass-calendar-nav" }, /* @__PURE__ */ e.createElement(M, { size: 18, color: "var(--color-text)" })), /* @__PURE__ */ e.createElement("button", { onClick: x, title: "下一年", className: "glass-calendar-nav" }, /* @__PURE__ */ e.createElement(de, { size: 18, color: "var(--color-text)" })))), /* @__PURE__ */ e.createElement("div", { className: "glass-calendar-grid" }, v.map((u) => /* @__PURE__ */ e.createElement("div", { key: u, className: "glass-calendar-day-header" }, u)), f()));
}, lt = ({ currentPage: a, totalPages: t, onPageChange: s, className: r = "", ...l }) => {
  const n = [];
  for (let o = 1; o <= t; o++)
    n.push(o);
  return /* @__PURE__ */ e.createElement("div", { className: `glass-pagination ${r}`, ...l }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: `glass-pagination-item ${a === 1 ? "disabled" : ""}`,
      onClick: () => a > 1 && s(a - 1),
      disabled: a === 1
    },
    /* @__PURE__ */ e.createElement(L, { size: 16 })
  ), n.map((o) => /* @__PURE__ */ e.createElement(
    "button",
    {
      key: o,
      className: `glass-pagination-item ${a === o ? "active" : ""}`,
      onClick: () => s(o)
    },
    o
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: `glass-pagination-item ${a === t ? "disabled" : ""}`,
      onClick: () => a < t && s(a + 1),
      disabled: a === t
    },
    /* @__PURE__ */ e.createElement(M, { size: 16 })
  ));
}, ot = ({ isOpen: a, onClose: t, placement: s = "left", title: r, children: l, className: n = "", ...o }) => ($(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [a]), a ? j(
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "glass-drawer-overlay", onClick: t }), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-drawer-content glass-drawer-${s} ${n}`,
      ...o
    },
    /* @__PURE__ */ e.createElement("div", { className: "glass-drawer-header" }, /* @__PURE__ */ e.createElement("h3", { style: { fontSize: "1.2rem", fontWeight: 600 } }, r), /* @__PURE__ */ e.createElement("button", { onClick: t, style: { padding: "4px", cursor: "pointer", opacity: 0.6 } }, /* @__PURE__ */ e.createElement(S, { size: 20 }))),
    /* @__PURE__ */ e.createElement("div", { className: "glass-drawer-body" }, l)
  )),
  document.body
) : null), ct = ({ items: a, activeItem: t, onItemClick: s, className: r = "", ...l }) => /* @__PURE__ */ e.createElement("div", { className: `glass-menu ${r}`, ...l }, a.map((n, o) => /* @__PURE__ */ e.createElement(
  "div",
  {
    key: n.key || o,
    className: `glass-menu-item ${t === n.key ? "active" : ""}`,
    onClick: () => s && s(n.key)
  },
  n.icon && /* @__PURE__ */ e.createElement("span", { style: { marginRight: "10px", display: "flex" } }, n.icon),
  /* @__PURE__ */ e.createElement("span", null, n.label)
))), it = ({ items: a, className: t = "", allowMultiple: s = !1, ...r }) => {
  const [l, n] = E(/* @__PURE__ */ new Set([0])), o = (i) => {
    n((c) => {
      const m = new Set(s ? c : []);
      return c.has(i) ? m.delete(i) : m.add(i), m;
    });
  };
  return /* @__PURE__ */ e.createElement("div", { className: `glass-accordion ${t}`, ...r }, a.map((i, c) => {
    const m = l.has(c);
    return /* @__PURE__ */ e.createElement("div", { key: c, className: "glass-accordion-item" }, /* @__PURE__ */ e.createElement("button", { className: "glass-accordion-header", onClick: () => o(c) }, /* @__PURE__ */ e.createElement("span", null, i.title), m ? /* @__PURE__ */ e.createElement(V, { size: 16 }) : /* @__PURE__ */ e.createElement(M, { size: 16 })), /* @__PURE__ */ e.createElement("div", { className: `glass-accordion-content-wrapper ${m ? "expanded" : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "glass-accordion-content" }, /* @__PURE__ */ e.createElement("div", { className: "glass-accordion-inner" }, /* @__PURE__ */ e.createElement("div", { style: { color: "var(--color-text-dim)", lineHeight: 1.6 } }, i.content)))));
  }));
}, dt = ({ children: a, className: t = "", ...s }) => /* @__PURE__ */ e.createElement("div", { className: `glass-timeline ${t}`, ...s }, a), mt = ({ title: a, time: t, children: s, color: r = "var(--color-primary)" }) => /* @__PURE__ */ e.createElement("div", { className: "glass-timeline-item" }, /* @__PURE__ */ e.createElement("div", { className: "glass-timeline-dot", style: { borderColor: r } }), /* @__PURE__ */ e.createElement("div", { style: { marginBottom: "0.2rem", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ e.createElement("h5", { style: { fontSize: "1rem", fontWeight: 600 } }, a), t && /* @__PURE__ */ e.createElement("span", { style: { fontSize: "0.8rem", color: "var(--color-text-dim)" } }, t)), /* @__PURE__ */ e.createElement("div", { style: { color: "var(--color-text-dim)", fontSize: "0.9rem" } }, s)), gt = ({ slides: a, className: t = "", autoPlay: s = !1, ...r }) => {
  const [l, n] = E(0), o = () => {
    n((c) => c === a.length - 1 ? 0 : c + 1);
  }, i = () => {
    n((c) => c === 0 ? a.length - 1 : c - 1);
  };
  return e.useEffect(() => {
    if (!s) return;
    const c = setInterval(o, 3e3);
    return () => clearInterval(c);
  }, [s, a.length]), /* @__PURE__ */ e.createElement("div", { className: `glass-carousel ${t}`, ...r }, /* @__PURE__ */ e.createElement("button", { className: "glass-carousel-btn prev", onClick: i }, /* @__PURE__ */ e.createElement(L, { size: 20 })), /* @__PURE__ */ e.createElement("div", { className: "glass-carousel-track", style: { transform: `translateX(-${l * 100}%)` } }, a.map((c, m) => /* @__PURE__ */ e.createElement("div", { key: m, className: "glass-carousel-slide" }, c))), /* @__PURE__ */ e.createElement("button", { className: "glass-carousel-btn next", onClick: o }, /* @__PURE__ */ e.createElement(M, { size: 20 })));
}, ut = ({ trigger: a, content: t, className: s = "", ...r }) => {
  const [l, n] = E(!1), o = _(null);
  return $(() => {
    const i = (c) => {
      o.current && !o.current.contains(c.target) && n(!1);
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []), /* @__PURE__ */ e.createElement("div", { className: "glass-popover-trigger", ref: o, style: { position: "relative" } }, /* @__PURE__ */ e.createElement("div", { onClick: () => n(!l), style: { cursor: "pointer", display: "inline-block" } }, a), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-popover-content ${l ? "open" : ""} ${s}`,
      style: { top: "calc(100% + 10px)", left: "50%", transform: l ? "translate(-50%, 0) scale(1)" : "translate(-50%, -10px) scale(0.95)", ...r.style },
      ...r
    },
    t
  ));
}, pt = ({ children: a, onClose: t, className: s = "", ...r }) => /* @__PURE__ */ e.createElement("span", { className: `glass-tag ${s}`, ...r }, a, t && /* @__PURE__ */ e.createElement("span", { className: "close-icon", onClick: (l) => {
  l.stopPropagation(), t();
} }, /* @__PURE__ */ e.createElement(S, { size: 12 }))), yt = ({ size: a = "md", className: t = "", ...s }) => {
  const r = {
    sm: { width: "16px", height: "16px", borderWidth: "2px" },
    md: { width: "24px", height: "24px", borderWidth: "3px" },
    lg: { width: "40px", height: "40px", borderWidth: "4px" }
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `glass-spinner ${t}`,
      style: { ...r[a], ...s.style },
      ...s
    }
  );
}, ht = ({ isOpen: a, onClose: t, onConfirm: s, title: r = "确认操作", description: l = "您确定要执行此操作吗？", confirmText: n = "确认", cancelText: o = "取消" }) => /* @__PURE__ */ e.createElement(Me, { isOpen: a, onClose: t, title: r }, /* @__PURE__ */ e.createElement("div", { style: { textAlign: "center", padding: "0.5rem 0" } }, /* @__PURE__ */ e.createElement("div", { style: { display: "inline-flex", padding: "12px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement(we, { size: 32 })), /* @__PURE__ */ e.createElement("p", { style: { color: "var(--color-text-dim)", marginBottom: "1.5rem", lineHeight: 1.6 } }, l), /* @__PURE__ */ e.createElement("div", { style: { display: "flex", gap: "1rem" } }, /* @__PURE__ */ e.createElement(B, { variant: "ghost", onClick: t, style: { flex: 1, border: "1px solid rgba(0,0,0,0.1)" } }, o), /* @__PURE__ */ e.createElement(B, { variant: "primary", onClick: s, style: { flex: 1 } }, n)))), ft = ({ value: a = 0, max: t = 5, onChange: s, readOnly: r = !1, size: l = 20, className: n = "", ...o }) => {
  const [i, c] = E(0);
  return /* @__PURE__ */ e.createElement("div", { className: `glass-rating ${n}`, onMouseLeave: () => c(0), ...o }, Array.from({ length: t }).map((m, g) => {
    const d = g + 1, y = (i > 0 ? i : a) >= d;
    return /* @__PURE__ */ e.createElement(
      xe,
      {
        key: g,
        size: l,
        className: `glass-rating-star ${y ? "filled" : ""}`,
        fill: y ? "currentColor" : "none",
        onMouseEnter: () => !r && c(d),
        onClick: () => !r && s && s(d),
        style: { cursor: r ? "default" : "pointer" }
      }
    );
  }));
}, T = () => typeof window < "u" && typeof document < "u";
let G = 5, Se = 1;
const z = /* @__PURE__ */ new Map(), Te = 2800, Ae = (a) => {
  const t = String(a);
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(t) : t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}, W = {
  info: "glass-toast--info",
  success: "glass-toast--success",
  warning: "glass-toast--warning",
  error: "glass-toast--error"
}, Ge = (a) => {
  const t = 'width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  switch (a) {
    case "success":
      return `<svg ${t}><path d="M20 6 9 17l-5-5"/></svg>`;
    case "error":
      return `<svg ${t}><path d="M18 6 6 18"/><path d="M6 6 18 18"/></svg>`;
    case "warning":
      return `<svg ${t}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`;
    default:
      return `<svg ${t}><path d="M12 16v-4"/><path d="M12 8h.01"/><circle cx="12" cy="12" r="10"/></svg>`;
  }
}, O = () => {
  if (!T() || !document.body) return null;
  let a = document.querySelector('.toast-container[data-frostglass-toast="1"]');
  return a || (a = document.createElement("div"), a.className = "toast-container", a.setAttribute("data-frostglass-toast", "1"), document.body.appendChild(a)), a;
}, De = (a) => {
  const t = Number(a);
  return Number.isFinite(t) ? Math.max(1, Math.min(10, Math.floor(t))) : 5;
}, _e = (a, t, s) => {
  if (!T() || !s || s <= 0) return;
  const r = window.setTimeout(() => I(a), s);
  z.set(a, { timer: r, node: t });
}, U = (a) => {
  const t = z.get(a);
  t && (window.clearTimeout(t.timer), z.delete(a));
}, D = (a, t) => {
  if (!t) return;
  U(a);
  const s = () => {
    t.removeEventListener("animationend", s), t.remove();
  };
  t.addEventListener("animationend", s, { once: !0 }), t.classList.remove("toast-enter"), t.classList.add("toast-exit"), window.setTimeout(s, 350);
}, I = (a) => {
  if (!T()) return;
  const t = String(a), s = z.get(t);
  if (s?.node) {
    D(t, s.node);
    return;
  }
  const r = document.querySelector(`.glass-toast[data-toast-id="${Ae(t)}"]`);
  r && D(t, r);
}, Le = () => {
  if (!T()) return;
  const a = O();
  a && a.querySelectorAll(".glass-toast").forEach((t) => {
    const s = t.getAttribute("data-toast-id");
    s && U(s), t.remove();
  });
}, Fe = ({ limit: a } = {}) => {
  G = De(a);
}, C = ({
  type: a = "info",
  title: t,
  message: s,
  duration: r = Te,
  id: l
} = {}) => {
  const n = O();
  if (!n) return null;
  const o = String(l ?? Se++), i = W[a] ? a : "info", c = document.createElement("div");
  c.className = `glass-toast toast-enter ${W[i]}`, c.setAttribute("role", "status"), c.setAttribute("aria-live", i === "error" ? "assertive" : "polite"), c.setAttribute("data-toast-id", String(o));
  const m = document.createElement("span");
  m.className = "glass-toast-icon", m.setAttribute("aria-hidden", "true"), m.innerHTML = Ge(i);
  const g = document.createElement("div");
  if (g.className = "glass-toast-content", t) {
    const y = document.createElement("div");
    y.className = "glass-toast-title", y.textContent = String(t), g.appendChild(y);
  }
  if (s) {
    const y = document.createElement("div");
    y.className = "glass-toast-message", y.textContent = String(s), g.appendChild(y);
  }
  const d = document.createElement("button");
  d.type = "button", d.className = "glass-toast-close", d.setAttribute("aria-label", "关闭"), d.textContent = "×", d.addEventListener("click", () => I(o)), c.appendChild(m), c.appendChild(g), c.appendChild(d), n.appendChild(c);
  const p = n.querySelectorAll(".glass-toast");
  if (p.length > G) {
    const y = p.length - G;
    for (let x = 0; x < y; x += 1) {
      const w = p[x], f = w.getAttribute("data-toast-id");
      D(f ?? "", w);
    }
  }
  return _e(o, c, r), o;
}, vt = {
  show: C,
  info: (a, t = {}) => C({ ...t, type: "info", message: a }),
  success: (a, t = {}) => C({ ...t, type: "success", message: a }),
  warning: (a, t = {}) => C({ ...t, type: "warning", message: a }),
  error: (a, t = {}) => C({ ...t, type: "error", message: a }),
  dismiss: I,
  clear: Le,
  configure: Fe
};
export {
  it as GlassAccordion,
  at as GlassAlert,
  et as GlassAvatar,
  Xe as GlassBadge,
  B as GlassButton,
  rt as GlassCalendar,
  Re as GlassCard,
  gt as GlassCarousel,
  He as GlassCheckbox,
  ht as GlassConfirm,
  ot as GlassDrawer,
  Ye as GlassDropdown,
  We as GlassInput,
  ct as GlassMenu,
  Me as GlassModal,
  lt as GlassPagination,
  ut as GlassPopover,
  Ue as GlassProgress,
  Ve as GlassRadio,
  ft as GlassRating,
  st as GlassSkeleton,
  Oe as GlassSlider,
  yt as GlassSpinner,
  je as GlassSwitch,
  Qe as GlassTable,
  Ze as GlassTabs,
  Pe as GlassTabsContent,
  Je as GlassTabsList,
  Ke as GlassTabsTrigger,
  pt as GlassTag,
  qe as GlassTextarea,
  dt as GlassTimeline,
  mt as GlassTimelineItem,
  tt as GlassTooltip,
  nt as GlassUpload,
  Le as clearToasts,
  Fe as configureToast,
  I as dismiss,
  C as showToast,
  vt as toast
};
//# sourceMappingURL=frostglass.es.js.map

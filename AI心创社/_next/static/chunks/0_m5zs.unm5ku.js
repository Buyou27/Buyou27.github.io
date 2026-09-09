(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  31713,
  (e) => {
    "use strict";
    var s = e.i(88287),
      i = e.i(58298);
    let a = (globalThis.AIX_DATA && globalThis.AIX_DATA.departments) || [],
      r = (globalThis.AIX_DATA && globalThis.AIX_DATA.benefits) || [],
      t = (globalThis.AIX_DATA && globalThis.AIX_DATA.sparkles) || [];
    function n() {
      let e = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(() => {
          let s = e.current;
          if (!s) return;
          let i = s.getContext("2d");
          if (!i) return;
          let a = 0,
            r = 0,
            t = 1,
            n = 0,
            l = [],
            d = 0,
            o = 0,
            c = 0,
            h = 0,
            m = 0,
            x = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            j = (e = !1) => {
              let s = e ? 900 * Math.random() + 1 : 900;
              return {
                x: (Math.random() - 0.5) * a * 1.7,
                y: (Math.random() - 0.5) * r * 1.7,
                z: s,
                previousZ: s + 7,
                glow: 0.35 + 0.65 * Math.random(),
              };
            },
            p = () => {
              let e = s.getBoundingClientRect();
              (a = e.width),
                (r = e.height),
                (t = Math.min(window.devicePixelRatio || 1, 1.25)),
                (s.width = Math.max(1, Math.round(a * t))),
                (s.height = Math.max(1, Math.round(r * t))),
                i.setTransform(t, 0, 0, t, 0, 0),
                (l = Array.from(
                  {
                    length: a < 700 ? 150 : Math.min(340, Math.round(0.23 * a)),
                  },
                  () => j(!0),
                ));
            },
            u = (e) => {
              let i = s.getBoundingClientRect();
              if (
                e.clientX < i.left ||
                e.clientX > i.right ||
                e.clientY < i.top ||
                e.clientY > i.bottom
              ) {
                (d = 0), (o = 0);
                return;
              }
              (d = ((e.clientX - i.left) / i.width - 0.5) * 64),
                (o = ((e.clientY - i.top) / i.height - 0.5) * 42);
            },
            y = (e) => {
              if (!x && e - m < 22) {
                n = requestAnimationFrame(y);
                return;
              }
              (m = e),
                (c += (d - c) * 0.045),
                (h += (o - h) * 0.045),
                i.clearRect(0, 0, a, r);
              let s = 0.5 * a + c,
                t = 0.48 * r + h,
                p = x ? 0 : Math.sin(0.00125 * e),
                u = x ? 0 : 4.8 + (p + 1) * 1.65,
                v = 0.72 * Math.max(a, r);
              (i.globalCompositeOperation = "lighter"),
                l.forEach((e, n) => {
                  (e.previousZ = e.z), (e.z -= u * (0.72 + (n % 7) * 0.045));
                  let l = s + (e.x / e.z) * v,
                    d = t + (e.y / e.z) * v,
                    o = s + (e.x / Math.max(e.previousZ, 1)) * v,
                    c = t + (e.y / Math.max(e.previousZ, 1)) * v;
                  if (
                    e.z < 2 ||
                    l < -120 ||
                    l > a + 120 ||
                    d < -120 ||
                    d > r + 120
                  )
                    return void Object.assign(e, j());
                  let h = 1 - e.z / 900,
                    m = Math.min(0.9, 0.12 + 0.85 * h) * e.glow,
                    x = 0.35 + 2.1 * h;
                  i.beginPath(),
                    i.moveTo(o, c),
                    i.lineTo(l, d),
                    (i.strokeStyle = `rgba(196, 229, 255, ${m})`),
                    (i.lineWidth = x),
                    i.stroke(),
                    n % 18 == 0 &&
                      (i.beginPath(),
                      i.arc(l, d, 0.58 * x, 0, 2 * Math.PI),
                      (i.fillStyle = `rgba(235, 247, 255, ${Math.min(1, m + 0.2)})`),
                      i.fill());
                }),
                (i.globalCompositeOperation = "source-over"),
                x || (n = requestAnimationFrame(y));
            };
          return (
            p(),
            window.addEventListener("resize", p),
            window.addEventListener("pointermove", u, { passive: !0 }),
            y(0),
            () => {
              cancelAnimationFrame(n),
                window.removeEventListener("resize", p),
                window.removeEventListener("pointermove", u);
            }
          );
        }, []),
        (0, s.jsx)("canvas", {
          className: "hero-canvas",
          ref: e,
          "aria-hidden": "true",
        })
      );
    }
    e.s([
      "default",
      0,
      function () {
        let [e, l] = (0, i.useState)(null),
          d = (0, i.useRef)(null),
          o = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = Array.from(document.querySelectorAll("[data-reveal]")),
              s = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting &&
                      (e.target.classList.add("is-visible"),
                      s.unobserve(e.target));
                  });
                },
                { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
              );
            return e.forEach((e) => s.observe(e)), () => s.disconnect();
          }, []),
          (0, i.useEffect)(() => {
            let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              s = new Set(),
              i = (i) => {
                if (0 === i.clientX && 0 === i.clientY) return;
                let a = i.target instanceof Element ? i.target : null,
                  r = a?.closest("main > section[id]"),
                  t = r
                    ? { home: "about", about: "teams", teams: "join" }[r.id]
                    : void 0,
                  n = !!a?.closest(
                    "a, button, input, textarea, select, summary, [role='button']",
                  ),
                  l = window.getSelection()?.isCollapsed === !1,
                  d = !!(t && !n && !l);
                if (!e.matches) {
                  let e = document.createElement("span");
                  (e.className = d
                    ? "interaction-burst is-transition"
                    : "interaction-burst"),
                    (e.style.left = `${i.clientX}px`),
                    (e.style.top = `${i.clientY}px`);
                  let a = document.createElement("span");
                  a.className = "interaction-ring";
                  let r = document.createElement("span");
                  r.className = "interaction-ring interaction-ring-echo";
                  let t = document.createElement("span");
                  (t.className = "interaction-core"), e.append(a, r, t);
                  for (let s = 0; s < 10; s += 1) {
                    let i = document.createElement("i");
                    i.style.setProperty("--particle-angle", `${36 * s}deg`),
                      i.style.setProperty(
                        "--particle-distance",
                        `${48 + (s % 3) * 13}px`,
                      ),
                      e.append(i);
                  }
                  document.body.append(e);
                  let n = window.setTimeout(() => {
                    e.remove(), s.delete(n);
                  }, 940);
                  s.add(n);
                }
                if (d && t) {
                  let i = window.setTimeout(() => {
                    let a = document.getElementById(t);
                    a &&
                      (window.history.replaceState(null, "", `#${t}`),
                      a.scrollIntoView({
                        behavior: e.matches ? "auto" : "smooth",
                        block: "start",
                      }),
                      s.delete(i));
                  }, 170 * !e.matches);
                  s.add(i);
                }
              };
            return (
              window.addEventListener("click", i, { passive: !0 }),
              () => {
                window.removeEventListener("click", i),
                  s.forEach((e) => window.clearTimeout(e)),
                  document
                    .querySelectorAll(".interaction-burst")
                    .forEach((e) => e.remove());
              }
            );
          }, []),
          (0, i.useEffect)(() => {
            if (!e) return;
            let s = document.body.style.overflow;
            (document.body.style.overflow = "hidden"), d.current?.focus();
            let i = (e) => {
              "Escape" === e.key && l(null);
            };
            return (
              window.addEventListener("keydown", i),
              () => {
                (document.body.style.overflow = s),
                  window.removeEventListener("keydown", i);
              }
            );
          }, [e]),
          (0, s.jsxs)("main", {
            children: [
              (0, s.jsxs)("nav", {
                className: "site-nav",
                "aria-label": "主导航",
                children: [
                  (0, s.jsxs)("a", {
                    className: "brand-mark",
                    href: "#home",
                    "aria-label": "AI心创社首页",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "mark-grid",
                        "aria-hidden": "true",
                        children: [
                          (0, s.jsx)("i", {}),
                          (0, s.jsx)("i", {}),
                          (0, s.jsx)("i", {}),
                          (0, s.jsx)("i", {}),
                        ],
                      }),
                      (0, s.jsx)("span", { children: "AI心创社" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "nav-links",
                    children: [
                      (0, s.jsxs)("a", {
                        href: "#home",
                        children: [
                          (0, s.jsx)("span", { children: "01" }),
                          " Home",
                        ],
                      }),
                      (0, s.jsxs)("a", {
                        href: "#about",
                        children: [
                          (0, s.jsx)("span", { children: "02" }),
                          " About",
                        ],
                      }),
                      (0, s.jsxs)("a", {
                        href: "#teams",
                        children: [
                          (0, s.jsx)("span", { children: "03" }),
                          " Teams",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("a", {
                    className: "nav-join",
                    href: "#join",
                    children: [
                      "Join us",
                      (0, s.jsx)("span", {
                        className: "css-arrow css-arrow-down-right",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("section", {
                className: "hero cosmic-hero",
                id: "home",
                "aria-labelledby": "hero-title",
                ref: o,
                onPointerMove: (e) => {
                  let s = o.current;
                  if (!s) return;
                  let i = s.getBoundingClientRect(),
                    a = (e.clientX - i.left) / i.width - 0.5,
                    r = (e.clientY - i.top) / i.height - 0.5;
                  s.style.setProperty("--title-rx", `${-5 * r}deg`),
                    s.style.setProperty("--title-ry", `${7 * a}deg`),
                    s.style.setProperty("--title-x", `${12 * a}px`),
                    s.style.setProperty("--title-y", `${9 * r}px`);
                },
                onPointerLeave: () => {
                  let e = o.current;
                  e &&
                    (e.style.setProperty("--title-rx", "0deg"),
                    e.style.setProperty("--title-ry", "0deg"),
                    e.style.setProperty("--title-x", "0px"),
                    e.style.setProperty("--title-y", "0px"));
                },
                children: [
                  (0, s.jsx)(n, {}),
                  (0, s.jsx)("div", {
                    className: "hero-horizon",
                    "aria-hidden": "true",
                  }),
                  (0, s.jsxs)("div", {
                    className: "hero-kicker hero-enter",
                    children: [
                      (0, s.jsx)("span", {
                        children: "Interdisciplinary AI Community",
                      }),
                      (0, s.jsx)("span", { children: "EST. 2026" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "hero-title-wrap",
                    children: [
                      (0, s.jsxs)("p", {
                        className: "hero-formula hero-enter",
                        children: [
                          "AI ",
                          (0, s.jsx)("span", { children: "×" }),
                          " Psychology ",
                          (0, s.jsx)("span", { children: "×" }),
                          " Innovation",
                        ],
                      }),
                      (0, s.jsx)("h1", {
                        id: "hero-title",
                        className: "hero-title interactive-title hero-enter",
                        children: ["A", "I", "心", "创", "社"].map((e, i) =>
                          (0, s.jsx)(
                            "span",
                            {
                              className: "hero-char",
                              style: { "--char-index": i },
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, s.jsxs)("p", {
                        className: "hero-summary hero-enter",
                        children: [
                          "探索人工智能无限可能，连接科技与人文温度。",
                          (0, s.jsx)("span", {
                            children: "让每一份创意，都有落地的可能。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "hero-mobile-interface",
                    "aria-hidden": "true",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "hero-mobile-orbit",
                        children: [
                          (0, s.jsx)("span", { children: "AI" }),
                          (0, s.jsx)("i", {}),
                          (0, s.jsx)("i", {}),
                          (0, s.jsx)("i", {}),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "hero-mobile-readout",
                        children: [
                          (0, s.jsx)("span", { children: "Core teams" }),
                          (0, s.jsx)("strong", { children: "4" }),
                          (0, s.jsx)("small", {
                            children: "R&D / MEDIA / PLAN / OFFICE",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "hero-bottom hero-enter",
                    children: [
                      (0, s.jsx)("p", {
                        className: "hero-footnote",
                        children: "Technology with human warmth",
                      }),
                      (0, s.jsxs)("a", {
                        className: "scroll-cue hero-enter",
                        href: "#about",
                        children: [
                          (0, s.jsx)("span", { children: "Scroll to explore" }),
                          (0, s.jsx)("i", { "aria-hidden": "true" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("section", {
                className: "about-section",
                id: "about",
                "aria-labelledby": "about-title",
                children: [
                  (0, s.jsxs)("div", {
                    className: "section-index",
                    "data-reveal": !0,
                    children: [
                      (0, s.jsx)("span", { children: "02 / ABOUT US" }),
                      (0, s.jsx)("span", { children: "我们是谁" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "about-intro",
                    children: [
                      (0, s.jsxs)("h2", {
                        id: "about-title",
                        className: "shiny-heading shiny-heading-about",
                        "data-reveal": !0,
                        children: [
                          "技术之外，",
                          (0, s.jsx)("br", {}),
                          "我们更关心",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("em", { children: "为何创造。" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "about-copy",
                        "data-reveal": !0,
                        children: [
                          (0, s.jsxs)("p", {
                            children: [
                              "AI心创社是专注于",
                              (0, s.jsx)("strong", {
                                children: "人工智能与心理学融合创新",
                              }),
                              "的科创社团。",
                            ],
                          }),
                          (0, s.jsx)("p", {
                            children:
                              "我们打造跨学科创新实践平台，通过 AI 技术研发、产品实践、科创竞赛与创新创业项目，让技术回应真实需求。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "about-words",
                    "aria-label": "核心关键词",
                    children: [
                      "AI",
                      "Psychology",
                      "Innovation",
                      "Product",
                      "Practice",
                    ].map((e, i) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "word-row",
                          "data-reveal": !0,
                          style: { "--delay": `${70 * i}ms` },
                          children: [
                            (0, s.jsxs)("span", { children: ["0", i + 1] }),
                            (0, s.jsx)("strong", { children: e }),
                            (0, s.jsx)("i", {
                              className: "css-arrow css-arrow-up-right",
                              "aria-hidden": "true",
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "about-metrics",
                    children: [
                      (0, s.jsxs)("article", {
                        "data-reveal": !0,
                        children: [
                          (0, s.jsxs)("div", {
                            className: "metric-value",
                            children: [
                              (0, s.jsx)("strong", { children: "4" }),
                              (0, s.jsx)("small", { children: "Teams" }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: "专业团队" }),
                          (0, s.jsx)("p", {
                            children: "在不同位置，共同完成一件事。",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("article", {
                        "data-reveal": !0,
                        children: [
                          (0, s.jsxs)("div", {
                            className: "metric-value",
                            children: [
                              (0, s.jsx)("strong", { children: "5" }),
                              (0, s.jsx)("small", { children: "Dimensions" }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: "实践维度" }),
                          (0, s.jsx)("p", {
                            children: "技术、心理、创新、产品与行动。",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("article", {
                        "data-reveal": !0,
                        children: [
                          (0, s.jsxs)("div", {
                            className: "metric-value",
                            children: [
                              (0, s.jsx)("strong", { children: "∞" }),
                              (0, s.jsx)("small", {
                                children: "Possibilities",
                              }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: "创造可能" }),
                          (0, s.jsx)("p", {
                            children: "不限制专业，只寻找愿意创造的人。",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("section", {
                className: "teams-section",
                id: "teams",
                "aria-labelledby": "teams-title",
                children: [
                  (0, s.jsx)("div", {
                    className: "teams-sparkles",
                    "aria-hidden": "true",
                    children: t.map((e) =>
                      (0, s.jsx)(
                        "i",
                        {
                          style: {
                            "--spark-x": e.x,
                            "--spark-y": e.y,
                            "--spark-size": e.size,
                            "--spark-delay": e.delay,
                            "--spark-duration": e.duration,
                          },
                        },
                        `${e.x}-${e.y}`,
                      ),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "section-index dark-index",
                    "data-reveal": !0,
                    children: [
                      (0, s.jsx)("span", { children: "03 / OUR TEAMS" }),
                      (0, s.jsx)("span", { children: "四种实践路径" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "teams-heading",
                    children: [
                      (0, s.jsxs)("h2", {
                        id: "teams-title",
                        className: "shiny-heading shiny-heading-teams",
                        "data-reveal": !0,
                        children: [
                          "Four teams.",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("em", { children: "One vision." }),
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        "data-reveal": !0,
                        children: [
                          "选择一个位置，进入一段真实的创造过程。",
                          (0, s.jsx)("br", {}),
                          "点击部门，了解你将在这里完成什么。",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "department-list",
                    children: a.map((e, i) =>
                      (0, s.jsxs)(
                        "button",
                        {
                          className: "department-row",
                          type: "button",
                          onClick: () => l(e),
                          "data-reveal": !0,
                          style: { "--delay": `${80 * i}ms` },
                          "aria-label": `查看${e.name}详情`,
                          children: [
                            (0, s.jsx)("span", {
                              className: "department-number",
                              children: e.id,
                            }),
                            (0, s.jsx)("span", {
                              className: "department-name",
                              children: e.name,
                            }),
                            (0, s.jsxs)("span", {
                              className: "department-info",
                              children: [
                                (0, s.jsx)("strong", { children: e.english }),
                                (0, s.jsx)("small", { children: e.summary }),
                              ],
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "department-arrow css-arrow css-arrow-up-right",
                              "aria-hidden": "true",
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)("section", {
                className: "join-section",
                id: "join",
                "aria-labelledby": "join-title",
                children: [
                  (0, s.jsxs)("div", {
                    className: "join-top",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "section-index join-index",
                        "data-reveal": !0,
                        children: [
                          (0, s.jsx)("span", { children: "04 / JOIN US" }),
                          (0, s.jsx)("span", { children: "从这里开始" }),
                        ],
                      }),
                      (0, s.jsxs)("h2", {
                        id: "join-title",
                        className: "shiny-heading shiny-heading-join",
                        "data-reveal": !0,
                        children: [
                          "Join",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("em", { children: "AI心创社" }),
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        className: "join-lead",
                        "data-reveal": !0,
                        children: [
                          "你不必已经成为专家。",
                          (0, s.jsx)("br", {}),
                          "只需要对未知保持好奇，并愿意亲手创造。",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "benefit-grid",
                    children: r.map((e, i) =>
                      (0, s.jsxs)(
                        "article",
                        {
                          className: "benefit-card",
                          "data-reveal": !0,
                          style: { "--delay": `${80 * i}ms` },
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", { children: e.id }),
                                (0, s.jsx)("i", {
                                  "aria-hidden": "true",
                                  children: "✦",
                                }),
                              ],
                            }),
                            (0, s.jsx)("small", { children: e.english }),
                            (0, s.jsx)("h3", { children: e.title }),
                            (0, s.jsx)("p", { children: e.copy }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "closing-statement",
                    "data-reveal": !0,
                    children: [
                      (0, s.jsxs)("p", {
                        children: [
                          "Find your role.",
                          (0, s.jsx)("br", {}),
                          "Build with us.",
                        ],
                      }),
                      (0, s.jsxs)("a", {
                        href: "#teams",
                        children: [
                          "找到你的团队",
                          (0, s.jsx)("span", {
                            className: "css-arrow css-arrow-up-right",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("footer", {
                    children: [
                      (0, s.jsxs)("a", {
                        className: "brand-mark footer-mark",
                        href: "#home",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "mark-grid",
                            "aria-hidden": "true",
                            children: [
                              (0, s.jsx)("i", {}),
                              (0, s.jsx)("i", {}),
                              (0, s.jsx)("i", {}),
                              (0, s.jsx)("i", {}),
                            ],
                          }),
                          (0, s.jsx)("span", { children: "AI心创社" }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        children: "AI × Psychology × Innovation",
                      }),
                      (0, s.jsxs)("a", {
                        href: "#home",
                        children: [
                          "Back to top",
                          (0, s.jsx)("span", {
                            className: "css-arrow css-arrow-up",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "footer-motion",
                    "aria-label": "创造下一种可能，加入AI心创社",
                    children: [
                      (0, s.jsx)("div", {
                        className: "footer-motion-track",
                        "aria-hidden": "true",
                        children: [0, 1].map((e) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: "footer-motion-group",
                              children: [
                                (0, s.jsx)("span", {
                                  children: "Create what comes next",
                                }),
                                (0, s.jsx)("i", { children: "✦" }),
                                (0, s.jsx)("span", {
                                  children: "Join AI心创社",
                                }),
                                (0, s.jsx)("i", { children: "✦" }),
                                (0, s.jsx)("span", {
                                  children: "AI × Psychology × Innovation",
                                }),
                                (0, s.jsx)("i", { children: "✦" }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className: "footer-motion-scan",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, s.jsx)("div", {
                  className: "modal-backdrop",
                  role: "presentation",
                  onMouseDown: (e) => {
                    e.currentTarget === e.target && l(null);
                  },
                  children: (0, s.jsxs)("section", {
                    className: "department-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "department-modal-title",
                    children: [
                      (0, s.jsxs)("button", {
                        className: "modal-close",
                        type: "button",
                        onClick: () => l(null),
                        ref: d,
                        "aria-label": "关闭部门详情",
                        children: [
                          (0, s.jsx)("span", { children: "Close" }),
                          (0, s.jsx)("i", {
                            "aria-hidden": "true",
                            children: "×",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "modal-heading",
                        children: [
                          (0, s.jsx)("span", { children: e.id }),
                          (0, s.jsx)("p", { children: e.english }),
                          (0, s.jsx)("h2", {
                            id: "department-modal-title",
                            children: e.name,
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "modal-description",
                        children: e.description,
                      }),
                      (0, s.jsxs)("div", {
                        className: "modal-columns",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h3", { children: "What we do" }),
                              (0, s.jsx)("ul", {
                                children: e.responsibilities.map((e) =>
                                  (0, s.jsx)("li", { children: e }, e),
                                ),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h3", { children: "What you gain" }),
                              (0, s.jsx)("ul", {
                                children: e.outcomes.map((e) =>
                                  (0, s.jsx)("li", { children: e }, e),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      },
    ]);
  },
]);

/**
 * AI心创社 · 站点内容数据
 * ============================================================
 * 这份文件集中存放页面上的「业务内容」，日常改文案 / 换部门 /
 * 调整权益，只改这里即可，无需改动其它代码。
 *
 * 页面 JS 会读取 window.AIX_DATA 来渲染内容，因此本文件必须
 * 在页面脚本之前加载（已放在 <head> 最前）。
 */
(function (global) {
  "use strict";

  global.AIX_DATA = {
    /* --------------------------------------------------------
     * 部门：对应「Our Teams」板块与点击后的部门详情弹窗
     *   id           编号（01 / 02 / ...）
     *   name         部门名称
     *   english      英文标语
     *   summary      列表里的简短介绍
     *   description  弹窗里的完整介绍
     *   responsibilities  弹窗「What we do」职责列表
     *   outcomes         弹窗「What you gain」收获列表
     * ------------------------------------------------------ */
    departments: [
      {
        id: "01",
        name: "AI研发部",
        english: "Build AI Products",
        summary: "负责人工智能项目研发、技术探索与产品迭代。",
        description:
          "从真实问题出发，完成技术调研、模型应用、原型开发与产品迭代，让想法成为可以被使用、被验证的 AI 产品。",
        responsibilities: [
          "AI 技术探索",
          "产品原型开发",
          "项目研发协作",
          "技术竞赛备赛",
        ],
        outcomes: ["完整项目经历", "技术作品集", "产品思维", "工程协作能力"],
      },
      {
        id: "02",
        name: "新媒体部",
        english: "Create Influence",
        summary: "负责品牌传播、内容运营与社团影响力建设。",
        description:
          "把前沿技术转化为有温度、可理解、愿意被分享的内容，建立 AI心创社统一而持续的品牌表达。",
        responsibilities: [
          "品牌视觉建设",
          "新媒体内容运营",
          "活动传播策划",
          "影像与内容创作",
        ],
        outcomes: ["品牌项目经验", "内容作品集", "传播策略能力", "审美表达能力"],
      },
      {
        id: "03",
        name: "策划部",
        english: "Create Experiences",
        summary: "负责活动策划、项目设计与创新实践。",
        description:
          "围绕 AI、心理学与青年创新设计活动和项目，从主题洞察、体验设计到现场执行，创造真正有参与感的实践场景。",
        responsibilities: [
          "主题活动策划",
          "创新项目设计",
          "竞赛方案组织",
          "活动现场执行",
        ],
        outcomes: [
          "策划全流程经验",
          "项目统筹能力",
          "创新方法训练",
          "公共表达能力",
        ],
      },
      {
        id: "04",
        name: "办公室",
        english: "Operate Together",
        summary: "负责社团管理、协同与运营保障。",
        description:
          "连接团队、成员与资源，设计高效清晰的协作机制，让每一个跨学科项目都能够稳定推进并持续成长。",
        responsibilities: [
          "社团日常运营",
          "成员发展支持",
          "部门沟通协调",
          "资源与项目管理",
        ],
        outcomes: ["组织运营经验", "协同管理能力", "资源整合能力", "领导力成长"],
      },
    ],

    /* --------------------------------------------------------
     * 权益：对应「Join Us」板块的 4 张卡片
     *   id       编号
     *   title    中文标题
     *   english  英文小标题
     *   copy     说明文案
     * ------------------------------------------------------ */
    benefits: [
      {
        id: "01",
        title: "真实项目",
        english: "Real Projects",
        copy: "从问题发现到产品交付，参与完整的 AI 项目实践，而不只是旁观。",
      },
      {
        id: "02",
        title: "跨界协作",
        english: "Cross-disciplinary",
        copy: "与不同专业的伙伴共同工作，让技术、心理与创意在同一个项目里发生。",
      },
      {
        id: "03",
        title: "科创成长",
        english: "Innovation Growth",
        copy: "获得竞赛备赛、创新创业与产品迭代支持，把能力转化为真实成果。",
      },
      {
        id: "04",
        title: "长期伙伴",
        english: "Shared Journey",
        copy: "找到志同道合的同行者，在持续创造中建立作品、经验与连接。",
      },
    ],

    /* --------------------------------------------------------
     * 星光粒子：团队板块背景里的闪烁光点位置
     *   x / y      横纵坐标（百分比）
     *   size       光点大小
     *   delay      动画延迟（负值为错开相位）
     *   duration   闪烁周期
     * ------------------------------------------------------ */
    sparkles: [
      { x: "7%", y: "13%", size: "3px", delay: "-1.2s", duration: "4.8s" },
      { x: "18%", y: "32%", size: "2px", delay: "-3.4s", duration: "6.1s" },
      { x: "31%", y: "18%", size: "4px", delay: "-2.1s", duration: "5.4s" },
      { x: "43%", y: "42%", size: "2px", delay: "-4.7s", duration: "6.8s" },
      { x: "57%", y: "11%", size: "3px", delay: "-0.8s", duration: "5.9s" },
      { x: "69%", y: "29%", size: "2px", delay: "-5.2s", duration: "7.1s" },
      { x: "84%", y: "16%", size: "4px", delay: "-2.9s", duration: "5.2s" },
      { x: "92%", y: "39%", size: "2px", delay: "-1.7s", duration: "6.4s" },
      { x: "12%", y: "61%", size: "2px", delay: "-4.1s", duration: "5.7s" },
      { x: "27%", y: "76%", size: "4px", delay: "-2.5s", duration: "6.6s" },
      { x: "48%", y: "67%", size: "3px", delay: "-5.6s", duration: "7.2s" },
      { x: "63%", y: "83%", size: "2px", delay: "-1.4s", duration: "5.5s" },
      { x: "78%", y: "62%", size: "3px", delay: "-3.8s", duration: "6.2s" },
      { x: "89%", y: "79%", size: "4px", delay: "-0.4s", duration: "5.8s" },
    ],
  };
})(typeof globalThis !== "undefined" ? globalThis : window);

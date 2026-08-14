import { orgChart } from "@/data/company";

const WIDTH = 1180;
const HEIGHT = 520;
const COLS = 5;
const COL_W = WIDTH / COLS;

const CEO_W = 170;
const CEO_H = 52;
const CEO_Y = 20;

const GM_W = 200;
const GM_H = 52;
const GM_Y = 112;

const SEC_W = 160;
const SEC_H = 52;

const BUS_Y = 186;

const DEPT_W = 196;
const DEPT_H = 52;
const DEPT_Y = 212;

const ROLE_W = 172;
const ROLE_H = 46;
const ROLE_GAP = 18;
const ROLE_START_Y = 302;

const LINE = "#a9c1db";
const LINE_WIDTH = 1.5;

function colCenter(i: number) {
  return COL_W * i + COL_W / 2;
}

type Box = { x: number; y: number; w: number; h: number; label: string; tone: "gold" | "neutral" };

function box(cx: number, y: number, w: number, h: number, label: string, tone: Box["tone"]): Box {
  return { x: cx - w / 2, y, w, h, label, tone };
}

export function OrgChart() {
  const ceoX = colCenter(2);
  const gmX = colCenter(2);
  const secX = gmX + GM_W / 2 + 45 + SEC_W / 2;
  const secY = GM_Y;

  const boxes: Box[] = [
    box(ceoX, CEO_Y, CEO_W, CEO_H, orgChart.ceo, "gold"),
    box(gmX, GM_Y, GM_W, GM_H, orgChart.reportsToCeo[0], "gold"),
    box(secX, secY, SEC_W, SEC_H, orgChart.underGm[0], "neutral"),
  ];

  // straight connector lines (rendered without an arrowhead)
  const lines: { d: string }[] = [
    { d: `M ${gmX} ${GM_Y + GM_H} L ${gmX} ${BUS_Y}` },
    { d: `M ${colCenter(0)} ${BUS_Y} L ${colCenter(COLS - 1)} ${BUS_Y}` },
  ];

  // connector lines that terminate at a box and get an arrowhead
  const arrows: { d: string }[] = [
    { d: `M ${ceoX} ${CEO_Y + CEO_H} L ${ceoX} ${GM_Y}` },
    { d: `M ${gmX + GM_W / 2} ${GM_Y + GM_H / 2} L ${secX - SEC_W / 2} ${secY + SEC_H / 2}` },
  ];

  orgChart.departments.forEach((dept, i) => {
    const cx = colCenter(i);
    boxes.push(box(cx, DEPT_Y, DEPT_W, DEPT_H, dept.name, "gold"));
    arrows.push({ d: `M ${cx} ${BUS_Y} L ${cx} ${DEPT_Y}` });

    if (dept.roles.length === 0) return;

    const spineX = cx - DEPT_W / 2 - 26;
    const roleBoxLeft = cx - ROLE_W / 2 - 4;
    const lastRoleCenterY = ROLE_START_Y + (dept.roles.length - 1) * (ROLE_H + ROLE_GAP) + ROLE_H / 2;

    lines.push({
      d: `M ${cx} ${DEPT_Y + DEPT_H} L ${cx} ${DEPT_Y + DEPT_H + 14} L ${spineX} ${DEPT_Y + DEPT_H + 14} L ${spineX} ${lastRoleCenterY}`,
    });

    dept.roles.forEach((role, roleIndex) => {
      const roleY = ROLE_START_Y + roleIndex * (ROLE_H + ROLE_GAP);
      const roleCenterY = roleY + ROLE_H / 2;
      boxes.push(box(cx, roleY, ROLE_W, ROLE_H, role, "neutral"));
      arrows.push({ d: `M ${spineX} ${roleCenterY} L ${roleBoxLeft} ${roleCenterY}` });
    });
  });

  return (
    <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-navy-50/60 p-6 sm:p-10">
      <div className="relative mx-auto" style={{ width: WIDTH, height: HEIGHT }}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
          className="absolute inset-0"
          aria-hidden
        >
          <defs>
            <marker
              id="orgArrow"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill={LINE} />
            </marker>
          </defs>
          {lines.map((line, i) => (
            <path
              key={`line-${i}`}
              d={line.d}
              fill="none"
              stroke={LINE}
              strokeWidth={LINE_WIDTH}
              strokeDasharray="5,4"
              strokeLinejoin="round"
            />
          ))}
          {arrows.map((arrow, i) => (
            <path
              key={`arrow-${i}`}
              d={arrow.d}
              fill="none"
              stroke={LINE}
              strokeWidth={LINE_WIDTH}
              strokeDasharray="5,4"
              strokeLinejoin="round"
              markerEnd="url(#orgArrow)"
            />
          ))}
        </svg>

        {boxes.map((b, i) => (
          <div
            key={`${b.label}-${i}`}
            style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
            className={`absolute flex items-center justify-center rounded-xl px-3 text-center text-sm font-semibold leading-tight shadow-sm ${
              b.tone === "gold"
                ? "bg-gold-400 text-navy-950"
                : "border border-navy-200 bg-white text-navy-800"
            }`}
          >
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}

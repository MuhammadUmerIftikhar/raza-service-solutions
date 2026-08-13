import { orgChart } from "@/data/company";

function Node({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "gold" | "neutral";
}) {
  return (
    <div
      className={`rounded-xl px-4 py-2.5 text-center text-sm font-semibold ${
        tone === "gold"
          ? "bg-gold-400 text-navy-950"
          : "border border-navy-200 bg-white text-navy-800"
      }`}
    >
      {label}
    </div>
  );
}

export function OrgChart() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:p-10">
      <div className="flex min-w-[720px] flex-col items-center gap-6">
        <Node label={orgChart.ceo} tone="gold" />
        <div className="h-6 w-px bg-navy-300" aria-hidden />
        <div className="flex items-center gap-6">
          <Node label={orgChart.reportsToCeo[0]} tone="gold" />
          <Node label={orgChart.underGm[0]} />
        </div>
        <div className="h-6 w-px bg-navy-300" aria-hidden />
        <div className="grid w-full grid-cols-5 gap-4">
          {orgChart.departments.map((dept) => (
            <div key={dept.name} className="flex flex-col items-center gap-3">
              <Node label={dept.name} tone="gold" />
              {dept.roles.map((role) => (
                <div key={role} className="w-full">
                  <div className="mx-auto h-4 w-px bg-navy-300" aria-hidden />
                  <Node label={role} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

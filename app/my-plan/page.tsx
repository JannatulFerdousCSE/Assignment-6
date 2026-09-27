import MyPlanPage from "@/components/MyPlanPage";

export default async function Page({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const params = await searchParams;
  const tab = params.tab === "saved" ? "saved" : "plan";
  return <MyPlanPage initialTab={tab} />;
}

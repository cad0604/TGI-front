import { ModuleOneCheckOut } from "@/components/checkout/one/payment";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <ModuleOneCheckOut id={params.id} />
    </div>
  );
}

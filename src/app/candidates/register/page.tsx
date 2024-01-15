import Breadcrumbs from "@/app/ui/candidates/breadcrumbs";
import Form from "@/app/ui/candidates/create-form";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Candidates", href: "/candidate" },
          {
            label: "Create Candidate",
            href: "/candidates/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

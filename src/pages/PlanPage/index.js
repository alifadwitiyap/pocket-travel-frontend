import { useState } from "react";
import Plan from "../../components/Plan";
import FormModalPlan from "../../components/FormModalPlan";

function PlanPage() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className="flex flex-col items-center mt-6">
      <Plan />
      <button onClick={() => setIsModalOpened(true)}>Open modal</button>
      {isModalOpened && <FormModalPlan action="create" setModal={setIsModalOpened} />}
    </div>
  );
}

export default PlanPage;

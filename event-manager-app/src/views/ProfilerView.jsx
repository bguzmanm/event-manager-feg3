import { Profiler } from "react";
import ProfilerExample from "../components/ProfilerExample";

export default function ProfilerView() {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`${id} (${phase}) tomó ${actualDuration}ms para renderizar`);
  };

  return (
    <div>
      <h1>React Profiler</h1>
      <Profiler id="ProfilerExample" onRender={onRenderCallback}>
        <ProfilerExample />
      </Profiler>
    </div>
  );
}

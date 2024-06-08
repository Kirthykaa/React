import ServiceContainer from "./ServiceContainer";
import "./Service.css";

export default function Service({ chef }) {
  return (
    <div className="Scripts">
      <ServiceContainer chef={chef} btn={true} />
    </div>
  );
}

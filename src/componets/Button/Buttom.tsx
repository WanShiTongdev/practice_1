import { sharedValueChildren } from "../../services/share-value-children.services";
import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const ChildrenButton = ({ label }: Pick<Props, "label">) => {
  const services = sharedValueChildren;

  return <div>{services.getValue()} </div>;
};

export const Buttom = ({ label, parentMethod }: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};

import { RadioChecked, RadioUnchecked } from "../icons";
import {
  QuestionOptionRoot,
  QuestionRadio,
  QuestionOptionLabel,
  QuestionOptionAnchor
} from "./QuestionOptions.style";

interface QuestionOptionProps {
  label: string;
  index: number;
  isChecked?: boolean;
  onSelect?: (e: QuestionOptionOnSelectEvent) => void;
}
interface QuestionOptionOnSelectEvent {
  label: string;
  index: number;
}

/**
 * Quesiton option.
 * @param   {QuestionOptionProps} props -
 * @returns {JSX.Element}
 */
export function QuestionOption({
  label,
  isChecked = false,
  index,
  onSelect
}: QuestionOptionProps) {
  const handleAnchorClick = () => {
    onSelect && onSelect({ label, index } as QuestionOptionOnSelectEvent);
  };
  return (
    <QuestionOptionRoot isChecked={isChecked}>
      <QuestionOptionAnchor onClick={handleAnchorClick}>
        <QuestionRadio>
          {isChecked ? <RadioChecked /> : <RadioUnchecked />}
        </QuestionRadio>
        <QuestionOptionLabel>{label}</QuestionOptionLabel>
      </QuestionOptionAnchor>
    </QuestionOptionRoot>
  );
}

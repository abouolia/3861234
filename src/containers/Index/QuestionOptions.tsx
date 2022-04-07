import React from 'react';
import {
  QuestionOptions,
  QuestionOption,
  QuestionOptionOnSelectEvent,
} from '../../components';

export interface QuestionOptionsRadioProps {
  options: { label: string }[];
  selectedOption?: number | null;
  onSelect?: (e: QuestionOptionOnSelectEvent) => void;
}

/**
 * Questions options radios.
 * @returns {JSX.Element}
 */
export function QuestionOptionsRadio({
  options,
  selectedOption,
  onSelect,
}: QuestionOptionsRadioProps) {
  return (
    <QuestionOptions>
      {options.map((option, index) => (
        <QuestionOption
          isChecked={index === selectedOption}
          label={option.label}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </QuestionOptions>
  );
}

import React from "react";
import IconNoText from "@/public/assets/images/emotion/no-text";

const NO_RESULT_DESCRIPTION = "또래 친구가 올린 지출 내역이 아직 없어요";

interface DescriptionAreaProps {
  descriptions?: string[];
}

interface NoResultProps extends DescriptionAreaProps {}

export default function NoResult({ descriptions = [NO_RESULT_DESCRIPTION] }: NoResultProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <IconNoText />

      <DescriptionArea descriptions={descriptions} />
    </div>
  );
}

function DescriptionArea({ descriptions = [NO_RESULT_DESCRIPTION] }: DescriptionAreaProps) {
  return (
    <div>
      {descriptions.map(description => (
        <p key={description} className="text-center r-14-400 text-gray-600">
          {description}
        </p>
      ))}
    </div>
  );
}

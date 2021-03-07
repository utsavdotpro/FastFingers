import React from "react";
import { getReadableScore } from "../../utils/methods";

export default function ScoreRow({ score, number }) {
  return (
    <tr>
      <td className="py-2">#{number}</td>
      <td className="py-2">{getReadableScore(score, false)}</td>
    </tr>
  );
}

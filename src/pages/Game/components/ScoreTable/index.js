import React from "react";
import { getReadableScore } from "../../../../utils/methods";

function ScoreRow({ score }) {
  return (
    <tr>
      <td className="py-2">#1</td>
      <td className="py-2">{getReadableScore(score, false)}</td>
    </tr>
  );
}

export default function ScoreTable({ scores = [] }) {
  return (
    <div className="rounded-md w-full overflow-hidden border">
      <table className="w-full text-center table-fixed">
        <tr className="bg-white text-black">
          <th colspan="2" className="py-1">
            Score Board
          </th>
        </tr>
        {scores.map((score) => (
          <ScoreRow score={score} />
        ))}
      </table>
    </div>
  );
}

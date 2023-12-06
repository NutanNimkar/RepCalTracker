import React from "react";

const MacrosTable = ({ foodData, name }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Food Details</h3>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Name:</td>
            <td className="py-2 border">{name}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Calories:</td>
            <td className="py-2 border">{foodData.calories}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Diet Labels:</td>
            <td className="py-2 border">
              {foodData.dietLabels.map((label, index) => (
                <span key={index} className="mr-2 bg-blue-200 p-1 rounded">
                  {label}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Protein:</td>
            <td className="py-2 border">
              {foodData.totalDaily.PROCNT && (
                <>
                  {foodData.totalDaily.PROCNT.quantity.toFixed(2)}g
                </>
              )}
            </td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Carbohydrates:</td>
            <td className="py-2 border">
              {foodData.totalDaily.CHOCDF && (
                <>
                  {foodData.totalDaily.CHOCDF.quantity.toFixed(2)}g
                </>
              )}
            </td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2 border">Fat:</td>
            <td className="py-2 border">
              {foodData.totalDaily.FAT && (
                <>
                  {foodData.totalDaily.FAT.quantity.toFixed(2)}g
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MacrosTable;

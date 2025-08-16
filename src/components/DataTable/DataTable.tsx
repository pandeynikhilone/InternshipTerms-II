import React, { useState } from "react";
import type { DataTableProps } from "./DataTable.types";

function DataTable<T extends { id: string | number }>({
  data = [],
  columns = [],
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  // Sorting logic
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        const aVal = (a as any)[sortKey];
        const bVal = (b as any)[sortKey];
        if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
        if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : data;

  // Row selection logic
  const handleRowSelect = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = selectable === "single" ? [row] : [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading data...</div>
    );
  }

  // Empty state
  if (!loading && data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No data available</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {selectable && <th className="p-2 border border-gray-300">Select</th>}
            {columns.map((col) => (
              <th
                key={col.key as string}
                className="p-2 text-left border border-gray-300 cursor-pointer"
                onClick={() => handleSort(col.key as string)}
              >
                {col.header}
                {sortKey === col.key && (sortOrder === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={(row as any).id ?? rowIndex}
              className={`hover:bg-gray-50 ${
                selectedRows.includes(row) ? "bg-blue-100" : ""
              }`}
              onClick={() => selectable && handleRowSelect(row)}
            >
              {selectable && (
                <td className="p-2 border border-gray-300">
                  <input
                    type={selectable === "single" ? "radio" : "checkbox"}
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key as string} className="p-2 border border-gray-300">
                  {(row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

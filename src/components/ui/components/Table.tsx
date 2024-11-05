type TableProps = {
  headers: string[];
  rows: Record<string, string>[];
};

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {/* Table Header */}
            {headers.map((header, index) => (
              <th
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td
                  className="whitespace-nowrap px-4 py-2 text-gray-700"
                  key={`row-${index}-${i}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

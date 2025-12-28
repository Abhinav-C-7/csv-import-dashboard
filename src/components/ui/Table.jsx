import Text from "./Text"

const Table = ({ title, headers = [], rows = [] }) => {
  return (
    <div className="w-full overflow-x-auto">
      {title && (
        <Text variant="subtitle" className="mb-2">
          {title}
        </Text>
      )}

      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border-b border-gray-200 px-4 py-2 text-left font-medium text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-gray-100 px-4 py-2 text-gray-800"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

import Button from "../components/ui/Button"
import Box from "../components/ui/Box"
import Text from "../components/ui/Text"
import Stack from "../components/ui/Stack"
import Card from "../components/ui/Card"
import Table from "../components/ui/Table"
import { useRef, useState } from "react"

const ImportBilling = () => {

const fileInputRef = useRef(null)
const [file, setFile] = useState(null)
const [headers, setHeaders] = useState([])
const [rows, setRows] = useState([])

  const [isUploading, setIsUploading] = useState(false)
const [uploaded, setUploaded] = useState(false)

const parseCSV = (file) => {
  const reader = new FileReader()

  reader.onload = (e) => {
    const text = e.target.result
    const lines = text.trim().split("\n")
    const data = lines.map(line => line.split(","))

    setHeaders(data[0])        // first row = headers
    setRows(data.slice(1))    // rest = rows
  }

  reader.readAsText(file)
}

  const handleSelectFile = () => {
    fileInputRef.current.click()
  }

  const handleUpload = () => {
  setIsUploading(true)
parseCSV(file)  
  setTimeout(() => {
    setIsUploading(false)
    setUploaded(true)
  }, 1500)
}

  return (
    <div className="pt-24">
      <Stack  gap="lg"  alignment="center" direction="vertical">
        <Text  variant="title">Import Billing Data</Text>
        <Text>Upload CSV files to import billing or invoice data</Text>
  

  <Card className="w-[929px] h-[404px] flex items-center justify-center">
  <Stack gap="lg" alignment="center">
    <Text variant="muted">Drag and drop your CSV file here</Text>
    <Button onClick={handleSelectFile} variant="primary">Select CSV file</Button>
     <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
              {file && (
      <Text variant="muted">
        Selected file: {file.name}
      </Text>
  
    )}

   {file && (
  <Button
    variant="primary"
    onClick={handleUpload}
    disabled={isUploading}
  >
    {isUploading ? "Uploading..." : "Upload CSV"}
  </Button>
)}
  </Stack>
</Card>
{uploaded && (
  <Card className="mt-8 w-[929px]">
    <Stack gap="md">
      <Text variant="subtitle">{file.name}</Text>
      <Table headers={headers} rows={rows} />
    </Stack>
  </Card>
)}


      </Stack>
    </div>
  )
}

export default ImportBilling
